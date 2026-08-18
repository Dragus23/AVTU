/* ============================================================
   Datos del catálogo — Super Brillo Díaz
   Fuente: "Catalogo productos de Aseo- 2026.pdf"
   Precios en pesos colombianos (COP), tal como figuran en el catálogo.
   ============================================================ */

const MARCA = {
	nombre: "Super Brillo Díaz",
	corto: "Super Brillo",
	claim: "Productos de aseo que rinden más",
	whatsapp: "573001234567", // <- reemplazar por el número real del cliente
	correo: "ventas@superbrillodiaz.com",
	ciudad: "Bogotá, Colombia",
}

/* Iconos de línea, dibujados en SVG para que hereden el color de la marca */
const svg = (trazos) =>
	`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${trazos}</svg>`

const CATEGORIAS = [
	{
		slug: "ropa",
		nombre: "Ropa y lavandería",
		icono: svg(`<path d="M8.5 3 12 6l3.5-3 4 2.2a2 2 0 0 1 1 1.9l-.6 3.4-3 .6V21H7.1v-9.9l-3-.6-.6-3.4a2 2 0 0 1 1-1.9Z"/>`),
	},
	{
		slug: "multiusos",
		nombre: "Multiusos y desengrasantes",
		icono: svg(`<path d="M9 8h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z"/><path d="M10 8V5.5A1.5 1.5 0 0 1 11.5 4h1A1.5 1.5 0 0 1 14 5.5V8"/><path d="M17 6h3M17 9l2.5-1.5"/><path d="M7 13h10"/>`),
	},
	{
		slug: "desinfeccion",
		nombre: "Desinfección",
		icono: svg(`<path d="M12 3 5 6v5.5c0 4.4 2.9 8.2 7 9.5 4.1-1.3 7-5.1 7-9.5V6Z"/><path d="m9 12 2.2 2.2L15.5 10"/>`),
	},
	{
		slug: "pisos",
		nombre: "Pisos y superficies",
		icono: svg(`<path d="m12 3 1.9 4.9L19 9.8l-5.1 1.9L12 16.6l-1.9-4.9L5 9.8l5.1-1.9Z"/><path d="M18 15.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8Z"/>`),
	},
	{
		slug: "industriales",
		nombre: "Químicos industriales",
		icono: svg(`<path d="M9.5 3h5v5.2l4.2 8.4A3 3 0 0 1 16 21H8a3 3 0 0 1-2.7-4.4L9.5 8.2Z"/><path d="M7.1 14h9.8"/><path d="M9.5 5.5h5"/>`),
	},
	{
		slug: "ambientadores",
		nombre: "Ambientadores",
		icono: svg(`<path d="M12 21a5 5 0 0 0 5-5c0-3.3-5-11-5-11S7 12.7 7 16a5 5 0 0 0 5 5Z"/><path d="M12 17.5a1.8 1.8 0 0 0 1.8-1.8"/>`),
	},
	{
		slug: "implementos",
		nombre: "Implementos de aseo",
		icono: svg(`<path d="M14.5 3.5 9 9"/><path d="m8 8 4 4"/><path d="M11.5 11.5 5 18v3h9.5l2.5-6.5Z"/><path d="M8.5 14.5 12 18"/>`),
	},
]

/* Sets de presentaciones que se repiten en el catálogo */
const P = (etiqueta, codigo, precio, linea) => ({ etiqueta, codigo, precio, linea })

const SET_ESTANDAR = [
	P("1 Litro", "0001", 7500, "hogar"),
	P("2 Litros", "0002", 13000, "hogar"),
	P("4 Litros", "0003", 23000, "hogar"),
	P("10 Litros", "0004", 46000, "industrial"),
	P("20 Litros", "0005", 73000, "industrial"),
]

const SET_ROPA_FINA = [
	P("1 Litro", "0001", 8500, "hogar"),
	P("2 Litros", "0002", 14000, "hogar"),
	P("4 Litros", "0003", 35000, "hogar"),
	P("10 Litros", "0004", 55000, "industrial"),
	P("20 Litros", "0005", 82000, "industrial"),
]

/* precio: null  ->  el catálogo no trae valor, se muestra "Cotizar" */
const SET_SIN_PRECIO_5 = [
	P("1 Litro", "0001", null, "hogar"),
	P("2 Litros", "0002", null, "hogar"),
	P("4 Litros", "0003", null, "hogar"),
]

const PRODUCTOS = [
	/* ---------------- ROPA Y LAVANDERÍA ---------------- */
	{
		slug: "ultrafusion",
		nombre: "Detergente Ultrafusion",
		subtitulo: "Con oxígeno activo",
		categoria: "ropa",
		pagina: 2,
		destacado: true,
		resumen: "Detergente concentrado con oxígeno activo que elimina manchas difíciles y protege los colores.",
		descripcion:
			"Combina tecnología avanzada con ingredientes de alto rendimiento para una limpieza profunda y un cuidado excepcional de tus prendas. Su fórmula concentrada elimina manchas difíciles, protege los colores y deja un fresco aroma duradero.",
		vinetas: ["Limpieza profunda, protección superior", "Menos cantidad, más resultados", "Mayor cuidado en prendas"],
		usos: ["Lavadora", "Ropa", "Lencería de cama", "Cortinas"],
		aromas: ["Frutal"],
		presentaciones: SET_ESTANDAR,
	},
	{
		slug: "actives",
		nombre: "Detergente Actives",
		subtitulo: "Con bicarbonato activo",
		categoria: "ropa",
		pagina: 3,
		resumen: "Ataca las manchas más difíciles y neutraliza malos olores gracias al bicarbonato.",
		descripcion:
			"Detergente ideal para combatir las manchas más difíciles y eliminar malos olores. Su fórmula con bicarbonato actúa profundamente, neutralizando olores y devolviendo a tus prendas su frescura original, sin dañar los tejidos.",
		vinetas: ["Más que limpieza, es frescura profunda", "Bicarbonato activo, limpieza sin igual"],
		usos: ["Lavadora", "Ropa", "Tejidos delicados"],
		aromas: ["Frutal"],
		presentaciones: SET_ESTANDAR,
	},
	{
		slug: "ropa-delicada",
		nombre: "Detergente Ropa Delicada",
		subtitulo: "Ropa Delicately",
		categoria: "ropa",
		pagina: 4,
		destacado: true,
		resumen: "Cuidado suave y efectivo para prendas delicadas, seda, encajes y ropa de bebé.",
		descripcion:
			"Cuidado suave y efectivo para tus prendas más delicadas. Limpieza profunda sin dañar las fibras ni los colores.",
		vinetas: [
			"Limpieza que protege y cuida tu ropa favorita",
			"Suavidad y frescura en cada lavado",
			"Porque tu ropa delicada merece lo mejor",
			"Lava con cariño, viste con estilo",
		],
		usos: ["Seda", "Encajes", "Tejidos delicados", "Ropa para bebé"],
		aromas: [],
		presentaciones: SET_ROPA_FINA,
	},
	{
		slug: "ropa-oscura",
		nombre: "Detergente Ropa Oscura",
		subtitulo: "Protector de color",
		categoria: "ropa",
		pagina: 5,
		resumen: "Protege el color y cuida las fibras de la ropa negra y de tonos oscuros.",
		descripcion:
			"Protege el color y cuida las fibras. Limpieza profunda que mantiene tu ropa oscura como nueva por más tiempo. Ideal para lavar prendas negras o de colores oscuros, evitando el desgaste, la decoloración y la transferencia de color entre prendas.",
		vinetas: [
			"Oscuros más intensos, lavado tras lavado",
			"Tu ropa negra siempre como el primer día",
			"Limpia sin desteñir, protege sin esfuerzo",
			"Cuidado experto para cada tono profundo",
		],
		usos: ["Lavadora", "Ropa oscura"],
		aromas: [],
		presentaciones: SET_ROPA_FINA,
	},
	{
		slug: "suavizante",
		nombre: "Suavizante",
		subtitulo: "Tres aromas disponibles",
		categoria: "ropa",
		pagina: 9,
		destacado: true,
		resumen: "Suavidad y frescura duradera, reduce la estática y facilita el planchado.",
		descripcion:
			"Proporciona suavidad y frescura a la ropa, dejando un toque agradable en cada prenda. Su fórmula especializada ayuda a reducir la electricidad estática, facilita el planchado y mantiene los colores vibrantes.",
		vinetas: ["Fragancia duradera", "Más rendidor"],
		usos: ["Toallas", "Ropa de cama", "Ropa", "Tejidos delicados"],
		aromas: ["Manzana verde", "Talco bebé", "Frutos rojos"],
		presentaciones: SET_ESTANDAR,
	},
	{
		slug: "desmanchador-color",
		nombre: "Desmanchador Ropa Color",
		categoria: "ropa",
		pagina: 10,
		resumen: "Quita manchas rebeldes sin desteñir ni dañar las telas de color.",
		descripcion:
			"Revive tus prendas sin miedo: este desmanchador elimina las manchas más rebeldes mientras cuida los colores como el primer día. Su fórmula especializada actúa con precisión, sin desteñir ni dañar las telas. Úsalo antes del lavado para potenciar el efecto de tu detergente.",
		vinetas: [
			"Elimina manchas difíciles (grasa, sudor, comida, maquillaje)",
			"Protege y realza los colores",
			"Apto para uso diario",
			"Suave con la tela, implacable con las manchas",
		],
		usos: ["Ropa de color", "Pretratamiento"],
		aromas: [],
		presentaciones: SET_ESTANDAR,
	},
	{
		slug: "desmanchador-blanca",
		nombre: "Desmanchador Ropa Blanca",
		subtitulo: "Sin cloro",
		categoria: "ropa",
		pagina: 11,
		resumen: "Devuelve el blanco original y previene el amarillamiento, sin cloro.",
		descripcion:
			"Despídete del gris y de las manchas amarillentas. Este desmanchador devuelve el blanco original a tus prendas, con una fórmula potente que limpia a fondo sin dañar las fibras. Úsalo como pretratamiento antes del lavado o como potenciador en el ciclo de lavado.",
		vinetas: [
			"Elimina manchas de sudor, comida, vino, grasa y más",
			"Restaura el blanco natural sin cloro",
			"Ayuda a prevenir el amarillamiento",
			"Ideal para ropa blanca de uso diario y prendas delicadas",
		],
		usos: ["Camisetas", "Camisas", "Sábanas", "Toallas"],
		aromas: [],
		presentaciones: SET_ESTANDAR,
	},
	{
		slug: "prelavado",
		nombre: "Prelavado",
		subtitulo: "Quitamanchas en spray",
		categoria: "ropa",
		pagina: 16,
		resumen: "Poder quitamanchas que actúa antes del lavado sobre cuellos, puños y grasa.",
		descripcion:
			"Poder quitamanchas que actúa antes del lavado. Disuelve la suciedad difícil y deja tu ropa impecable desde el primer ciclo. Ideal para aplicar directamente sobre cuellos, puños, manchas de grasa, sudor, comida y suciedad incrustada antes del lavado convencional.",
		vinetas: ["Actúa antes del lavado", "Disuelve la suciedad difícil"],
		usos: ["Ropa"],
		aromas: [],
		presentaciones: [
			P("1 Litro", "0001", 7500, "hogar"),
			P("2 Litros", "0002", 13000, "hogar"),
			P("4 Litros", "0003", 23000, "hogar"),
		],
	},
	{
		slug: "ambientador-lenceria",
		nombre: "Ambientador y Desinfectante para Lencería",
		categoria: "ropa",
		pagina: 28,
		resumen: "Desinfecta y perfuma tejidos delicados entre lavados.",
		descripcion:
			"Fórmula especial para tejidos delicados como la seda, encaje y algodón. Desinfecta y elimina bacterias, hongos y malos olores, dejando una fragancia suave y fresca.",
		vinetas: [
			"Fórmula especial para seda, encaje y algodón",
			"Desinfecta y elimina bacterias, hongos y malos olores",
			"Deja una fragancia suave, ideal para prendas íntimas",
			"No deja residuos ni manchas",
			"Ideal para usar entre lavados o refrescar prendas guardadas",
		],
		usos: ["Lencería", "Prendas delicadas"],
		aromas: [],
		presentaciones: [P("250 ml", "0001", 6000, "hogar")],
	},

	/* ---------------- MULTIUSOS Y DESENGRASANTES ---------------- */
	{
		slug: "alcaline-blue",
		nombre: "Detergente Alcaline Blue",
		subtitulo: "Multisuperficies",
		categoria: "multiusos",
		pagina: 1,
		destacado: true,
		resumen: "Jabón multiusos de alta efectividad para grasa, suciedad y manchas difíciles.",
		descripcion:
			"Jabón multiusos de alta efectividad diseñado para ofrecer una limpieza profunda en una amplia variedad de superficies. Su fórmula avanzada lo convierte en una opción ideal para eliminar grasa, suciedad y manchas difíciles, sin dañar las superficies ni dejar residuos. Perfecto para hogares, oficinas, industrias y todo tipo de espacios que requieren una limpieza eficaz y segura.",
		vinetas: ["Eficacia en cualquier ambiente", "Rendimiento superior", "Fórmula avanzada para una limpieza profunda"],
		usos: ["Cocinas", "Baños", "Oficinas", "Muebles"],
		aromas: ["Cítrico"],
		presentaciones: SET_ESTANDAR,
		sellos: ["Libre de fosfato"],
	},
	{
		slug: "desengrasante-multiusos",
		nombre: "Desengrasante SBD Multiusos",
		subtitulo: "Acción antibacterial",
		categoria: "multiusos",
		pagina: 6,
		resumen: "Remueve manchas y grasa con acción antibacterial: elimina el 99,9 % de gérmenes.",
		descripcion:
			"Producto versátil especialmente diseñado para que sin esfuerzo haga remoción de manchas y grasas presentes en variedad de superficies. Gracias a su acción antibacterial elimina el 99,9 % de gérmenes y bacterias. No contiene aroma ni genera residuos.",
		vinetas: ["Combina la acción desengrasante con la limpieza profunda del jabón"],
		usos: ["Cocinas y mesones", "Baños", "Lavamanos"],
		aromas: ["Sin aroma"],
		presentaciones: SET_ESTANDAR,
	},
	{
		slug: "desengrasante-industrial",
		nombre: "Desengrasante Industrial",
		subtitulo: "Máximo poder contra la grasa",
		categoria: "multiusos",
		pagina: 7,
		destacado: true,
		resumen: "Elimina la grasa incrustada en segundos. Para entornos industriales y comerciales.",
		descripcion:
			"Producto de alto rendimiento, diseñado con una fórmula especializada para eliminar grasa difícil o incrustada. Su potente acción permite que se desprenda la grasa más resistente, haciendo que las superficies queden completamente limpias sin esfuerzo adicional. Ideal para entornos industriales y comerciales donde se requiere una limpieza profunda.",
		vinetas: ["El poder de eliminar la grasa más difícil en segundos"],
		usos: ["Ollas y hornos", "Extractores", "Entornos industriales"],
		aromas: [],
		presentaciones: SET_ESTANDAR,
	},
	{
		slug: "lava-loza",
		nombre: "Lava Loza Líquido",
		subtitulo: "Espuma poderosa",
		categoria: "multiusos",
		pagina: 19,
		destacado: true,
		resumen: "Corta la grasa más rebelde sin maltratar tus manos. Rinde más y huele delicioso.",
		descripcion:
			"Diseñado para cortar la grasa más rebelde sin maltratar tus manos. Su fórmula concentrada rinde más, huele delicioso y deja tus utensilios relucientes, sin residuos ni olores.",
		vinetas: [
			"Elimina grasa y restos de comida al instante",
			"Espuma duradera y de fácil enjuague",
			"Suave con la piel, fuerte con la suciedad",
			"Aromas frescos y agradables",
		],
		usos: ["Utensilios de cocina", "Cocinas", "Restaurantes", "Cafeterías"],
		aromas: ["Cítrico", "Naranja", "Neutro"],
		presentaciones: SET_ESTANDAR,
	},
	{
		slug: "limpiavidrios",
		nombre: "Limpiavidrios",
		subtitulo: "Antiempañante",
		categoria: "multiusos",
		pagina: 26,
		resumen: "Vidrios limpios, claros y sin empañarse. Repele el vapor.",
		descripcion:
			"Vidrios limpios, claros y sin empañarse. Fórmula especializada que repele el vapor y mantiene la visibilidad perfecta.",
		vinetas: [
			"Claridad que no se empaña",
			"Limpieza brillante y visión sin interrupciones",
			"El aliado invisible contra el vapor",
			"Refleja limpieza, no humedad",
		],
		usos: ["Vidrios", "Espejos", "Ventanales"],
		aromas: [],
		presentaciones: [
			P("1 Litro", "0001", 6500, "hogar"),
			P("2 Litros", "0002", 10000, "hogar"),
			P("4 Litros", "0003", 19000, "hogar"),
			P("10 Litros", "0004", 32000, "industrial"),
			P("20 Litros", "0005", 52000, "industrial"),
		],
	},
	{
		slug: "limpia-juntas",
		nombre: "Limpia Juntas",
		subtitulo: "Cerámica y porcelanato",
		categoria: "multiusos",
		pagina: 26,
		resumen: "Elimina el sucio difícil entre las juntas de cerámica y porcelanato.",
		descripcion:
			"Devuélveles la vida a tus pisos. Elimina el sucio difícil entre las juntas dejando un acabado limpio y renovado. Especialmente formulado para limpiar juntas de cerámica, porcelanato, baños, cocinas y zonas donde se acumula mugre y moho.",
		vinetas: ["Limpieza que llega donde otros no pueden", "Elimina el sucio incrustado sin esfuerzo"],
		usos: ["Juntas de cerámica", "Porcelanato", "Baños", "Cocinas"],
		aromas: [],
		presentaciones: [
			P("500 ml", "0001", 4500, "hogar"),
			P("1 Litro", "0002", 7500, "hogar"),
			P("2 Litros", "0003", 13000, "hogar"),
			P("4 Litros", "0004", 23000, "hogar"),
			P("20 Litros", "0005", 73000, "industrial"),
		],
	},
	{
		slug: "shampoo-muebles",
		nombre: "Shampoo de Muebles",
		subtitulo: "Delicado",
		categoria: "multiusos",
		pagina: 16,
		resumen: "Renueva y desodoriza muebles tapizados, sofás, sillas y alfombras.",
		descripcion:
			"Líquido limpiador que renueva y desodoriza. Cuida tus muebles mientras elimina la suciedad y deja un acabado fresco. Ideal para limpiar muebles tapizados, sofás, sillas, interiores de autos, alfombras y superficies textiles sin dañarlas.",
		vinetas: ["Renueva tejidos, elimina manchas, realza frescura", "Deja tus muebles como nuevos con una sola aplicación"],
		usos: ["Muebles", "Carros"],
		aromas: [],
		presentaciones: SET_SIN_PRECIO_5,
	},
	{
		slug: "varsol",
		nombre: "Varsol",
		subtitulo: "Multiusos 100 %",
		categoria: "multiusos",
		pagina: 24,
		resumen: "Solvente potente para eliminar grasa, pinturas y manchas difíciles.",
		descripcion:
			"Solvente potente y versátil para limpieza y dilución, ideal para eliminar grasa, pinturas y manchas difíciles.",
		vinetas: [
			"El poder de remover sin esfuerzo",
			"Limpieza profunda para los trabajos más exigentes",
			"Versatilidad y fuerza en un solo producto",
		],
		usos: ["Dilución", "Remoción de pintura", "Grasa"],
		aromas: [],
		presentaciones: [P("4 Litros", "0001", 41000, "hogar"), P("20 Litros", "0002", 150000, "industrial")],
	},
	{
		slug: "biovarsol",
		nombre: "Biovarsol",
		subtitulo: "Multiusos biodegradable",
		categoria: "multiusos",
		pagina: 24,
		resumen: "Limpiador multiusos biodegradable para limpiar, desinfectar y aromatizar.",
		descripcion:
			"Limpiador multiusos biodegradable que se utiliza para limpiar, desinfectar y aromatizar diversas superficies en el hogar, en la oficina y en áreas industriales.",
		vinetas: ["Biovarsol Multiusos, tu aliado para todo", "Limpieza impecable que cuida el planeta"],
		usos: ["Ropa", "Pisos", "Baños"],
		aromas: [],
		presentaciones: [
			P("1 Litro", "0001", 15000, "hogar"),
			P("4 Litros", "0002", 41000, "hogar"),
			P("20 Litros", "0003", 160000, "industrial"),
		],
	},

	/* ---------------- DESINFECCIÓN ---------------- */
	{
		slug: "desinfectante-aroma",
		nombre: "Desinfectante con Aroma",
		subtitulo: "Limpiabrillo · Más olor",
		categoria: "desinfeccion",
		pagina: 8,
		destacado: true,
		resumen: "Desinfecta y perfuma en un solo paso, con fragancia de larga duración.",
		descripcion:
			"Limpieza profunda con un toque fresco y perfumado. El desinfectante que elimina gérmenes y deja tu espacio oliendo increíble.",
		vinetas: [
			"Desinfecta y perfuma en un solo paso",
			"Tu limpieza diaria con un aroma que conquista",
			"El poder del desinfectante, con el placer de un buen aroma",
			"Ambientes limpios y fragantes, todos los días",
		],
		usos: ["Cocinas", "Baños", "Oficinas"],
		aromas: ["Lavanda", "Frutos rojos", "Manzana", "Cítrico"],
		aromasPorConfirmar: true,
		presentaciones: SET_ESTANDAR,
	},
	{
		slug: "blanqueador",
		nombre: "Blanqueador",
		subtitulo: "Brillomax",
		categoria: "desinfeccion",
		pagina: 12,
		resumen: "Poder desinfectante de alto nivel para espacios que exigen máxima higiene.",
		descripcion:
			"Poder desinfectante de alto nivel para una limpieza profunda y segura. El aliado ideal para espacios que exigen máxima higiene.",
		vinetas: ["El desinfectante que no deja rastro de gérmenes", "Máxima desinfección con la potencia que necesitas"],
		usos: ["Pisos, baños, cocinas", "Hospitales", "Restaurantes", "Fábricas"],
		aromas: [],
		advertencia: "No apto para ropa.",
		presentaciones: [
			P("1 Litro", "0001", 4000, "hogar"),
			P("2 Litros", "0002", 6000, "hogar"),
			P("4 Litros", "0003", 10000, "hogar"),
			P("10 Litros", "0004", 15000, "industrial"),
			P("20 Litros", "0005", 27000, "industrial"),
		],
	},
	{
		slug: "hipoclorito-15",
		nombre: "Hipoclorito de Sodio al 15 %",
		subtitulo: "Fuerza industrial",
		categoria: "desinfeccion",
		pagina: 14,
		resumen: "Desinfectante industrial de acción rápida contra bacterias, virus y hongos.",
		descripcion:
			"Una solución poderosa para limpieza y desinfección en entornos exigentes. El hipoclorito al 15 % actúa de forma rápida contra bacterias, virus, hongos y materia orgánica, dejando superficies impecables y libres de microorganismos.",
		vinetas: [
			"Potente desinfectante de uso industrial",
			"Elimina gérmenes, hongos y virus",
			"Controla malos olores",
			"Ideal para hospitales, industrias, plantas de alimentos y saneamiento",
		],
		usos: ["Baños", "Cocinas industriales", "Desinfección de pisos", "Limpieza de tanques", "Ambientes hospitalarios"],
		aromas: [],
		advertencia: "Debe diluirse antes de usarse. No apto para ropa.",
		presentaciones: SET_ESTANDAR,
	},
	{
		slug: "alcohol-70",
		nombre: "Alcohol 70 %",
		subtitulo: "Antiséptico de uso externo",
		categoria: "desinfeccion",
		pagina: 23,
		resumen: "Desinfección efectiva para manos y superficies con la concentración ideal.",
		descripcion:
			"Desinfección efectiva para manos y superficies, con la concentración ideal para eliminar bacterias y virus rápidamente. Perfecto para limpieza y desinfección de manos, equipos médicos, superficies domésticas, oficinas y espacios públicos.",
		vinetas: [
			"Protección efectiva en cada gota",
			"El aliado ideal para tu higiene diaria",
			"Desinfección rápida y confiable",
			"Cuida tu salud con la concentración perfecta",
		],
		usos: ["Manos", "Superficies", "Equipos médicos"],
		aromas: [],
		presentaciones: [
			P("1 Litro", "0001", 10000, "hogar"),
			P("2 Litros", "0002", 19000, "hogar"),
			P("4 Litros", "0003", 38000, "hogar"),
			P("10 Litros", "0004", 72000, "industrial"),
			P("20 Litros", "0005", 132000, "industrial"),
		],
	},
	{
		slug: "alcohol-industrial-96",
		nombre: "Alcohol Industrial 96 %",
		categoria: "desinfeccion",
		pagina: 23,
		resumen: "Poder concentrado para desinfección intensa y rápida evaporación.",
		descripcion:
			"Poder concentrado para desinfección intensa y rápida evaporación. Ideal para usos profesionales y específicos, limpieza profunda de equipos electrónicos, laboratorios, clínicas y aplicaciones donde se requiere alcohol puro.",
		vinetas: [
			"Máxima pureza para máxima eficacia",
			"Desinfección profesional al instante",
			"El alcohol que va directo al punto",
			"Poder concentrado para resultados visibles",
		],
		usos: ["Equipos electrónicos", "Laboratorios", "Clínicas"],
		aromas: [],
		presentaciones: [
			P("1 Litro", "0001", 18000, "hogar"),
			P("2 Litros", "0002", 30000, "hogar"),
			P("4 Litros", "0003", 53000, "hogar"),
			P("10 Litros", "0004", 90000, "industrial"),
			P("20 Litros", "0005", 170000, "industrial"),
		],
	},
	{
		slug: "creolina",
		nombre: "Creolina",
		subtitulo: "Fuerza desinfectante con acción antiséptica",
		categoria: "desinfeccion",
		pagina: 22,
		resumen: "Desinfección profunda para áreas exigentes, patios y zonas de mascotas.",
		descripcion:
			"Con la creolina obtienes una solución efectiva para la desinfección profunda. Su potente fórmula elimina bacterias, hongos y virus, ideal para mantener higiénicas las áreas más exigentes de tu hogar o negocio.",
		vinetas: [
			"Eficaz contra bacterias, hongos, virus y malos olores",
			"Puede usarse en áreas industriales, hospitales y lugares con alta circulación",
			"Ideal para ambientes exteriores, patios y zonas de mascotas",
		],
		usos: ["Exteriores", "Patios", "Zonas de mascotas"],
		aromas: [],
		presentaciones: [
			P("120 cc", "0004", 2500, "hogar"),
			P("250 cc", "0005", 3800, "hogar"),
			P("500 cc", "0006", 5500, "hogar"),
		],
	},
	{
		slug: "jabon-manos",
		nombre: "Jabón de Manos",
		subtitulo: "Delicado",
		categoria: "desinfeccion",
		pagina: 18,
		resumen: "Limpieza suave y efectiva que elimina impurezas sin resecar la piel.",
		descripcion:
			"Limpieza suave y efectiva para tus manos, con una fórmula que elimina impurezas sin resecar la piel. Ideal para el lavado frecuente de manos en el hogar, oficinas, baños públicos, comercios y espacios de atención al público.",
		vinetas: [
			"Manos limpias, piel cuidada",
			"Frescura y limpieza en cada lavado",
			"El jabón que protege sin maltratar",
			"Cuidado diario que se siente",
		],
		usos: ["Hogar", "Oficinas", "Baños públicos", "Comercios"],
		aromas: ["Delicado"],
		presentaciones: SET_ESTANDAR,
	},
	{
		slug: "desinfectante-inodoros",
		nombre: "Desinfectante de Inodoros",
		subtitulo: "En spray",
		categoria: "desinfeccion",
		pagina: 17,
		resumen: "Desinfección práctica y potente en spray para inodoros y urinarios.",
		descripcion:
			"Desinfección práctica y potente. Su presentación en spray permite una aplicación fácil, rápida y precisa en cada rincón del inodoro. Ideal para limpiar y desinfectar inodoros, urinarios y superficies sanitarias, eliminando gérmenes, sarro y malos olores con facilidad.",
		vinetas: ["Aplicación fácil, limpieza profunda", "Frescura y desinfección en cada rocío"],
		usos: ["Baños"],
		aromas: [],
		presentaciones: SET_SIN_PRECIO_5,
	},
	{
		slug: "desinfectante-superficies",
		nombre: "Desinfectante de Superficies",
		subtitulo: "En spray",
		categoria: "desinfeccion",
		pagina: 17,
		resumen: "Limpieza y desinfección eficaz para todo tipo de superficies.",
		descripcion:
			"Limpieza y desinfección eficaz para todo tipo de superficies, con fórmula rápida y segura que elimina gérmenes al instante. Perfecto para escritorios, mesas, cocinas, baños, pisos, vidrios y cualquier área que necesite higiene total sin esfuerzo.",
		vinetas: ["Rápido, seguro y sin complicaciones", "Tu aliado para un ambiente más limpio"],
		usos: ["Cocinas", "Baños", "Escritorios"],
		aromas: [],
		presentaciones: SET_SIN_PRECIO_5,
	},
	{
		slug: "pastilla-super-pato",
		nombre: "Pastilla Super Pato",
		subtitulo: "Para tanque de inodoro",
		categoria: "desinfeccion",
		pagina: 20,
		resumen: "Limpieza que se activa con cada descarga, sin esfuerzo.",
		descripcion:
			"Mantén tu baño siempre fresco, limpio y desinfectado con cada uso. Estas pastillas liberan agentes limpiadores y desodorantes directamente en el agua del tanque, dejando tu inodoro reluciente sin esfuerzo. Para inodoros en hogares, oficinas, baños públicos, restaurantes, colegios y más.",
		vinetas: ["Limpieza que se activa con cada descarga", "Higiene diaria sin limpieza constante"],
		usos: ["Inodoros"],
		aromas: [],
		presentaciones: [P("Unidad", "0001", null, "hogar")],
	},
	{
		slug: "pastillas-hipoclorito",
		nombre: "Pastillas de Hipoclorito",
		categoria: "desinfeccion",
		pagina: 20,
		resumen: "Desinfección potente para baños, cocinas, piscinas y tanques de agua.",
		descripcion:
			"Perfectas para sanitizar superficies de baños, cocinas, áreas comunes y más. También ideales para piscinas, tanques de agua y limpieza industrial.",
		vinetas: ["Desinfección potente y sin esfuerzo"],
		usos: ["Baños", "Cocinas", "Piscinas", "Tanques de agua"],
		aromas: [],
		presentaciones: [P("Unidad", "0001", null, "industrial")],
	},

	/* ---------------- PISOS Y SUPERFICIES ---------------- */
	{
		slug: "removedor-ceras",
		nombre: "Removedor de Ceras y Sellantes",
		categoria: "pisos",
		pagina: 13,
		resumen: "Disuelve ceras acrílicas y selladores viejos, dejando la superficie lista.",
		descripcion:
			"Cuando el brillo ya no brilla, es hora de empezar de nuevo. Este removedor elimina a fondo capas viejas de ceras, selladores y residuos, dejando la superficie lista para un acabado impecable. Úsalo antes de aplicar una nueva capa de cera o sellador.",
		vinetas: [
			"Disuelve ceras acrílicas y selladores sin esfuerzo",
			"Ideal para mantenimiento profundo",
			"Prepara la superficie para nuevas aplicaciones",
			"Rápida acción y fácil enjuague",
		],
		usos: ["Pisos vinílicos", "Pisos cerámicos", "Linóleo", "Superficies tratadas"],
		aromas: [],
		presentaciones: SET_ESTANDAR,
	},
	{
		slug: "silicona",
		nombre: "Silicona",
		subtitulo: "Brillo y protección",
		categoria: "pisos",
		pagina: 15,
		resumen: "Restaura el brillo de llantas, tableros, muebles y superficies plásticas.",
		descripcion:
			"Brillo y protección en cada aplicación. La silicona que realza, cuida y renueva las superficies. Perfecta para restaurar el brillo de llantas, tableros, muebles, superficies plásticas y metálicas. Ideal para autos, oficinas y espacios que buscan un acabado impecable.",
		vinetas: ["Devuélvele el brillo a lo que más te importa", "Protección y estilo en una sola pasada"],
		usos: ["Oficinas", "Carros"],
		aromas: [],
		presentaciones: [
			P("1 Litro", "0001", 15000, "hogar"),
			P("2 Litros", "0002", 30000, "hogar"),
			P("4 Litros", "0003", 59000, "hogar"),
			P("10 Litros", "0004", 102000, "industrial"),
			P("20 Litros", "0005", 188000, "industrial"),
		],
	},
	{
		slug: "sellante-protector",
		nombre: "Sellante Protector",
		subtitulo: "Para pisos porosos",
		categoria: "pisos",
		pagina: 15,
		resumen: "Crea una capa selladora que realza el acabado y alarga la vida del piso.",
		descripcion:
			"Protección brillante y duradera para tus pisos. Crea una capa selladora que realza el acabado y extiende la vida útil de cada superficie. Ideal para pisos de cemento, concreto, baldosa, terrazo y otras superficies porosas. Perfecto para hogares, oficinas, centros comerciales, almacenes y más.",
		vinetas: [
			"Tus pisos como nuevos, por mucho más tiempo",
			"Sella, protege y embellece en un solo paso",
			"El escudo invisible que tus pisos necesitan",
			"Más brillo, menos desgaste",
		],
		usos: ["Cemento", "Concreto", "Baldosa", "Terrazo"],
		aromas: [],
		presentaciones: [
			P("1 Litro", "0001", 21000, "hogar"),
			P("2 Litros", "0002", 40000, "hogar"),
			P("4 Litros", "0003", 83000, "hogar"),
			P("10 Litros", "0004", 170000, "industrial"),
			P("20 Litros", "0005", 313000, "industrial"),
		],
	},
	{
		slug: "sellante-rojo",
		nombre: "Sellante Rojo",
		subtitulo: "Color y protección",
		categoria: "pisos",
		pagina: 25,
		resumen: "Realza, protege y da color a pisos de cemento y superficies porosas.",
		descripcion:
			"Color y protección en un solo paso. Este sellante rojo realza, protege y da vida a tus pisos con un acabado vibrante y duradero. Ideal para pisos de cemento, concreto y superficies porosas en patios, entradas, andenes, parqueaderos y zonas de alto tránsito.",
		vinetas: [
			"Protección que resalta, color que impacta",
			"Dales color y resistencia a tus pisos",
			"Rojo vibrante, acabado impecable",
		],
		usos: ["Patios", "Entradas", "Andenes", "Parqueaderos"],
		aromas: [],
		presentaciones: SET_SIN_PRECIO_5,
	},

	/* ---------------- QUÍMICOS INDUSTRIALES ---------------- */
	{
		slug: "bicarbonato-sodio",
		nombre: "Bicarbonato de Sodio Industrial",
		categoria: "industriales",
		pagina: 21,
		resumen: "Limpiador, desodorante y abrasivo suave para superficies difíciles.",
		descripcion:
			"Un aliado esencial en cualquier entorno de trabajo. El bicarbonato de sodio es un limpiador, desodorante y abrasivo suave, ideal para eliminar manchas, neutralizar olores y tratar superficies difíciles de limpiar.",
		vinetas: ["Limpieza profunda y multifuncional"],
		usos: ["Superficies difíciles", "Neutralizar olores"],
		aromas: [],
		presentaciones: [P("1 kg", "0001", 11000, "industrial")],
	},
	{
		slug: "acido-borico",
		nombre: "Ácido Bórico en Polvo",
		categoria: "industriales",
		pagina: 21,
		resumen: "Acción antiséptica, fungicida e insecticida para hogar e industria.",
		descripcion:
			"Un multiusos confiable para el hogar y la industria. Su acción antiséptica, fungicida e insecticida lo convierte en un aliado eficaz para eliminar plagas, tratar hongos y controlar bacterias en múltiples superficies.",
		vinetas: [
			"Eficaz contra cucarachas, hormigas y otros insectos",
			"Acción antifúngica y bactericida",
			"Uso en limpieza, control de plagas y formulaciones químicas",
			"Presentación práctica en polvo",
		],
		usos: ["Control de plagas", "Tratamiento de hongos"],
		aromas: [],
		presentaciones: [P("1 kg", "0004", 20000, "industrial")],
	},
	{
		slug: "oxigeno-activo",
		nombre: "Oxígeno Activo en Polvo",
		categoria: "industriales",
		pagina: 22,
		resumen: "Blanquea, desinfecta y elimina manchas difíciles sin dañar superficies.",
		descripcion:
			"Este potente oxígeno activo en polvo es tu aliado en la limpieza profunda. Ideal para blanquear, desinfectar y eliminar manchas difíciles, proporciona una acción eficiente sin dañar las superficies, dejando todo impecable y sin residuos.",
		vinetas: ["Blanquea y desinfecta con la potencia del oxígeno"],
		usos: ["Blanqueo", "Desinfección"],
		aromas: [],
		presentaciones: [P("1 kg", "0001", 11000, "hogar"), P("Bulto", "0002", 256000, "industrial")],
	},
	{
		slug: "soda-caustica",
		nombre: "Soda Cáustica en Escamas",
		categoria: "industriales",
		pagina: 25,
		resumen: "Poder corrosivo para desincrustación extrema y desobstrucción de tuberías.",
		descripcion:
			"Poder corrosivo para limpieza y desincrustación extrema. Ideal para tareas difíciles y desobstrucción profunda. Recomendada para destapar tuberías, eliminar residuos orgánicos y limpiar superficies industriales con grasa o incrustaciones.",
		vinetas: [
			"La fuerza que disuelve lo imposible",
			"Soda cáustica: limpieza sin concesiones",
			"Desbloquea, desincrusta y destruye la suciedad",
			"Resultados extremos para trabajos exigentes",
		],
		usos: ["Tuberías", "Superficies industriales"],
		aromas: [],
		advertencia: "Producto corrosivo. Usar con protección adecuada.",
		presentaciones: [P("10 Litros", "0004", null, "industrial"), P("20 Litros", "0005", null, "industrial")],
	},

	/* ---------------- AMBIENTADORES ---------------- */
	{
		slug: "eliminador-olores",
		nombre: "Eliminador de Olores en Spray",
		categoria: "ambientadores",
		pagina: 28,
		destacado: true,
		resumen: "Neutraliza los malos olores en segundos, no los enmascara.",
		descripcion:
			"Deshazte de los malos olores con solo un spray. Este eliminador de olores no solo enmascara, sino que neutraliza eficazmente los malos olores, dejando un ambiente fresco y agradable de inmediato.",
		vinetas: [
			"Fórmula avanzada que neutraliza olores en lugar de ocultarlos",
			"Eficaz en olores de cocina, mascotas, tabaco, humedad y más",
			"Acción rápida, eliminando olores en segundos",
			"Fragancia fresca y duradera",
			"Apto para todo tipo de ambientes (hogar, oficina, autos)",
		],
		usos: ["Hogar", "Oficina", "Autos"],
		aromas: [],
		presentaciones: [P("250 ml", "0001", 6000, "hogar")],
	},
	{
		slug: "ambientador-spray",
		nombre: "Ambientador en Spray",
		categoria: "ambientadores",
		pagina: 29,
		resumen: "Elimina olores al instante y deja un aroma fresco que perdura horas.",
		descripcion:
			"Transforma cualquier espacio con un simple toque. Este ambientador en spray elimina olores desagradables al instante, dejando un aroma fresco y agradable que perdura en el aire durante horas.",
		vinetas: [
			"Neutraliza olores de cocina, mascotas, tabaco y humedad",
			"Fragancia duradera y refrescante",
			"Fácil de usar, con rociado uniforme",
			"Ideal para oficinas, hogares, autos y ambientes cerrados",
			"Disponible en varias fragancias (cítricos, florales, frescas)",
		],
		usos: ["Oficinas", "Hogares", "Autos"],
		aromas: ["Cítrico", "Floral", "Fresco"],
		presentaciones: [P("250 ml", "0001", 9000, "hogar")],
	},

	/* ---------------- IMPLEMENTOS DE ASEO ---------------- */
	{
		slug: "escoba",
		nombre: "Escoba",
		subtitulo: "Limpieza eficaz, sin complicaciones",
		categoria: "implementos",
		pagina: 29,
		resumen: "Cerdas duraderas y mango ergonómico antideslizante.",
		descripcion: "Limpieza eficaz, sin complicaciones. Apta para uso doméstico y comercial.",
		vinetas: [
			"Cerdas duraderas y resistentes, ideales para pisos de todo tipo",
			"Mango ergonómico y antideslizante",
			"Ligera y fácil de maniobrar",
			"Cabezal amplio para mayor cobertura",
			"Fácil de almacenar",
		],
		usos: ["Pisos"],
		aromas: [],
		presentaciones: [P("Unidad", "0001", null, "hogar")],
	},
	{
		slug: "trapero",
		nombre: "Trapero",
		subtitulo: "Limpieza profunda con cada paso",
		categoria: "implementos",
		pagina: 30,
		resumen: "Fibras absorbentes que capturan polvo, suciedad y líquidos.",
		descripcion: "El poder de la limpieza, al alcance de tu mano. Apto para uso doméstico y comercial.",
		vinetas: [
			"Fibras absorbentes que capturan polvo, suciedad y líquidos",
			"Mango ergonómico y ajustable",
			"Cabezal desmontable y fácil de lavar",
			"Ideal para pisos de cerámica, madera, vinil y más",
			"Compatible con cualquier balde y sistema de escurrido",
		],
		usos: ["Cerámica", "Madera", "Vinil"],
		aromas: [],
		presentaciones: [P("Unidad", "0001", null, "hogar")],
	},
	{
		slug: "recogedor",
		nombre: "Recogedor",
		categoria: "implementos",
		pagina: 27,
		resumen: "Base ancha, mango ergonómico y cabezal flexible.",
		descripcion: "Material resistente y duradero, compatible con la mayoría de escobillones y escobas.",
		vinetas: [
			"Material resistente y duradero",
			"Base ancha para mayor capacidad de recolección",
			"Mango ergonómico y cómodo para un uso prolongado",
			"Cabezal flexible que se ajusta a diversas superficies",
			"Ligero y fácil de almacenar",
		],
		usos: ["Pisos"],
		aromas: [],
		presentaciones: [P("Unidad", "0001", null, "hogar")],
	},
	{
		slug: "esponja-alambre",
		nombre: "Esponja de Alambre",
		categoria: "implementos",
		pagina: 27,
		resumen: "Alambre de acero de alta resistencia para ollas, parrillas y sartenes.",
		descripcion: "Hecha de alambre de acero de alta resistencia. Ideal para utensilios de cocina, parrillas, ollas y sartenes.",
		vinetas: [
			"Alambre de acero de alta resistencia",
			"No daña superficies metálicas ni utensilios antiadherentes",
			"Resistente a altas temperaturas",
			"Larga durabilidad para un uso continuo",
		],
		usos: ["Ollas", "Parrillas", "Sartenes"],
		aromas: [],
		presentaciones: [P("Unidad", "0001", null, "hogar")],
	},
	{
		slug: "esponja-verde-sabra",
		nombre: "Esponja Verde Sabra",
		categoria: "implementos",
		pagina: 27,
		resumen: "Doble cara: abrasiva para grasa y suave para superficies sensibles.",
		descripcion: "Una cara abrasiva (verde) para suciedad pegada y grasa, y una cara suave para limpieza delicada.",
		vinetas: [
			"Cara abrasiva para suciedad pegada y grasa",
			"Cara suave para superficies sensibles",
			"Resistente y de larga duración",
			"Apta para cocina, baños y superficies generales",
			"Hipoalergénica y amigable con el medio ambiente",
		],
		usos: ["Cocina", "Baños"],
		aromas: [],
		presentaciones: [P("Unidad", "0001", null, "hogar")],
	},
	{
		slug: "esponja-matrix",
		nombre: "Esponja Matrix",
		categoria: "implementos",
		pagina: 27,
		resumen: "Tecnología de celdas que atrapan más suciedad, para uso intensivo.",
		descripcion: "Ideal para uso intensivo en cocinas industriales, hogares y superficies de baño.",
		vinetas: [
			"Tecnología de celdas que atrapan más suciedad",
			"Forma y tamaño ergonómico",
			"Alta resistencia a productos químicos y detergentes",
			"No deja residuos ni pelusa",
			"Ideal para uso intensivo",
		],
		usos: ["Cocinas industriales", "Baños"],
		aromas: [],
		presentaciones: [P("Unidad", "0001", null, "industrial")],
	},
	{
		slug: "toallas-z",
		nombre: "Toallas para Mano Tipo Z",
		subtitulo: "Paquete de 150 toallas",
		categoria: "implementos",
		pagina: 30,
		resumen: "Papel absorbente de alta calidad, apto para dispensadores tipo Z.",
		descripcion:
			"Higiene sin esfuerzo, calidad en cada uso. Ideal para baños de oficinas, restaurantes, centros comerciales y más.",
		vinetas: [
			"Paquete con 150 toallas, ideal para uso comercial y doméstico",
			"Diseño tipo Z para fácil dispensado sin contacto directo",
			"Papel absorbente de alta calidad",
			"Compactas y fáciles de almacenar",
			"Apto para dispensadores tipo Z",
		],
		usos: ["Oficinas", "Restaurantes", "Centros comerciales"],
		aromas: [],
		presentaciones: [P("Paquete x 150", "0001", 5500, "industrial")],
	},
]

/* ---------------- Consejos de limpieza (blog) ---------------- */
const CONSEJOS = [
	{
		slug: "diluir-hipoclorito",
		titulo: "Cómo diluir el hipoclorito al 15 % sin arruinar tus superficies",
		categoria: "Desinfección",
		minutos: 4,
		extracto:
			"El hipoclorito concentrado rinde muchísimo, pero mal dosificado decolora pisos y daña metales. Estas son las proporciones que usamos con nuestros clientes institucionales.",
		producto: "hipoclorito-15",
		cuerpo: [
			"El error más frecuente es tratar el hipoclorito al 15 % como si fuera el blanqueador de supermercado. No lo es: está entre tres y cuatro veces más concentrado, y aplicarlo puro es lo que causa las manchas blancas en el granito y la corrosión en las patas de acero de las mesas.",
			"Para desinfección de pisos y superficies duras, la proporción que recomendamos es de 20 ml de producto por litro de agua, más o menos media tapa por balde de 10 litros. Para baños y áreas de alto tránsito puedes subir a 40 ml por litro. Solo en desinfección de tanques o después de una inundación se justifica llegar a 100 ml por litro.",
			"Prepara la dilución justo antes de usarla. El hipoclorito pierde efectividad con la luz y el calor, así que un balde preparado en la mañana ya no sirve en la tarde. Y nunca lo mezcles con desengrasante, amoníaco ni productos ácidos: la reacción libera gas cloro.",
			"Deja actuar entre 5 y 10 minutos antes de enjuagar. Ese tiempo de contacto es el que realmente elimina los microorganismos; si pasas el trapero de inmediato, solo estás repartiendo el agua.",
		],
	},
	{
		slug: "grasa-cocina-industrial",
		titulo: "Grasa incrustada en cocina industrial: el orden correcto de los productos",
		categoria: "Desengrasantes",
		minutos: 5,
		extracto:
			"Aplicar desengrasante sobre una superficie mojada es el error más común. Te explicamos la secuencia que sí desprende la grasa quemada de campanas y parrillas.",
		producto: "desengrasante-industrial",
		cuerpo: [
			"La grasa quemada de una campana extractora no se quita con más producto, se quita con el orden correcto. Y el orden empieza por algo que casi nadie hace: aplicar sobre superficie seca.",
			"Si la campana está mojada, el desengrasante se diluye antes de tocar la grasa y pierde la mitad de su fuerza. Retira el exceso con papel o espátula plástica, deja la superficie seca y solo entonces aplica el producto sin diluir.",
			"El segundo factor es la temperatura. Una superficie tibia, alrededor de 40 grados, ayuda a que la grasa se ablande. Si la parrilla acaba de apagarse, ese es el momento; si está al rojo vivo, el producto se evapora sin actuar.",
			"Deja actuar entre 10 y 15 minutos sin dejar que se seque. Si ves que la superficie empieza a secarse, vuelve a rociar. Después frota con esponja verde o de alambre según el material y enjuaga con abundante agua.",
			"Para mantenimiento diario basta el desengrasante multiusos diluido uno a diez. El industrial reservalo para la limpieza profunda semanal: usarlo a diario en acero inoxidable termina opacando el brillo.",
		],
	},
	{
		slug: "ropa-blanca-sin-cloro",
		titulo: "Devolverle el blanco a la ropa sin usar cloro",
		categoria: "Lavandería",
		minutos: 3,
		extracto:
			"El cloro blanquea rápido pero desgasta la fibra y amarillea a mediano plazo. Aquí va la rutina con desmanchador y oxígeno activo que sí conserva la prenda.",
		producto: "desmanchador-blanca",
		cuerpo: [
			"El cloro da un resultado inmediato y por eso engancha. El problema aparece al tercer o cuarto mes: la fibra de algodón se debilita, los cuellos se deshilachan y la prenda toma ese tono amarillo grisáceo que ya no sale con nada.",
			"La alternativa es trabajar en dos tiempos. Primero, pretratamiento con desmanchador de ropa blanca directamente sobre cuellos, puños y axilas, dejando actuar 15 minutos. Segundo, lavado normal con detergente más una cucharada de oxígeno activo en polvo.",
			"El oxígeno activo necesita agua tibia para funcionar. Con agua fría apenas reacciona, así que si tu lavadora tiene ciclo tibio, úsalo para la ropa blanca. Con 40 grados es suficiente.",
			"Para prendas que ya están amarillas, funciona un remojo previo: cinco litros de agua tibia con dos cucharadas de oxígeno activo, y las prendas dentro entre dos y cuatro horas. No más de eso, y nunca al sol directo mientras están en remojo.",
			"Un último detalle que marca diferencia: no guardes ropa blanca en bolsas plásticas. El plástico retiene humedad y acelera el amarillamiento incluso en prendas limpias.",
		],
	},
	{
		slug: "aroma-que-dura",
		titulo: "Por qué tu desinfectante deja de oler a las dos horas",
		categoria: "Ambientación",
		minutos: 3,
		extracto:
			"No es cantidad, es dilución y superficie. Tres ajustes sencillos para que la fragancia se mantenga toda la jornada en oficinas y locales.",
		producto: "desinfectante-aroma",
		cuerpo: [
			"Cuando un cliente nos dice que el desinfectante deja de oler a las dos horas, casi siempre encontramos la misma causa: está diluyendo demasiado y compensando con más agua en el balde.",
			"La fragancia se fija en la superficie, no en el aire. Si el trapero va empapado, el producto queda en una película de agua que se evapora y se lleva el aroma con ella. Un trapero bien escurrido, apenas húmedo, deja más producto adherido al piso y el olor dura toda la jornada.",
			"El segundo ajuste es la dilución. Para pisos, 30 ml por litro de agua es suficiente; por debajo de 20 ml ya se nota la caída del aroma. Vale la pena medir con tapa una vez y marcar el balde, en vez de calcular a ojo cada día.",
			"El tercero es el enjuague. Muchos operarios pasan un segundo trapero con agua limpia después del desinfectante, y ahí se va todo. Si el piso no queda pegajoso, no necesita enjuague.",
			"En espacios con mucha ventilación o aire acondicionado la fragancia siempre durará menos. En esos casos conviene reforzar con ambientador en spray en puntos concretos, como recepción o baños, en lugar de subir la dosis del desinfectante en todo el local.",
		],
	},
	{
		slug: "sellar-piso-cemento",
		titulo: "Sellar un piso de cemento: preparación, capas y tiempos de secado",
		categoria: "Pisos",
		minutos: 6,
		extracto:
			"Un sellante bien aplicado dura años; mal aplicado se levanta en semanas. Guía paso a paso desde el removedor de ceras hasta la segunda capa.",
		producto: "sellante-protector",
		cuerpo: [
			"El 90 % de los sellantes que se levantan a las pocas semanas fallaron en la preparación, no en el producto. Si el piso tenía cera vieja, polvo de cemento o humedad, el sellante no tiene con qué agarrarse.",
			"Empieza con el removedor de ceras y sellantes diluido uno a cuatro. Aplica, deja actuar 10 minutos, frota con cepillo o máquina de baja velocidad y enjuaga. Repite en las zonas donde todavía se vea brillo antiguo: el piso debe quedar completamente mate.",
			"Después viene la parte que casi nadie respeta: el secado. Un piso de cemento necesita entre 24 y 48 horas de secado real antes de sellar, y más si llovió. Si aplicas sobre humedad residual, el sellante se vuelve blanquecino y se despega en placas.",
			"La primera capa va diluida uno a uno con agua. Esa capa no es para dar brillo, es para penetrar el poro y crear el anclaje. Extiéndela con mopa de aplicación en franjas que se solapen ligeramente, sin devolverse sobre lo ya aplicado.",
			"Espera dos horas y aplica la segunda capa, esta vez sin diluir y en sentido perpendicular a la primera. Si buscas más brillo, una tercera capa después de otras dos horas. Tránsito peatonal a las 6 horas; muebles y tránsito pesado, a las 24.",
			"Para mantenimiento, barrido diario y trapeado con detergente neutro diluido. Nada de desengrasantes ni hipoclorito directo sobre el sellante: lo opacan en pocas semanas.",
		],
	},
	{
		slug: "kit-arranque-negocio",
		titulo: "El kit mínimo de aseo para abrir un local o una oficina",
		categoria: "Negocios",
		minutos: 4,
		extracto:
			"Qué comprar el primer mes sin sobrestockearte: siete productos que cubren pisos, baños, cocina y vidrios, con las presentaciones que mejor rinden.",
		producto: "alcaline-blue",
		cuerpo: [
			"Cuando alguien abre un local nos suele pedir «de todo un poquito», y termina con doce productos de los que usa cuatro. Este es el kit que realmente cubre un local de tamaño mediano el primer mes.",
			"Para pisos y superficies generales, un garrafón de 10 litros de detergente multiusos. Es el producto que más se gasta y el que mejor rinde al comprarlo en presentación grande: el precio por litro baja casi a la mitad frente al de 1 litro.",
			"Para desinfección, hipoclorito al 15 % en 4 litros. Rinde muchísimo porque se diluye, así que no tiene sentido comprar más al principio. Súmale desinfectante con aroma en 4 litros para el trapeado diario, que es lo que percibe el cliente al entrar.",
			"En baños, limpia juntas de 500 ml y pastillas para tanque. En cocina, lava loza de 4 litros y desengrasante multiusos de 1 litro, que solo necesitarás para la limpieza profunda semanal.",
			"Cierra con limpiavidrios de 1 litro y los implementos: escoba, recogedor, trapero y un paquete de esponjas. Con eso operas el primer mes y ya sabrás cuál producto se te acaba primero, que es la mejor guía para el segundo pedido.",
			"Un consejo de bodega: no compres presentaciones de 20 litros si no tienes dónde almacenarlas ni cómo trasvasarlas. Un garrafón lleno pesa más de 20 kilos y sin bomba dosificadora se termina desperdiciando producto en cada trasvase.",
		],
	},
]

/* ---------------- Utilidades ---------------- */

/** 7500 -> "$ 7.500" */
function precioCOP(valor) {
	if (valor == null) return "Cotizar"
	return "$ " + valor.toLocaleString("es-CO")
}

/** Precio más bajo de un producto (para las tarjetas del listado) */
function precioDesde(producto) {
	const conPrecio = producto.presentaciones.filter((p) => p.precio != null)
	if (!conPrecio.length) return null
	return Math.min(...conPrecio.map((p) => p.precio))
}

function imagenDe(producto) {
	return `assets/img/${producto.slug}.jpg`
}

function productoPorSlug(slug) {
	return PRODUCTOS.find((p) => p.slug === slug)
}

function categoriaPorSlug(slug) {
	return CATEGORIAS.find((c) => c.slug === slug)
}
