// Catálogo de productos de Kuyen con variantes
export const productos = [
  {
    id: 1,
    nombre: "Toallón Premium Algodón",
    categoria: "toallones",
    precio: 2500,
    descripcion: "Toallón 100% algodón con máxima absorción y suavidad. Disponible en varios colores.",
    colores: ["Blanco", "Azul", "Gris", "Beige"],
    medidas: "70x140cm",
    destacado: true,
    variantes: [
      {
        id: "1a",
        nombre: "Clásico Liso",
        imagen: "/assets/images/productosKuyen/product41.jpg",
        descripcionVariante: "Diseño clásico liso, elegante y versátil"
      },
      {
        id: "1b", 
        nombre: "Con Bordado",
        imagen: "/assets/images/productosKuyen/product2.jpg",
        descripcionVariante: "Con elegante bordado decorativo"
      },
      {
        id: "1c",
        nombre: "Textura Waffle",
        imagen: "/assets/images/productosKuyen/product82.jpg",
        descripcionVariante: "Textura waffle para mayor absorción"
      }
    ]
  },
  {
    id: 2,
    nombre: "Sábanas Diseño Americano",
    categoria: "sabanas",
    precio: 4200,
    descripcion: "1200 hilos ultra suaves y frescas y duraderas para un descanso perfecto.",
    colores: ["Azul", "Rosa", "Gris"],
    medidas: "2 plazas",
    destacado: true,
    variantes: [
      {
        id: "2a",
        nombre: "Estampado Floral",
        imagen: "/assets/images/productosKuyen/product34.jpg",
        descripcionVariante: "Delicado estampado floral moderno"
      },
      {
        id: "2b",
        nombre: "Rayas Elegantes", 
        imagen: "/assets/images/productosKuyen/product18.jpg",
        descripcionVariante: "Diseño de rayas clásico y sofisticado"
      },
      {
        id: "2c",
        nombre: "Liso Premium",
        imagen: "/assets/images/productosKuyen/product37.jpg",
        descripcionVariante: "Diseño liso de alta calidad"
      },
      {
        id: "2d",
        nombre: "Geometrico Moderno",
        imagen: "/assets/images/productosKuyen/product51.jpg",
        descripcionVariante: "Patrones geométricos contemporáneos"
      }
    ]
  },
  {
    id: 3,
    nombre: "Acolchado Ultra Liviano",
    categoria: "acolchados",
    precio: 8500,
    descripcion: "Acolchado ultra liviano con relleno sintético hipoalergénico. Ideal para todas las estaciones.",
    colores: ["Blanco", "Crema"],
    medidas: "2 plazas",
    destacado: true,
    variantes: [
      {
        id: "3a",
        nombre: "Microfibra Básico",
        imagen: "/assets/images/productosKuyen/product82.jpg",
        descripcionVariante: "Relleno de microfibra suave y liviano"
      },
      {
        id: "3b",
        nombre: "Plumas Sintéticas",
        imagen: "/assets/images/productosKuyen/product6.jpg",
        descripcionVariante: "Relleno plumas sintéticas premium"
      }
    ]
  },
  {
    id: 4,
    nombre: "Alfombra Decorativa",
    categoria: "alfombras",
    precio: 3800,
    descripcion: "Alfombra moderna con diseños únicos. Perfecta para living o dormitorio.",
    colores: ["Gris", "Beige", "Azul", "Multicolor"],
    medidas: "120x180cm",
    destacado: true,
    variantes: [
      {
        id: "4a",
        nombre: "Diseño Abstracto",
        imagen: "/assets/images/productosKuyen/product37.jpg",
        descripcionVariante: "Patrones abstractos modernos"
      },
      {
        id: "4b",
        nombre: "Estilo Vintage",
        imagen: "/assets/images/productosKuyen/product10.jpg",
        descripcionVariante: "Diseño vintage con toques clásicos"
      }
    ]
  },
  {
    id: 5,
    nombre: "Mochila Capibara",
    categoria: "mochilas",
    precio: 1800,
    descripcion: "Mochila resistente con múltiples compartimentos. Ideal para uso diario.",
    colores: ["Negro", "Azul", "Gris"],
    medidas: "40x30x15cm",
    destacado: false,
    variantes: [
      {
        id: "5a",
        nombre: "Diseño Básico",
        imagen: "/assets/images/productosKuyen/product63.jpg",
        descripcionVariante: "Mochila básica funcional"
      },
      {
        id: "5b",
        nombre: "Con Estampado",
        imagen: "/assets/images/productosKuyen/product20.jpg",
        descripcionVariante: "Con estampados divertidos"
      }
    ]
  },
  {
    id: 6,
    nombre: "Cortina de Baño",
    categoria: "cortinas",
    precio: 1200,
    descripcion: "Cortina de baño 100% impermeable con diseños modernos y elegantes.",
    colores: ["Blanco", "Azul", "Gris", "Transparente"],
    medidas: "180x200cm",
    destacado: false,
    variantes: [
      {
        id: "6a",
        nombre: "Transparente Minimalista",
        imagen: "/assets/images/productosKuyen/product51.jpg",
        descripcionVariante: "Diseño transparente y elegante"
      },
      {
        id: "6b",
        nombre: "Estampado Marino",
        imagen: "/assets/images/productosKuyen/product54.jpg",
        descripcionVariante: "Temática marina decorativa"
      },
      {
        id: "6c",
        nombre: "Textura Ondulada",
        imagen: "/assets/images/productosKuyen/product41.jpg",
        descripcionVariante: "Textura ondulada moderna"
      },
      {
        id: "6d",
        nombre: "Diseño Geométrico",
        imagen: "/assets/images/productosKuyen/product2.jpg",
        descripcionVariante: "Patrones geométricos contemporáneos"
      },
      {
        id: "6e",
        nombre: "Efecto Mármol",
        imagen: "/assets/images/productosKuyen/product82.jpg",
        descripcionVariante: "Elegante efecto mármol"
      }
    ]
  },
  {
    id: 7,
    nombre: "Cortina de Cocina",
    categoria: "cortinas",
    precio: 900,
    descripcion: "Cortina práctica para cocina con diseños alegres y fácil mantenimiento.",
    colores: ["Amarillo", "Verde", "Rojo", "Blanco"],
    medidas: "150x100cm",
    destacado: false,
    variantes: [
      {
        id: "7a",
        nombre: "Frutas Vintage",
        imagen: "/assets/images/productosKuyen/product54.jpg",
        descripcionVariante: "Estampado de frutas estilo vintage"
      },
      {
        id: "7b",
        nombre: "Cuadros Campestres",
        imagen: "/assets/images/productosKuyen/product37.jpg",
        descripcionVariante: "Diseño a cuadros estilo campestre"
      },
      {
        id: "7c",
        nombre: "Flores Delicadas",
        imagen: "/assets/images/productosKuyen/product18.jpg",
        descripcionVariante: "Delicadas flores primaverales"
      }
    ]
  },
  {
    id: 8,
    nombre: "Toallón Microfibra Deportivo",
    categoria: "toallones",
    precio: 1800,
    descripcion: "Toallón de microfibra ultra absorbente. Ideal para deportes y viajes.",
    colores: ["Azul", "Verde", "Naranja", "Gris"],
    medidas: "60x120cm",
    destacado: false,
    variantes: [
      {
        id: "8a",
        nombre: "Deportivo Básico",
        imagen: "/assets/images/productosKuyen/product2.jpg",
        descripcionVariante: "Diseño deportivo funcional"
      },
      {
        id: "8b",
        nombre: "Con Logo Deportivo",
        imagen: "/assets/images/productosKuyen/product41.jpg",
        descripcionVariante: "Con logos deportivos estampados"
      }
    ]
  },
  {
    id: 9,
    nombre: "Sábanas Bambú Premium",
    categoria: "sabanas",
    precio: 5500,
    descripcion: "Sábanas de bambú con propiedades antibacterianas y termoreguladoras.",
    colores: ["Blanco", "Beige", "Verde"],
    medidas: "2 plazas",
    destacado: false,
    variantes: [
      {
        id: "9a",
        nombre: "Bambú Natural",
        imagen: "/assets/images/productosKuyen/product18.jpg",
        descripcionVariante: "Bambú 100% natural y orgánico"
      },
      {
        id: "9b",
        nombre: "Bambú con Aloe",
        imagen: "/assets/images/productosKuyen/product34.jpg",
        descripcionVariante: "Bambú con tratamiento de aloe vera"
      }
    ]
  },
  {
    id: 10,
    nombre: "Acolchado de Invierno",
    categoria: "acolchados",
    precio: 12000,
    descripcion: "Acolchado grueso para invierno con relleno de plumas sintéticas.",
    colores: ["Blanco", "Azul Marino"],
    medidas: "2 plazas",
    destacado: false,
    variantes: [
      {
        id: "10a",
        nombre: "Extra Calor",
        imagen: "/assets/images/productosKuyen/product6.jpg",
        descripcionVariante: "Máximo abrigo para inviernos extremos"
      },
      {
        id: "10b",
        nombre: "Termo Regulador",
        imagen: "/assets/images/productosKuyen/product82.jpg",
        descripcionVariante: "Con tecnología termorreguladora"
      }
    ]
  },
  {
    id: 11,
    nombre: "Alfombra Antideslizante",
    categoria: "alfombras",
    precio: 2200,
    descripcion: "Alfombra con base antideslizante. Perfecta para baños y cocinas.",
    colores: ["Gris", "Beige", "Blanco"],
    medidas: "60x90cm",
    destacado: false,
    variantes: [
      {
        id: "11a",
        nombre: "Textura Suave",
        imagen: "/assets/images/productosKuyen/product10.jpg",
        descripcionVariante: "Textura suave y absorbente"
      },
      {
        id: "11b",
        nombre: "Antideslizante Premium",
        imagen: "/assets/images/productosKuyen/product37.jpg",
        descripcionVariante: "Base antideslizante reforzada"
      }
    ]
  },
  {
    id: 12,
    nombre: "Peluches Escolares",
    categoria: "mochilas",
    precio: 2200,
    descripcion: "Mochila escolar ergonómica con compartimentos organizadores.",
    colores: ["Azul", "Rosa", "Verde", "Negro"],
    medidas: "35x25x12cm",
    destacado: false,
    variantes: [
      {
        id: "12a",
        nombre: "Personajes Animados",
        imagen: "/assets/images/productosKuyen/product20.jpg",
        descripcionVariante: "Con personajes animados favoritos"
      },
      {
        id: "12b",
        nombre: "Diseño Escolar",
        imagen: "/assets/images/productosKuyen/product63.jpg",
        descripcionVariante: "Diseño funcional para estudiantes"
      }
    ]
  }
];

export const categorias = [
  { id: "todas", nombre: "Todas" },
  { id: "toallones", nombre: "Toallones" },
  { id: "sabanas", nombre: "Sábanas" },
  { id: "acolchados", nombre: "Acolchados" },
  { id: "alfombras", nombre: "Alfombras" },
  { id: "mochilas", nombre: "Mochilas" },
  { id: "cortinas", nombre: "Cortinas" }
];

export const colores = [
  "Blanco", "Azul", "Gris", "Beige", "Rosa", "Verde", "Negro", "Amarillo", "Rojo", "Celeste", "Crema", "Naranja", "Multicolor", "Transparente", "Azul Marino"
];

export const rangosPrecios = [
  { id: "todos", nombre: "Todos los precios", min: 0, max: Infinity },
  { id: "hasta2000", nombre: "Hasta $2.000", min: 0, max: 2000 },
  { id: "2000a5000", nombre: "$2.000 - $5.000", min: 2000, max: 5000 },
  { id: "5000a10000", nombre: "$5.000 - $10.000", min: 5000, max: 10000 },
  { id: "mas10000", nombre: "Más de $10.000", min: 10000, max: Infinity }
];
