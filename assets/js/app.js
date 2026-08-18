/* ============================================================
   Lógica compartida del bosquejo: cabecera, pie, carrito y WhatsApp.
   El carrito vive en localStorage para que se conserve entre páginas.
   ============================================================ */

/* ---------------- Almacenamiento tolerante a fallos ----------------
   Si el navegador bloquea localStorage (pasa al abrir con file://),
   caemos a memoria para que el bosquejo siga funcionando dentro de la página. */
const Guardado = (() => {
	let disponible = true
	try {
		localStorage.setItem("__prueba", "1")
		localStorage.removeItem("__prueba")
	} catch {
		disponible = false
	}
	const memoria = {}
	return {
		disponible,
		leer(clave) {
			try {
				return disponible ? localStorage.getItem(clave) : memoria[clave] ?? null
			} catch {
				return memoria[clave] ?? null
			}
		},
		escribir(clave, valor) {
			memoria[clave] = valor
			try {
				if (disponible) localStorage.setItem(clave, valor)
			} catch {
				/* sin persistencia, seguimos en memoria */
			}
		},
	}
})()

const CLAVE_CARRITO = "sbd_carrito"

/* ---------------- Carrito ---------------- */
const Carrito = {
	lineas() {
		try {
			return JSON.parse(Guardado.leer(CLAVE_CARRITO) || "[]")
		} catch {
			return []
		}
	},

	guardar(lineas) {
		Guardado.escribir(CLAVE_CARRITO, JSON.stringify(lineas))
		Carrito.pintarContador()
	},

	/** Identifica una línea por producto + presentación + aroma */
	idLinea(slug, presentacion, aroma) {
		return [slug, presentacion, aroma || "-"].join("|")
	},

	agregar(slug, presentacion, aroma, cantidad = 1) {
		const producto = productoPorSlug(slug)
		if (!producto) return
		const pres = producto.presentaciones.find((p) => p.etiqueta === presentacion)
		if (!pres || pres.precio == null) return // sin precio -> se cotiza, no se agrega

		const lineas = Carrito.lineas()
		const id = Carrito.idLinea(slug, presentacion, aroma)
		const existente = lineas.find((l) => l.id === id)

		if (existente) {
			existente.cantidad += cantidad
		} else {
			lineas.push({
				id,
				slug,
				nombre: producto.nombre,
				presentacion,
				aroma: aroma || "",
				codigo: pres.codigo,
				precio: pres.precio,
				cantidad,
			})
		}
		Carrito.guardar(lineas)
	},

	cambiarCantidad(id, cantidad) {
		const lineas = Carrito.lineas()
		const linea = lineas.find((l) => l.id === id)
		if (!linea) return
		linea.cantidad = Math.max(1, Math.min(999, cantidad))
		Carrito.guardar(lineas)
	},

	quitar(id) {
		Carrito.guardar(Carrito.lineas().filter((l) => l.id !== id))
	},

	vaciar() {
		Carrito.guardar([])
	},

	unidades() {
		return Carrito.lineas().reduce((t, l) => t + l.cantidad, 0)
	},

	subtotal() {
		return Carrito.lineas().reduce((t, l) => t + l.precio * l.cantidad, 0)
	},

	pintarContador() {
		const n = Carrito.unidades()
		document.querySelectorAll("[data-contador-carrito]").forEach((el) => {
			el.textContent = n
			el.classList.toggle("oculto", n === 0)
		})
	},
}

/* ---------------- WhatsApp ---------------- */
function enlaceWhatsApp(texto) {
	return `https://wa.me/${MARCA.whatsapp}?text=${encodeURIComponent(texto)}`
}

function textoCotizacion(producto, presentacion, aroma) {
	const partes = [`Hola ${MARCA.corto}, quisiera una cotización de:`, ``, `• ${producto.nombre}`]
	if (presentacion) partes.push(`  Presentación: ${presentacion}`)
	if (aroma) partes.push(`  Aroma: ${aroma}`)
	partes.push(``, `¿Me confirman precio y disponibilidad? Gracias.`)
	return partes.join("\n")
}

function textoPedidoCarrito() {
	const lineas = Carrito.lineas()
	if (!lineas.length) return `Hola ${MARCA.corto}, quisiera hacer un pedido.`
	const detalle = lineas.map(
		(l) => `• ${l.cantidad} × ${l.nombre} — ${l.presentacion}${l.aroma ? ` (${l.aroma})` : ""} = ${precioCOP(l.precio * l.cantidad)}`,
	)
	return [
		`Hola ${MARCA.corto}, quisiera confirmar este pedido:`,
		``,
		...detalle,
		``,
		`Total: ${precioCOP(Carrito.subtotal())}`,
	].join("\n")
}

/* ---------------- Aviso emergente ---------------- */
let temporizadorBrindis
function brindis(mensaje) {
	let el = document.querySelector(".brindis")
	if (!el) {
		el = document.createElement("div")
		el.className = "brindis"
		el.setAttribute("role", "status")
		document.body.appendChild(el)
	}
	el.innerHTML = `<span>✓</span><span>${mensaje}</span>`
	requestAnimationFrame(() => el.classList.add("visible"))
	clearTimeout(temporizadorBrindis)
	temporizadorBrindis = setTimeout(() => el.classList.remove("visible"), 2800)
}

/* ---------------- Cabecera y pie ---------------- */
const ENLACES_MENU = [
	{ href: "index.html", texto: "Inicio" },
	{ href: "tienda.html", texto: "Tienda" },
	{ href: "consejos.html", texto: "Consejos" },
	{ href: "contacto.html", texto: "Contacto" },
]

function pintarCabecera(activo) {
	const menu = ENLACES_MENU.map(
		(e) => `<li><a href="${e.href}" class="${e.href === activo ? "activo" : ""}">${e.texto}</a></li>`,
	).join("")

	document.body.insertAdjacentHTML(
		"afterbegin",
		`
	<div class="aviso-bosquejo">
		<strong>Bosquejo de presentación</strong> — maqueta navegable para revisión del cliente. Los pagos y envíos son simulados.
	</div>
	<div class="barra-superior">
		<div class="contenedor">
			<span>🚚 Envíos a ${MARCA.ciudad} y todo el país</span>
			<span>📞 Pedidos y cotizaciones por WhatsApp</span>
		</div>
	</div>
	<header class="cabecera">
		<div class="contenedor cabecera-fila">
			<a href="index.html" class="logo">
				<img src="assets/img/logo-sb.png" alt="Logo ${MARCA.nombre}">
				<span class="logo-texto">
					<strong>${MARCA.corto}</strong>
					<small>Productos de aseo</small>
				</span>
			</a>
			<ul class="menu" id="menu-principal">${menu}</ul>
			<div class="acciones-cabecera">
				<a href="carrito.html" class="boton-carrito">
					<span>🛒</span>
					<span>Carrito</span>
					<span class="contador oculto" data-contador-carrito>0</span>
				</a>
			</div>
			<button class="menu-movil" id="alternar-menu" aria-label="Abrir menú" aria-expanded="false">☰</button>
		</div>
	</header>`,
	)

	const boton = document.getElementById("alternar-menu")
	const lista = document.getElementById("menu-principal")
	boton?.addEventListener("click", () => {
		const abierto = lista.classList.toggle("abierto")
		boton.setAttribute("aria-expanded", String(abierto))
	})
}

function pintarPie() {
	const porCategoria = CATEGORIAS.slice(0, 5)
		.map((c) => `<li><a href="tienda.html?cat=${c.slug}">${c.nombre}</a></li>`)
		.join("")

	document.body.insertAdjacentHTML(
		"beforeend",
		`
	<footer class="pie">
		<div class="contenedor rejilla-pie">
			<div>
				<div class="logo-pie">
					<img src="assets/img/logo-sb.png" alt="">
					<span><strong>${MARCA.nombre}</strong><small>${MARCA.claim}</small></span>
				</div>
				<p>Fabricamos y distribuimos productos de aseo para hogar, comercio e industria.
				Presentaciones desde 500 ml hasta 20 litros, con precios especiales por volumen.</p>
			</div>
			<div>
				<h4>Categorías</h4>
				<ul>${porCategoria}</ul>
			</div>
			<div>
				<h4>Tienda</h4>
				<ul>
					<li><a href="tienda.html">Todos los productos</a></li>
					<li><a href="tienda.html?linea=industrial">Línea industrial</a></li>
					<li><a href="consejos.html">Consejos de limpieza</a></li>
					<li><a href="carrito.html">Mi carrito</a></li>
				</ul>
			</div>
			<div>
				<h4>Contacto</h4>
				<ul>
					<li><a href="${enlaceWhatsApp("Hola, quisiera información sobre sus productos.")}" target="_blank" rel="noopener">WhatsApp de ventas</a></li>
					<li><a href="mailto:${MARCA.correo}">${MARCA.correo}</a></li>
					<li>${MARCA.ciudad}</li>
					<li><a href="contacto.html">Formulario de contacto</a></li>
				</ul>
			</div>
		</div>
		<div class="contenedor pie-inferior">
			<span>© 2026 ${MARCA.nombre}. Bosquejo de presentación, no es una tienda operativa.</span>
			<span>Precios en pesos colombianos (COP)</span>
		</div>
	</footer>
	<a class="wa-flotante" href="${enlaceWhatsApp("Hola, quisiera hacer un pedido.")}" target="_blank" rel="noopener">
		<span class="icono">💬</span><span class="txt">Escríbenos</span>
	</a>`,
	)
}

/* ---------------- Tarjeta de producto ---------------- */
function tarjetaProducto(p) {
	const desde = precioDesde(p)
	const cat = categoriaPorSlug(p.categoria)
	const tieneIndustrial = p.presentaciones.some((x) => x.linea === "industrial")

	const insignias = []
	if (p.destacado) insignias.push(`<span class="insignia lima">Destacado</span>`)
	if (desde == null) insignias.push(`<span class="insignia cian">Cotización</span>`)
	else if (tieneIndustrial) insignias.push(`<span class="insignia gris">También 10 y 20 L</span>`)

	const presentaciones = p.presentaciones
		.slice(0, 4)
		.map((x) => `<span>${x.etiqueta}</span>`)
		.join("")

	const bloquePrecio =
		desde == null
			? `<span class="precio cotizar"><small>Precio</small><strong>A cotizar</strong></span>`
			: `<span class="precio"><small>Desde</small><strong>${precioCOP(desde)}</strong></span>`

	const accion =
		desde == null
			? `<a class="btn btn-secundario btn-mini" href="producto.html?p=${p.slug}">Cotizar</a>`
			: `<a class="btn btn-primario btn-mini" href="producto.html?p=${p.slug}">Ver opciones</a>`

	return `
	<article class="tarjeta-producto">
		<div class="insignias">${insignias.join("")}</div>
		<a class="marco-imagen" href="producto.html?p=${p.slug}" aria-label="${p.nombre}">
			<img src="${imagenDe(p)}" alt="${p.nombre}" loading="lazy">
		</a>
		<div class="cuerpo-tarjeta">
			<span class="cat-tarjeta">${cat ? cat.nombre : ""}</span>
			<h3><a href="producto.html?p=${p.slug}">${p.nombre}</a></h3>
			<p class="resumen-tarjeta">${p.resumen}</p>
			<div class="presentaciones-mini">${presentaciones}</div>
			<div class="pie-tarjeta">${bloquePrecio}${accion}</div>
		</div>
	</article>`
}

/* ---------------- Arranque ---------------- */
function iniciarPagina(activo) {
	pintarCabecera(activo)
	pintarPie()
	Carrito.pintarContador()
}
