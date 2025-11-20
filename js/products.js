// Sample product data
const PRODUCTS = [
  {
    id: 1,
    model: "09451-ME-05",
    title: "Nivel láser rotativo PRO 360",
    category: "herramientas",
    price: 299.99,
    previousPrice: 379.99,
    desc: "Nivel láser para obras con autonivel y base magnética.",
    img: "/img/laser1.webp",
  },
  {
    id: 2,
    model: "10102-PL-01",
    title: "Pack de planos arquitectónicos (Vivienda)",
    category: "planos",
    price: 49.0,
    previousPrice: 59.0,
    desc: "Planos completos listos para adaptar a tu proyecto.",
    img: "/img/planes.avif",
  },
  {
    id: 3,
    model: "22011-LC-10",
    title: "Licencia CAD Profesional (1 año)",
    category: "software",
    price: 399.0,
    previousPrice: 499.0,
    desc: "Licencia anual para diseño CAD con herramientas avanzadas.",
    img: "/img/li.webp",
  },
  {
    id: 4,
    model: "04500-HM-01",
    title: "Juego de herramientas de mano 45 piezas",
    category: "herramientas",
    price: 89.5,
    desc: "Juego completo para obra y mantenimiento.",
    img: "/img/her.jpg",
  },
  {
    id: 5,
    model: "03025-CT-01",
    title: "Concreto premezclado 25kg (unidad)",
    category: "materiales",
    price: 12.75,
    desc: "Saco de concreto de alta resistencia.",
    img: "/img/c.png",
  },
  {
    id: 6,
    model: "14001-TB-02",
    title: "Tablet gráfica para dibujo técnico",
    category: "hardware",
    price: 219.99,
    previousPrice: 259.99,
    desc: "Ideal para modelado y edición de planos.",
    img: "/img/t.jpg",
  },

  // Muebles
  {
    id: 7,
    model: "33010-SF-03",
    title: "Sofá modular 3 plazas",
    category: "muebles",
    price: 499.0,
    desc: "Sofá modular con tapizado resistente y estructura metálica.",
    img: "/pr/sofa.jpg",
  },
  {
    id: 8,
    model: "33011-TB-04",
    title: "Mesa de trabajo industrial",
    category: "muebles",
    price: 179.99,
    desc: "Mesa de trabajo amplia con superficie reforzada para planos y herramientas.",
    img: "/img/me.png",
  },
  {
    id: 9,
    model: "33012-ES-05",
    title: "Estantería metálica 5 niveles",
    category: "muebles",
    price: 129.5,
    desc: "Estantería para almacén o taller con alta capacidad de carga.",
    img: "/pr/we.webp",
  },
  {
    id: 10,
    model: "33013-SC-06",
    title: "Silla ergonómica de oficina",
    category: "muebles",
    price: 149.0,
    desc: "Silla con soporte lumbar y ajuste de altura para largas jornadas.",
    img: "/pr/silla.jpg",
  },
  {
    id: 11,
    model: "33014-MP-07",
    title: "Mueble para planos enrollables",
    category: "muebles",
    price: 89.0,
    desc: "Mueble compacto para almacenar y organizar planos grandes.",
    img: "/pr/i.webp",
  },

  // Computación
  {
    id: 12,
    model: "56001-LP-08",
    title: 'Laptop Ultrabook 14"',
    category: "computacion",
    price: 899.99,
    previousPrice: 1099.99,
    desc: "Ultrabook ligero con procesador moderno y 8GB RAM.",
    img: "https://m.media-amazon.com/images/I/71ahPnMhKvL._AC_SL1500_.jpg",
    cpu: "Intel i5 / Ryzen 5",
    ram: "8 GB",
    storage: "256 GB SSD",
    screen: '14" FHD',
    weight: "1.3 kg",
    battery: "52.5 Wh (3 celdas)",
  },
  {
    id: 13,
    model: "56002-PC-09",
    title: "PC de escritorio (i5, 16GB)",
    category: "computacion",
    price: 699.0,
    desc: "Equipo de sobremesa para diseño y tareas intensivas.",
    img: "https://gw.alicdn.com/imgextra/i4/2757821387/O1CN014uGrZ91M7I7pxJhGO_!!2757821387.jpg_540x540.jpg",
  },
  {
    id: 14,
    model: "56003-MN-10",
    title: 'Monitor 27" 1440p',
    category: "computacion",
    price: 279.0,
    desc: "Pantalla QHD con buen color y ángulos amplios para diseño.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tsipfHujIdk7M_ARvAtOqtWeH54DQK0NCw&s",
  },
  {
    id: 15,
    model: "56004-TK-11",
    title: "Teclado mecánico retroiluminado",
    category: "computacion",
    price: 79.99,
    desc: "Teclado con switches táctiles y retroiluminación RGB.",
    img: "https://www.megatone.net/images/Articulos/zoom2x/322/MKT0016EXO_14.jpg",
  },
  {
    id: 16,
    model: "56005-MO-12",
    title: "Mouse inalámbrico ergonómico",
    category: "computacion",
    price: 39.5,
    desc: "Mouse con botones programables y gran autonomía.",
    img: "/img/mo.webp",
  },

  // Memorias
  {
    id: 17,
    model: "77001-SSD-13",
    title: "SSD SATA 1TB",
    category: "memorias",
    price: 119.0,
    desc: "Unidad de estado sólido para arranque y almacenamiento rápido.",
    img: "/img/ssd.jpeg",
  },
  {
    id: 18,
    model: "77002-NV-14",
    title: "SSD NVMe 500GB",
    category: "memorias",
    price: 79.99,
    desc: "Disco NVMe compacto con altas tasas de lectura/escritura.",
    img: "/img/pf.jpeg",
  },
  {
    id: 19,
    model: "77003-RAM-15",
    title: "RAM 16GB DDR4",
    category: "memorias",
    price: 64.99,
    desc: "Módulo de memoria para mejorar multitarea y rendimiento CAD.",
    img: "/img/mem.jpg",
  },
  {
    id: 20,
    model: "77004-RM-16",
    title: "RAM 8GB DDR4",
    category: "memorias",
    price: 34.5,
    desc: "Módulo de memoria compatible con la mayoría de laptops y PCs.",
    img: "/img/meb.jpg",
  },
  {
    id: 21,
    model: "77005-PD-17",
    title: "Pendrive 128GB USB 3.0",
    category: "memorias",
    price: 19.99,
    desc: "Memoria portátil para transporte de archivos y planos.",
    img: "/img/pen.jpg",
  },

  // UPS
  {
    id: 22,
    model: "88001-U1-18",
    title: "UPS 1000VA",
    category: "ups",
    price: 129.99,
    previousPrice: 159.99,
    desc: "Protección de energía para equipos pequeños y estaciones de trabajo.",
    img: "/img/va.webp",
  },
  {
    id: 23,
    model: "88002-U1-19",
    title: "UPS 1500VA",
    category: "ups",
    price: 199.99,
    desc: "Mayor autonomía y protección para servidores y PCs de alto consumo.",
    img: "/img/ups1.webp",
  },
  {
    id: 24,
    model: "88003-U3-20",
    title: "UPS 3000VA industrial",
    category: "ups",
    price: 499.0,
    desc: "UPS para instalaciones con demandas críticas de energía.",
    img: "/img/ups3.jpg",
  },
  {
    id: 25,
    model: "88004-BT-21",
    title: "Batería de reemplazo 12V",
    category: "ups",
    price: 49.5,
    desc: "Batería compatible con múltiples modelos de UPS.",
    img: "/img/ups4.avif",
  },
  {
    id: 26,
    model: "88005-SP-22",
    title: "Supresor de picos y protector",
    category: "ups",
    price: 24.99,
    desc: "Protector de sobrevoltajes para líneas eléctricas y equipos.",
    img: "/img/ups5.webp",
  },

  // Discos Duros
  {
    id: 27,
    model: "99001-H1-23",
    title: "HDD 1TB 7200RPM",
    category: "discos",
    price: 45.0,
    desc: "Disco duro mecánico para almacenamiento masivo.",
    img: "/img/disco1.webp",
  },
  {
    id: 28,
    model: "99002-H2-24",
    title: "HDD 2TB 7200RPM",
    category: "discos",
    price: 69.99,
    desc: "Disco de alta capacidad para backups y archivos grandes.",
    img: "/img/disco2.jpg",
  },
  {
    id: 29,
    model: "99003-NV1-25",
    title: "SSD NVMe 1TB",
    category: "discos",
    price: 129.99,
    desc: "Unidad NVMe para cargas rápidas de proyectos y software.",
    img: "/img/disco3.webp",
  },
  {
    id: 30,
    model: "99004-EX2-26",
    title: "Disco externo 2TB USB 3.0",
    category: "discos",
    price: 89.0,
    desc: "Caja externa para transportar y respaldar información.",
    img: "/img/disco4.webp",
  },
  {
    id: 31,
    model: "99005-NAS4-27",
    title: "NAS 4 bahías",
    category: "discos",
    price: 349.0,
    desc: "Servidor de archivos para oficina con RAID y acceso en red.",
    img: "/img/disco5.webp",
  },

  // Tintas
  {
    id: 32,
    model: "00101-TN-28",
    title: "Cartucho tinta negro",
    category: "tintas",
    price: 9.99,
    desc: "Cartucho de tinta negra original para impresoras de oficina.",
    img: "/img/tinta1.webp",
  },
  {
    id: 33,
    model: "00102-TC-29",
    title: "Cartucho tinta color",
    category: "tintas",
    price: 12.99,
    desc: "Cartucho color (CMY) para impresiones a todo color.",
    img: "/img/tinta2.jpg",
  },
  {
    id: 34,
    model: "00103-TL-30",
    title: "Toner negro para láser",
    category: "tintas",
    price: 39.99,
    desc: "Toner de alta capacidad para impresoras láser.",
    img: "/img/tinta3.jpg",
  },
  {
    id: 35,
    model: "00104-TK-31",
    title: "Toner color",
    category: "tintas",
    price: 69.99,
    desc: "Kit de toner color para impresoras láser a color.",
    img: "/img/tinta4.webp",
  },
  {
    id: 36,
    model: "00105-KC-32",
    title: "Kit de limpieza de cabezales",
    category: "tintas",
    price: 14.5,
    desc: "Solución y herramientas para mantener impresoras limpias.",
    img: "/img/tinta5.jpg",
  },

  // Iluminación
  {
    id: 37,
    model: "11201-PL-33",
    title: "Panel LED 60x60 40W",
    category: "iluminacion",
    price: 59.99,
    desc: "Panel empotrable para iluminación de oficinas y salas.",
    img: "/img/ilu1.webp",
  },
  {
    id: 38,
    model: "11202-LD-34",
    title: "Lámpara de escritorio LED",
    category: "iluminacion",
    price: 24.99,
    desc: "Lámpara con regulación de intensidad y brazo flexible.",
    img: "/img/ilu2.jpg",
  },
  {
    id: 39,
    model: "11203-TB-35",
    title: "Tubo LED 120cm 18W",
    category: "iluminacion",
    price: 12.5,
    desc: "Tubo LED para reemplazo de fluorescentes.",
    img: "/img/ilu3.jpg",
  },
  {
    id: 40,
    model: "11204-RF-36",
    title: "Reflector LED 50W",
    category: "iluminacion",
    price: 29.99,
    desc: "Reflector para iluminación exterior y obras.",
    img: "/img/ilu4.jpg",
  },
  {
    id: 41,
    model: "11205-LI-37",
    title: "Luminaria industrial 200W",
    category: "iluminacion",
    price: 129.0,
    desc: "Luminaria para naves industriales y grandes espacios.",
    img: "/img/ilu5.png",
  },

  // Hardware (herramientas eléctricas y elementos)
  {
    id: 42,
    model: "12101-DR-38",
    title: "Taladro percutor 650W",
    category: "hardware",
    price: 89.99,
    desc: "Taladro con modos rotación y percutor para obra y bricolaje.",
    img: "/img/hw1.png",
  },
  {
    id: 43,
    model: "12102-BR-39",
    title: "Juego de brocas 50 piezas",
    category: "hardware",
    price: 24.99,
    desc: "Set completo de brocas para metal, madera y hormigón.",
    img: "/img/hw2.webp",
  },
  {
    id: 44,
    model: "12103-SR-40",
    title: "Tornillos surtidos (500pc)",
    category: "hardware",
    price: 19.99,
    desc: "Caja con tornillos y anclajes para construcción y montaje.",
    img: "/img/hw3.jpg",
  },
  {
    id: 45,
    model: "12104-JW-41",
    title: "Juego de llaves combinadas 12pc",
    category: "hardware",
    price: 34.5,
    desc: "Llaves de mano para mantenimiento y montaje.",
    img: "/img/hw4.jpg",
  },
  {
    id: 46,
    model: "12105-SC-42",
    title: "Sierra circular manual 1200W",
    category: "hardware",
    price: 129.99,
    desc: "Sierra para cortes precisos en madera y paneles.",
    img: "/img/s.avif",
  },
];

// Añadir metadata estándar a cada producto: código, modelo, garantía y advertencia de seguridad cuando aplique.
// Usamos reglas razonables para evitar editar manualmente cada entrada.
(function augmentProducts() {
  const warrantyCategories = [
    "computacion",
    "memorias",
    "discos",
    "ups",
    "hardware",
    "muebles",
    "iluminacion",
  ];
  const safetyCategories = ["herramientas", "hardware", "ups", "iluminacion"];

  for (const p of PRODUCTS) {
    // Código único legible
    p.code = p.code || "P-" + String(p.id).padStart(4, "0");

    // Modelo: tomar una porción del título para mostrar un identificador corto
    p.model =
      p.model || p.title.split(" ").slice(0, 3).join(" ").replace(/\"/g, "");

    // Garantía: aplicar sólo a categorías plausibles, de lo contrario marcar como 'No aplica' o indicar si es digital
    if (typeof p.warranty === "undefined") {
      if (p.category === "planos")
        p.warranty = "Sin garantía (producto digital)";
      else if (warrantyCategories.includes(p.category)) p.warranty = "12 meses";
      else p.warranty = "No aplica";
    }

    // ADVERTENCIA_DE_SEGURIDAD cuando corresponda: mensajes breves por categoría
    if (typeof p.safety === "undefined") {
      if (p.category === "herramientas")
        p.safety =
          "Usar protección ocular y guantes. Riesgo de lesiones si se utiliza incorrectamente.";
      else if (p.category === "hardware")
        p.safety =
          "Apagar y desconectar antes de abrir. Manipular con cuidado componentes eléctricos.";
      else if (p.category === "ups")
        p.safety =
          "Riesgo eléctrico y de batería. Instalar en área ventilada y seguir instrucciones del fabricante.";
      else if (p.category === "iluminacion")
        p.safety =
          "Evitar contacto con agua. Manipular con guantes si está caliente.";
      else p.safety = null;
    }

    // Fabricante: si no existe, asignar uno genérico según categoría o extraer de título
    if (typeof p.manufacturer === "undefined") {
      const makersByCategory = {
        computacion: "TechCore",
        memorias: "MemoriX",
        discos: "StorPro",
        ups: "PowerSafe",
        hardware: "ToolWorks",
        herramientas: "ProTools",
        muebles: "HomeForm",
        iluminacion: "LumiBright",
        planos: "ArquiDocs",
        software: "SoftLab",
        tintas: "InkPlus",
        materiales: "ConstruMax",
      };
      // intento razonable: si el título contiene una marca conocida, usarla (ejemplo simplificado)
      const knownBrands = [
        "Bosch",
        "Hilti",
        "DeWalt",
        "Makita",
        "Autodesk",
        "Revit",
        "SketchUp",
        "Sika",
      ];
      let found = knownBrands.find((b) => p.title.includes(b));
      p.manufacturer =
        found || makersByCategory[p.category] || "Fabricante Genérico";
    }

    // Especificaciones: generar un pequeño array de pares clave:valor según categoría
    if (typeof p.specs === "undefined") {
      const specs = [];

      // Stock: si no existe, asumir disponible (por defecto 10 unidades)
      if (typeof p.stock === "undefined") p.stock = 10;
      switch (p.category) {
        case "herramientas":
        case "hardware":
          specs.push(
            `Potencia: ${
              p.power ||
              (p.title.match(/\b(\d{2,4}W|\d{3,4}W)\b/) || [""])[0] ||
              "N/A"
            }`
          );
          specs.push(`Peso aproximado: ${p.weight || "1.2 kg"}`);
          specs.push(`Material: ${p.material || "Acero/Plástico"}`);
          break;
        case "muebles":
          specs.push(`Material: ${p.material || "Tela / Madera"}`);
          specs.push(`Dimensiones: ${p.dimensions || "200 x 85 x 90 cm"}`);
          specs.push(`Peso máximo soportado: ${p.loadCapacity || "300 kg"}`);
          break;
        case "computacion":
          specs.push(`Procesador: ${p.cpu || "Intel i5 / Ryzen 5"}`);
          specs.push(`RAM: ${p.ram || "8 GB"}`);
          specs.push(
            `Almacenamiento: ${
              p.storage || (p.title.includes("SSD") ? "1 TB SSD" : "256 GB")
            }`
          );
          if (p.screen) specs.push(`Pantalla: ${p.screen}`);
          if (p.weight) specs.push(`Peso: ${p.weight}`);
          if (p.battery) specs.push(`Batería: ${p.battery}`);
          break;
        case "memorias":
        case "discos":
          specs.push(
            `Capacidad: ${
              p.capacity || (p.title.match(/(\d+TB|\d+GB)/) || [""])[0] || "N/A"
            }`
          );
          specs.push(`Interfaz: ${p.interface || "SATA / NVMe"}`);
          break;
        case "ups":
          specs.push(
            `Capacidad: ${
              p.capacityVA || (p.title.match(/(\d{3,4}VA)/) || [""])[0] || "N/A"
            }`
          );
          specs.push(`Autonomía típica: ${p.autonomy || "15-30 min"}`);
          break;
        case "software":
          specs.push(`Licencia: ${p.license || "1 año / Suscripción"}`);
          specs.push(`Plataforma: ${p.platform || "Windows / macOS"}`);
          break;
        case "planos":
          specs.push(`Formato: ${p.format || "PDF / DWG"}`);
          specs.push(`Páginas: ${p.pages || "20"}`);
          break;
        case "tintas":
          specs.push(`Color: ${p.color || "Negro / Color"}`);
          specs.push(`Rendimiento: ${p.yield || "~500 páginas"}`);
          break;
        case "iluminacion":
          specs.push(`Potencia: ${p.power || "40 W"}`);
          specs.push(`Flujo luminoso: ${p.lumens || "3500 lm"}`);
          break;
        default:
          specs.push(`Detalle: ${p.detail || "Especificación no disponible"}`);
      }
      p.specs = specs;
    }
  }
})();

let CART = [];
let currentView = "grid";
// Favoritos persistidos en localStorage (array de ids)
let FAVORITES = new Set();

function loadFavorites() {
  try {
    const raw = localStorage.getItem("favorites");
    if (!raw) return;
    const arr = JSON.parse(raw);
    if (Array.isArray(arr)) {
      FAVORITES = new Set(arr.map((v) => parseInt(v, 10)).filter(Boolean));
    }
  } catch (e) {}
}

function saveFavorites() {
  try {
    localStorage.setItem("favorites", JSON.stringify(Array.from(FAVORITES)));
  } catch (e) {}
}

function isFavorite(id) {
  return FAVORITES.has(id);
}

function toggleFavorite(id) {
  id = parseInt(id, 10);
  if (!id) return;
  if (FAVORITES.has(id)) FAVORITES.delete(id);
  else FAVORITES.add(id);
  saveFavorites();
  updateFavoritesUI(id);
  updateFavoritesBadge();
}

function updateFavoritesUI(changedId) {
  // Update any favorite buttons in the DOM for this id (or all if changedId omitted)
  const selector = changedId ? `[data-fav-id="${changedId}"]` : "[data-fav-id]";
  document.querySelectorAll(selector).forEach((btn) => {
    const id = parseInt(btn.dataset.favId, 10);
    const fav = isFavorite(id);
    btn.innerHTML = fav
      ? `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="color:#ef4444"><path d="M12 21s-7.5-4.6-9.2-7.1C-1 9.7 3.1 4 7.8 6.1 9.9 7 12 9 12 9s2.1-2 4.2-2.9C20.9 4 25 9.7 21.2 13.9 19.5 16.4 12 21 12 21z"></path></svg>
        `
      : `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="color:#374151"><path d="M20.8 4.6c-1.5-1.3-3.8-1.2-5.3.3L12 8.1 8.5 4.9C6.9 3.5 4.6 3.6 3.1 4.9 1.3 6.6 1.3 9.6 3.1 11.4l8.9 8.5 8.9-8.5c1.8-1.8 1.8-4.8 0-6.6z"></path></svg>
        <span style="font-size:11px;margin-left:4px;font-weight:700">+</span>
        `;
  });
}

function updateFavoritesBadge() {
  const btn = document.getElementById("favoritesBtnCount");
  if (!btn) return;
  btn.textContent = FAVORITES.size;
}

function showFavorites() {
  const favIds = Array.from(FAVORITES);
  const list = PRODUCTS.filter((p) => favIds.includes(p.id));
  const titleEl = document.getElementById("productsTitle");
  if (titleEl) titleEl.textContent = "Favoritos";
  // Usar el template extendido para favoritos
  const container = document.getElementById("products");
  container.innerHTML = "";
  if (!list || list.length === 0) {
    container.innerHTML = `
      <div class="no-results" style="padding:28px;background:linear-gradient(180deg,#ffffff,#f8fafc);border-radius:12px;text-align:center;box-shadow:var(--shadow);">
        <h3 style="margin:0 0 8px;color:#0b1220">No tienes favoritos</h3>
        <p style="margin:0 0 12px;color:var(--muted)">Agrega productos a favoritos para verlos aquí.</p>
      </div>
    `;
    try {
      document.getElementById("shownCount").textContent = 0;
    } catch (e) {}
    return;
  }
  list.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card featured-card";
    card.innerHTML = `
      <div class="media" style="position:relative">
        <img src="${p.img}" alt="${p.title}">
        <button data-fav-id="${p.id}" class="fav-btn" onclick="toggleFavorite(${
      p.id
    }); event.stopPropagation();" title="Favorito" style="position:absolute;top:8px;right:8px;border:0;background:rgba(255,255,255,0.9);padding:6px;border-radius:8px;display:flex;align-items:center;gap:6px;cursor:pointer"></button>
      </div>
      <div class="featured-body">
        <div class="featured-meta">
          <div class="tag">${p.category || "producto"}</div>
          <div class="price-block">
            <div class="price">$${formatPrice(
              p.price
            )} <span style="font-size:12px;color:var(--muted);font-weight:700;margin-left:8px">UNIDAD: C/U</span></div>
            ${
              p.previousPrice
                ? `<div class=\"prev\">$${formatPrice(p.previousPrice)}</div>`
                : ""
            }
          </div>
        </div>
        <h3 class="title">${p.title}</h3>
        <div class="muted" style="font-size:13px;margin-top:6px">Código: <strong>${
          p.code || "P-0001"
        }</strong> · Modelo: <strong>${p.model || "—"}</strong></div>
        ${
          p.previousPrice
            ? `<div style=\"margin-top:6px\"><button class=\"promo-btn\" onclick=\"previewProduct(${p.id})\">Ver promoción</button></div>`
            : ""
        }
        ${
          p.previousPrice
            ? `<div class=\"savings\" style=\"color:#d32f2f;font-weight:700;margin-top:4px\">AHORRO $${formatPrice(
                (p.previousPrice || p.price) - p.price
              )} <span class=\"caret\">▼</span></div>`
            : ""
        }
        <div style="border-top:1px solid #e5e7eb;padding-top:6px;margin-top:6px">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px">
            <img src="/img/shop.png" alt="Retiro en tienda" style="width:20px;height:20px">
            <div style="display:flex;flex-direction:column">
              <span style="font-size:0.75rem;color:#374151">Retiro en tienda</span>
              <span style="font-size:0.75rem;color:#0078d4"><b>Disponible</b></span>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:6px">
            <img src="/img/deli.png" alt="Domicilio" style="width:20px;height:20px">
            <div style="display:flex;flex-direction:column">
              <span style="font-size:0.75rem;color:#374151">Domicilio</span>
              <span style="font-size:0.75rem;color:#0078d4"><b>Gratis</b></span>
            </div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;margin-top:6px">
          <div style="display:flex;align-items:center;gap:8px">
            <button class="qty-btn" data-id="${
              p.id
            }" style="background:#f3f6fb;border:0;border-radius:6px;padding:6px 10px;font-size:1rem;cursor:pointer">-</button>
            <span id="qty-${p.id}">1</span>
            <button class="qty-btn" data-id="${
              p.id
            }" style="background:#f3f6fb;border:0;border-radius:6px;padding:6px 10px;font-size:1rem;cursor:pointer">+</button>
          </div>
          <div style="margin-left:auto;display:flex;gap:8px;align-items:center">
            <button class="btn btn-primary" onclick="addToCart(${
              p.id
            })">Añadir</button>
            <button class="btn btn-ghost" onclick="previewProduct(${
              p.id
            })">Ver</button>
          </div>
        </div>
        <div style="font-size:0.85rem;color:#6b7280;margin-top:10px">Válida 03/11/2025 al 30/11/2025</div>
      </div>
    `;
    container.appendChild(card);
  });
  updateFavoritesUI();
  // attach qty buttons behavior
  container.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(btn.dataset.id, 10);
      const span = document.getElementById("qty-" + id);
      if (!span) return;
      let val = parseInt(span.textContent, 10) || 1;
      if (btn.textContent.trim() === "+") val++;
      else val = Math.max(1, val - 1);
      span.textContent = val;
    });
  });
  try {
    document.getElementById("shownCount").textContent = list.length;
  } catch (e) {}
}

function formatPrice(v) {
  return v.toFixed(2);
}

// Build a product share URL. If your site is hosted, replace base with your public URL.
function buildProductUrl(id) {
  const base = window.location.origin + window.location.pathname;
  const url = new URL(base, window.location.href);
  url.searchParams.set("product", id);
  return url.toString();
}

// Fluent alert helper: muestra un diálogo modal accesible y devuelve una Promise
function showFluentAlert(message, title = "Aviso", type = "info") {
  return new Promise((resolve) => {
    try {
      // build backdrop
      const backdrop = document.createElement("div");
      backdrop.className = "fluent-alert-backdrop";
      backdrop.tabIndex = -1;

      const dlg = document.createElement("div");
      dlg.className = "fluent-alert";
      dlg.setAttribute("role", "alertdialog");
      dlg.setAttribute("aria-modal", "true");

      const header = document.createElement("div");
      header.className = "header";
      const icon = document.createElement("div");
      icon.className = "icon";
      icon.style.width = "36px";
      icon.style.height = "36px";
      icon.style.borderRadius = "8px";
      icon.style.display = "flex";
      icon.style.alignItems = "center";
      icon.style.justifyContent = "center";
      icon.style.color = "white";
      if (type === "success")
        icon.style.background = "linear-gradient(135deg,#0bbf59,#007a3d)";
      else if (type === "error")
        icon.style.background = "linear-gradient(135deg,#e0403d,#b91c1c)";
      else icon.style.background = "linear-gradient(135deg,#0078d4,#1084d8)";
      icon.textContent =
        type === "success" ? "✓" : type === "error" ? "!" : "i";

      const titleEl = document.createElement("div");
      titleEl.className = "title";
      titleEl.textContent = title;
      header.appendChild(icon);
      header.appendChild(titleEl);

      const msg = document.createElement("div");
      msg.className = "message";
      msg.innerHTML = String(message).replace(/\n/g, "<br>");

      const actions = document.createElement("div");
      actions.className = "actions";
      const btnOk = document.createElement("button");
      btnOk.className = "btn primary";
      btnOk.textContent = "Aceptar";
      const btnCancel = document.createElement("button");
      btnCancel.className = "btn secondary";
      btnCancel.textContent = "Cerrar";

      actions.appendChild(btnCancel);
      actions.appendChild(btnOk);
      dlg.appendChild(header);
      dlg.appendChild(msg);
      dlg.appendChild(actions);
      backdrop.appendChild(dlg);
      document.body.appendChild(backdrop);
      // prevent background scroll
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      // focus handling
      btnOk.focus();

      function cleanup() {
        try {
          document.body.removeChild(backdrop);
        } catch (e) {}
        document.body.style.overflow = prevOverflow || "";
        backdrop.removeEventListener("click", onBackdrop);
        document.removeEventListener("keydown", onKey);
      }

      function onBackdrop(e) {
        if (e.target === backdrop) {
          /* click outside closes dialog */ cleanup();
          resolve(false);
        }
      }
      function onKey(e) {
        if (e.key === "Escape") {
          cleanup();
          resolve(false);
        }
      }

      backdrop.addEventListener("click", onBackdrop);
      document.addEventListener("keydown", onKey);

      btnOk.addEventListener("click", () => {
        cleanup();
        resolve(true);
      });
      btnCancel.addEventListener("click", () => {
        cleanup();
        resolve(false);
      });
    } catch (err) {
      console.error(err);
      try {
        alert(message);
      } catch (_) {}
      resolve(true);
    }
  });
}

function shareFacebook(id) {
  const u = encodeURIComponent(buildProductUrl(id));
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${u}`;
  window.open(shareUrl, "_blank", "noopener,noreferrer,width=800,height=600");
}

function shareWhatsApp(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  const url = buildProductUrl(id);
  const text = encodeURIComponent(
    `${p.title} - $${formatPrice(p.price)} ${url}`
  );
  const shareUrl = `https://api.whatsapp.com/send?text=${text}`;
  window.open(shareUrl, "_blank", "noopener,noreferrer");
}

async function copyProductLink(id) {
  const url = buildProductUrl(id);
  try {
    await navigator.clipboard.writeText(url);
    showFluentAlert(
      "Enlace copiado al portapapeles:\n" + url,
      "Enlace copiado",
      "success"
    );
  } catch (e) {
    const tmp = document.createElement("input");
    tmp.value = url;
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);
    showFluentAlert(
      "Enlace copiado al portapapeles (fallback)",
      "Enlace copiado",
      "success"
    );
  }
}

function renderProducts(list = PRODUCTS) {
  const container = document.getElementById("products");
  container.innerHTML = "";
  if (!list || list.length === 0) {
    container.innerHTML = `
          <div class="no-results" style="padding:28px;background:linear-gradient(180deg,#ffffff,#f8fafc);border-radius:12px;text-align:center;box-shadow:var(--shadow);">
            <h3 style="margin:0 0 8px;color:#0b1220">No se encontraron productos</h3>
            <p style="margin:0 0 12px;color:var(--muted)">No hay productos que coincidan con los filtros seleccionados.</p>
            <div style="display:flex;justify-content:center;gap:8px">
              <button class="btn" onclick="location.reload()">Limpiar filtros</button>
              <button class="btn btn-ghost" onclick="window.scrollTo({top:0,behavior:'smooth'})">Volver arriba</button>
            </div>
          </div>
        `;
    try {
      document.getElementById("shownCount").textContent = 0;
    } catch (e) {}
    return;
  }
  list.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
          <div class="media" style="position:relative"><img src="${
            p.img
          }" alt="${p.title}">
            <button data-fav-id="${
              p.id
            }" class="fav-btn" onclick="toggleFavorite(${
      p.id
    }); event.stopPropagation();" title="Favorito" style="position:absolute;top:8px;right:8px;border:0;background:rgba(255,255,255,0.9);padding:6px;border-radius:8px;display:flex;align-items:center;gap:6px;cursor:pointer">
            </button>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:flex-start"><div>
            <div class="tag">${p.category}</div>
            <h3 class="title">${p.title}</h3>
            <div class="muted" style="font-size:13px;margin-top:6px">Código: <strong>${
              p.code || "—"
            }</strong> · Modelo: <strong>${p.model || "—"}</strong></div>
            <p class="desc">${p.desc}</p>
          </div>
          <div style="text-align:right">
            <div class="price">$${formatPrice(
              p.price
            )} <span style="font-size:12px;color:var(--muted);font-weight:700;margin-left:8px">UNIDAD: C/U</span></div>
            <div style="margin-top:10px;display:flex;gap:8px">
              <button class="btn btn-primary" onclick="addToCart(${
                p.id
              })">Añadir</button>
              <button class="btn btn-ghost" onclick="previewProduct(${
                p.id
              })">Ver</button>
            </div>
          </div></div>
        `;
    container.appendChild(card);
  });
  // Update favorite icons for rendered cards and shown count
  updateFavoritesUI();
  try {
    document.getElementById("shownCount").textContent = list.length;
  } catch (e) {}
}

// Render featured products in a compact horizontal card (used by destacados.html)
function renderFeatured(list = []) {
  const container = document.getElementById("products");
  if (!container) return;
  container.innerHTML = "";
  list.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card featured-card";
    card.innerHTML = `
          <div class="media" style="position:relative">
            <img src="${p.img}" alt="${p.title}">
            <button data-fav-id="${
              p.id
            }" class="fav-btn" onclick="toggleFavorite(${
      p.id
    }); event.stopPropagation();" title="Favorito" style="position:absolute;top:8px;right:8px;border:0;background:rgba(255,255,255,0.9);padding:6px;border-radius:8px;display:flex;align-items:center;gap:6px;cursor:pointer">
            </button>
          </div>
          <div class="featured-body">
            <div class="featured-meta">
              <div class="tag">${p.category || "producto"}</div>
              <div class="price-block">
                <div class="price">$${formatPrice(
                  p.price
                )} <span style="font-size:12px;color:var(--muted);font-weight:700;margin-left:8px">UNIDAD: C/U</span></div>
                ${
                  p.previousPrice
                    ? `<div class="prev">$${formatPrice(p.previousPrice)}</div>`
                    : ""
                }
              </div>
            </div>
            <h3 class="title">${p.title}</h3>
            <div class="muted" style="font-size:13px;margin-top:6px">Código: <strong>${
              p.code || "—"
            }</strong> · Modelo: <strong>${p.model || "—"}</strong></div>
            ${
              p.previousPrice
                ? `<div style="margin-top:6px"><button class="promo-btn" onclick="previewProduct(${p.id})">Ver promoción</button></div>`
                : ""
            }
            ${
              p.previousPrice
                ? `<div class="savings">AHORRO $${formatPrice(
                    (p.previousPrice || p.price) - p.price
                  )} <span class="caret">▼</span></div>`
                : ""
            }
            <div style="border-top:1px solid #e5e7eb;padding-top:6px;margin-top:6px">
  <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px">
    <img src="/img/shop.png" alt="Retiro en tienda" style="width:20px;height:20px">
    <div style="display:flex;flex-direction:column">
      <span style="font-size:0.75rem;color:#374151">Retiro en tienda</span>
      <span style="font-size:0.75rem;color:#0078d4"><b>Disponible</b></span>
    </div>
  </div>
  <div style="display:flex;align-items:center;gap:6px">
    <img src="/img/deli.png" alt="Domicilio" style="width:20px;height:20px">
    <div style="display:flex;flex-direction:column">
      <span style="font-size:0.75rem;color:#374151">Domicilio</span>
      <span style="font-size:0.75rem;color:#0078d4"><b>Gratis</b></span>
    </div>
  </div>
</div>

            <div style="display:flex;align-items:center;gap:10px;margin-top:6px">
              <div style="display:flex;align-items:center;gap:8px">
                <button class="qty-btn" data-id="${
                  p.id
                }" style="background:#f3f6fb;border:0;border-radius:6px;padding:6px 10px;font-size:1rem;cursor:pointer">-</button>
                <span id="qty-${p.id}">1</span>
                <button class="qty-btn" data-id="${
                  p.id
                }" style="background:#f3f6fb;border:0;border-radius:6px;padding:6px 10px;font-size:1rem;cursor:pointer">+</button>
              </div>
              <div style="margin-left:auto;display:flex;gap:8px;align-items:center">
                <button class="btn btn-primary" onclick="addToCart(${
                  p.id
                })">Añadir</button>
                <button class="btn btn-ghost" onclick="previewProduct(${
                  p.id
                })">Ver</button>
              </div>
            </div>
            <div style="font-size:0.85rem;color:#6b7280;margin-top:10px">Válida 03/11/2025 al 30/11/2025</div>
          </div>
        `;
    container.appendChild(card);
  });

  // After rendering featured cards, update favorite icons
  updateFavoritesUI();

  // attach qty buttons behavior
  container.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(btn.dataset.id, 10);
      const span = document.getElementById("qty-" + id);
      if (!span) return;
      let val = parseInt(span.textContent, 10) || 1;
      if (btn.textContent.trim() === "+") val++;
      else val = Math.max(1, val - 1);
      span.textContent = val;
    });
  });

  // update shownCount if exists
  try {
    document.getElementById("shownCount").textContent = list.length;
  } catch (e) {}
}

function addToCart(id) {
  const prod = PRODUCTS.find((p) => p.id === id);
  const found = CART.find((c) => c.id === id);
  if (found) {
    found.qty += 1;
  } else {
    CART.push({ ...prod, qty: 1 });
  }
  updateCartUI();
  pulseCart();
  showButtonLoading(id);
  showSuccessMessage(prod.title);
}

function showButtonLoading(productId) {
  const buttons = document.querySelectorAll(
    `button[onclick="addToCart(${productId})"]`
  );
  buttons.forEach((btn) => {
    const originalText = btn.textContent;
    btn.disabled = true;
    btn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 16 16" style="display:inline-block;animation:spin 1s linear infinite">
            <circle cx="8" cy="8" r="7" fill="none" stroke="white" stroke-width="2" stroke-dasharray="10.99 34.56" stroke-linecap="round"/>
          </svg>
        `;
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
    }, 800);
  });
}

function showSuccessMessage(productName) {
  const container = document.getElementById("fluentToastContainer");
  const toast = document.createElement("div");
  toast.style.cssText =
    "background:#10b981;color:white;padding:14px 18px;border-radius:8px;margin-bottom:8px;display:flex;align-items:center;gap:10px;animation:slideIn 300ms ease;box-shadow:0 8px 24px rgba(16,185,129,0.25);font-size:14px;font-weight:500";
  toast.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>✓ ${productName} agregado con éxito</span>
      `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = "slideOut 300ms ease";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function pulseCart() {
  const el = document.getElementById("cartCount");
  el.style.transform = "scale(1.2)";
  setTimeout(() => (el.style.transform = "scale(1)"), 220);
}

function updateCartUI() {
  const count = CART.reduce((s, i) => s + i.qty, 0);
  const total = CART.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById("cartCount").textContent = count;
  document.getElementById("cartTotal").textContent = formatPrice(total);
}

function openCart() {
  const backdrop = document.getElementById("modalBackdrop");
  const modal = document.getElementById("modalContent");

  // Mostrar loading
  modal.innerHTML = `
        <div style="text-align:center;padding:40px 20px">
          <svg width="48" height="48" viewBox="0 0 16 16" style="display:inline-block;animation:spin 1s linear infinite;margin-bottom:16px">
            <circle cx="8" cy="8" r="7" fill="none" stroke="#0078d4" stroke-width="2" stroke-dasharray="10.99 34.56" stroke-linecap="round"/>
          </svg>
          <p style="color:#666;font-size:14px;margin:0">Cargando carrito...</p>
        </div>
      `;
  backdrop.style.display = "flex";

  // Simular carga y mostrar contenido después de 400ms
  setTimeout(() => {
    let html = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;padding-bottom:12px;border-bottom:2px solid #0078d4">
          <div style="display:flex;align-items:center;gap:8px">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0078d4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <h3 style="margin:0;font-size:20px;font-weight:700;color:#0078d4">Mi Carrito</h3>
          </div>
          <div style="display:flex;align-items:center;gap:12px">
            ${
              CART.length > 0
                ? `<button onclick='emptyCart()' style="background:#fee2e2;border:1px solid #fecaca;color:#dc2626;cursor:pointer;font-size:12px;font-weight:600;padding:6px 10px;border-radius:6px;display:flex;align-items:center;gap:4px;transition:all 200ms ease" onmouseover="this.style.background='#fecaca'" onmouseout="this.style.background='#fee2e2'"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>Vaciar</button>`
                : ""
            }
            <span style="background:#0078d4;color:white;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:700">${
              CART.length
            } ${CART.length === 1 ? "producto" : "productos"}</span>
          </div>
        </div>`;
    if (CART.length === 0) {
      html += `<div style="padding:40px 20px;color:#666"><p class="muted" style="font-size:14px;margin-bottom:20px">Tu carrito está vacío.</p><div style="text-align:right"><button class='btn btn-ghost' onclick='closeModal()' style="background:white;color:#333;border:1px solid #ddd;padding:8px 16px;border-radius:8px;cursor:pointer;font-weight:600;font-size:13px">Cerrar</button></div></div>`;
    } else {
      html += `<div style="margin-top:8px;display:grid;gap:8px">`;
      CART.forEach((i, index) => {
        html += `
              <div style="display:flex;gap:12px;align-items:center;padding:12px;border-radius:8px;border:1px solid rgba(11,18,32,0.03);background:white;animation:fadeIn 300ms ease ${
                index * 50
              }ms both">
                <div style="width:60px;height:60px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#f0f0f0;display:flex;align-items:center;justify-content:center">
                  <img src="${i.img}" alt="${
          i.title
        }" style="width:100%;height:100%;object-fit:cover;animation:imageLoad 400ms ease">
                </div>
                <div style="flex:1">
                  <div style="display:flex;justify-content:space-between;align-items:start">
                    <div>
                      <strong>${i.title}</strong>
                      <div class='muted' style='font-size:13px'>$${formatPrice(
                        i.price
                      )} x ${i.qty}</div>
                    </div>
                    <div style='display:flex;gap:6px;align-items:center'>
                      <button class='btn btn-ghost' onclick='decreaseQty(${
                        i.id
                      })'>-</button>
                      <div>${i.qty}</div>
                      <button class='btn btn-ghost' onclick='increaseQty(${
                        i.id
                      })'>+</button>
                      <button class='btn btn-ghost' onclick='removeItem(${
                        i.id
                      })'>Eliminar</button>
                    </div>
                  </div>
                </div>
              </div>`;
      });
      const total = CART.reduce((s, i) => s + i.qty * i.price, 0);
      html += `</div><div style='margin-top:12px;display:flex;justify-content:space-between;align-items:center'><div class='muted'>Total</div><div style='font-weight:700'>$${formatPrice(
        total
      )}</div></div><div style='margin-top:12px;text-align:right;display:flex;gap:8px;justify-content:flex-end'><button class='btn btn-primary' onclick='checkout()' style="background:#0078d4;color:white;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;font-weight:600">Pagar</button> <button class='btn btn-ghost' onclick='closeModal()' style="background:white;color:#333;border:1px solid #ddd;padding:10px 20px;border-radius:8px;cursor:pointer;font-weight:600">Cerrar</button></div>`;
    }
    modal.innerHTML = html;
  }, 400);
}
function closeModal() {
  document.getElementById("modalBackdrop").style.display = "none";
}

function openLogin() {
  const modal = document.getElementById("modalContent");
  modal.innerHTML = `
        <div style="padding:32px;max-width:500px">
          <h3 style="margin:0 0 8px;font-size:24px;font-weight:600">Iniciar sesión</h3>
          <p class='muted' style="margin:0 0 24px;font-size:14px">Accede a tu cuenta para ver pedidos y carrito.</p>
          <div style="display:grid;gap:16px">
            <input id="loginEmail" placeholder="Correo electrónico" style="padding:12px;border-radius:8px;border:1px solid #e6eef8;font-size:14px;font-family:inherit" />
            <input id="loginPass" type="password" placeholder="Contraseña" style="padding:12px;border-radius:8px;border:1px solid #e6eef8;font-size:14px;font-family:inherit" />
          </div>
          <div style='margin-top:24px;display:flex;gap:8px;justify-content:flex-end'>
            <button class='btn btn-ghost' onclick='closeModal()' style="padding:10px 16px;border-radius:8px;border:1px solid #e6eef8;background:transparent;cursor:pointer;font-weight:500">Cerrar</button>
            <button class='btn btn-primary' onclick='submitLogin' style="padding:10px 24px;border-radius:8px;border:none;background:var(--accent);color:white;cursor:pointer;font-weight:500">Entrar</button>
          </div>
        </div>
      `;
  document.getElementById("modalBackdrop").style.display = "flex";
}

// Dropdown toggle and registration modal
function toggleLoginDropdown(e) {
  const dropdown = document.getElementById("loginDropdown");
  const btn = document.getElementById("loginToggle");
  if (!dropdown || !btn) return;
  const isOpen = dropdown.style.display === "block";
  if (isOpen) {
    dropdown.style.display = "none";
    dropdown.setAttribute("aria-hidden", "true");
    btn.setAttribute("aria-expanded", "false");
  } else {
    dropdown.style.display = "block";
    dropdown.setAttribute("aria-hidden", "false");
    btn.setAttribute("aria-expanded", "true");
  }
  // stop propagation when called from click on the button
  if (e && typeof e.stopPropagation === "function") e.stopPropagation();
}

// Close dropdown when clicking outside
document.addEventListener("click", function (ev) {
  const dropdown = document.getElementById("loginDropdown");
  const btn = document.getElementById("loginToggle");
  if (!dropdown || !btn) return;
  if (ev.target.closest && !ev.target.closest(".user-dropdown")) {
    dropdown.style.display = "none";
    dropdown.setAttribute("aria-hidden", "true");
    btn.setAttribute("aria-expanded", "false");
  }
});

function openRegister() {
  const modal = document.getElementById("modalContent");
  modal.innerHTML = `
        <div style="padding:32px;max-width:500px">
          <h3 style="margin:0 0 8px;font-size:24px;font-weight:600">Registrarse</h3>
          <p class='muted' style="margin:0 0 24px;font-size:14px">Crea una cuenta para realizar compras y ver tu historial.</p>
          <div style="display:grid;gap:16px">
            <input id="regName" placeholder="Nombre completo" style="padding:12px;border-radius:8px;border:1px solid #e6eef8;font-size:14px;font-family:inherit" />
            <input id="regEmail" placeholder="Correo electrónico" style="padding:12px;border-radius:8px;border:1px solid #e6eef8;font-size:14px;font-family:inherit" />
            <input id="regPass" type="password" placeholder="Contraseña" style="padding:12px;border-radius:8px;border:1px solid #e6eef8;font-size:14px;font-family:inherit" />
            <input id="regPass2" type="password" placeholder="Confirmar contraseña" style="padding:12px;border-radius:8px;border:1px solid #e6eef8;font-size:14px;font-family:inherit" />
          </div>
          <div style='margin-top:24px;display:flex;gap:8px;justify-content:flex-end'>
            <button class='btn btn-ghost' onclick='closeModal()' style="padding:10px 16px;border-radius:8px;border:1px solid #e6eef8;background:transparent;cursor:pointer;font-weight:500">Cerrar</button>
            <button class='btn btn-primary' onclick='submitRegister()' style="padding:10px 24px;border-radius:8px;border:none;background:var(--accent);color:white;cursor:pointer;font-weight:500">Crear cuenta</button>
          </div>
        </div>
      `;
  document.getElementById("modalBackdrop").style.display = "flex";
}

async function submitRegister() {
  const name = document.getElementById("regName")?.value?.trim() || "";
  const email = document.getElementById("regEmail")?.value?.trim() || "";
  const pass = document.getElementById("regPass")?.value || "";
  const pass2 = document.getElementById("regPass2")?.value || "";
  if (!name || !email || !pass) {
    await showFluentAlert("Completa todos los campos", "Error", "error");
    return;
  }
  if (pass !== pass2) {
    await showFluentAlert("Las contraseñas no coinciden", "Error", "error");
    return;
  }
  // Placeholder: aquí se enviaría al backend. Simulamos éxito.
  closeModal();
  await showFluentAlert(
    "Cuenta creada correctamente. Ya puedes iniciar sesión.",
    "Éxito",
    "success"
  );
}

async function submitLogin() {
  // Login via PHP/MySQL backend (async/await to allow alert dialog)
  const email = document.getElementById("loginEmail").value.trim();
  const pass = document.getElementById("loginPass").value || "";
  if (!email || !pass) {
    await showFluentAlert("Ingresa correo y contraseña", "Error", "error");
    return;
  }
  try {
    const resp = await fetch("api/login.php", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: pass }),
    });
    const res = await resp.json();
    if (res && res.ok) {
      closeModal();
      await showFluentAlert(
        "Sesión iniciada: " +
          (res.user && res.user.email ? res.user.email : ""),
        "Éxito",
        "success"
      );
      if (
        window.__afterAuthCallback &&
        typeof window.__afterAuthCallback === "function"
      ) {
        const cb = window.__afterAuthCallback;
        window.__afterAuthCallback = null;
        cb();
      }
    } else {
      await showFluentAlert(
        res && res.msg ? res.msg : "Error de autenticación",
        "Error",
        "error"
      );
    }
  } catch (err) {
    console.error(err);
    await showFluentAlert("No se pudo conectar al servidor.", "Error", "error");
  }
}

function increaseQty(id) {
  const it = CART.find((i) => i.id === id);
  if (it) {
    it.qty += 1;
    updateCartUI();
    openCart();
  }
}
function decreaseQty(id) {
  const it = CART.find((i) => i.id === id);
  if (!it) return;
  it.qty -= 1;
  if (it.qty <= 0) removeItem(id);
  updateCartUI();
  openCart();
}
function removeItem(id) {
  CART = CART.filter((i) => i.id !== id);
  updateCartUI();
  openCart();
}

function emptyCart() {
  const modal = document.getElementById("modalContent");
  const backdrop = document.getElementById("modalBackdrop");

  modal.innerHTML = `
        <div style="text-align:center;padding:32px 20px">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin:0 auto 16px;display:block">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
          <h3 style="margin:0 0 8px;font-size:18px;font-weight:700;color:#0b1220">¿Vaciar carrito?</h3>
          <p style="margin:0 0 24px;color:#666;font-size:14px">Esta acción no se puede deshacer. Se eliminarán todos los productos del carrito.</p>
          <div style="display:flex;gap:8px;justify-content:center">
            <button onclick='openCart()' style="background:white;color:#333;border:1px solid #ddd;padding:10px 20px;border-radius:8px;cursor:pointer;font-weight:600;font-size:14px;transition:all 200ms ease" onmouseover="this.style.background='#f3f4f6'" onmouseout="this.style.background='white'">Cancelar</button>
            <button onclick='confirmEmptyCart()' style="background:#dc2626;color:white;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;font-weight:600;font-size:14px;transition:all 200ms ease" onmouseover="this.style.background='#b91c1c'" onmouseout="this.style.background='#dc2626'">Sí, vaciar</button>
          </div>
        </div>
      `;
  backdrop.style.display = "flex";
}

function confirmEmptyCart() {
  CART = [];
  updateCartUI();
  openCart();
}

function checkout() {
  const total = CART.reduce((s, i) => s + i.qty * i.price, 0);
  const modal = document.getElementById("modalContent");

  modal.innerHTML = `
        <h3>Procesar Pago</h3>
        <div style="margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px">
          <div style="display:flex;justify-content:space-between;font-weight:700;padding-top:8px;border-top:1px solid #e6eef8">
            <div>Total a pagar:</div>
            <div>$${formatPrice(total)}</div>
          </div>
        </div>

        <div style="display:flex;gap:12px;margin-bottom:16px">
          <div style="flex:1">
            <label style="display:block;margin-bottom:6px;font-size:14px">Método de pago</label>
            <div style="display:grid;gap:8px">
              <label style="display:flex;align-items:center;gap:8px;padding:12px;border:1px solid #e6eef8;border-radius:8px;cursor:pointer">
                <input type="radio" name="payMethod" value="card" checked>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" stroke-width="2">
                  <rect x="2" y="5" width="20" height="14" rx="2"/>
                  <line x1="2" y1="10" x2="22" y2="10"/>
                </svg>
                <div>
                  <div>Tarjeta de crédito/débito</div>
                  <div style="font-size:12px;color:var(--muted)">Visa, Mastercard, American Express</div>
                </div>
              </label>
              <label style="display:flex;align-items:center;gap:8px;padding:12px;border:1px solid #e6eef8;border-radius:8px;cursor:pointer">
                <input type="radio" name="payMethod" value="paypal">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M7.144 19.532l1.049-5.751c.11-.89.808-1.232 1.1-1.232h2.941c3.744 0 6.765-2.563 6.765-5.487v-.005c0-2.924-3.021-5.487-6.765-5.487H5.297L3.002 19.532h4.142zm-1.29 2.011l.799-4.363H2.513c-.673 0-1.215-.542-1.215-1.215 0-.674.542-1.216 1.215-1.216h4.14l1.751-9.586H5.297c-.674 0-1.215-.542-1.215-1.215 0-.674.542-1.216 1.215-1.216h6.788c3.744 0 6.765 2.563 6.765 5.487v.005c0 2.924-3.021 5.487-6.765 5.487h-2.941c-.292 0-.989.342-1.1 1.232l-1.049 5.751H2.513c-.673 0-1.215.542-1.215 1.215 0 .674.542 1.216 1.215 1.216h3.341z"/>
                </svg>
                <div>
                  <div>PayPal</div>
                  <div style="font-size:12px;color:var(--muted)">Pago seguro con tu cuenta PayPal</div>
                </div>
              </label>
            </div>
          </div>
        </div>

        <form id="paymentForm" onsubmit="return processPayment(event)">
          <div id="cardFields">
            <div style="margin-bottom:16px">
              <label style="display:block;margin-bottom:6px;font-size:14px">Número de tarjeta <span id="detectedCard" style="margin-left:8px;font-weight:600;font-size:13px;color:var(--muted)"></span></label>
              <input type="text" id="cardNumber" pattern="[0-9 ]{13,23}" maxlength="23" placeholder="1234 5678 9012 3456" required inputmode="numeric"
                style="width:100%;padding:10px;border-radius:8px;border:1px solid #e6eef8">
            </div>
            <div style="display:flex;gap:12px;margin-bottom:16px">
              <div style="flex:1">
                <label style="display:block;margin-bottom:6px;font-size:14px">Fecha de expiración</label>
                <input type="text" id="expiry" pattern="^(0[1-9]|1[0-2])\/(?:[0-9]{2}|[0-9]{4})$" maxlength="7" placeholder="MM/YY o MM/YYYY" required inputmode="numeric" title="Usa MM/YY o MM/YYYY"
                  style="width:100%;padding:10px;border-radius:8px;border:1px solid #e6eef8">
              </div>
              <div style="flex:1">
                <label style="display:block;margin-bottom:6px;font-size:14px">CVV</label>
                <input type="text" id="cvv" pattern="[0-9]{3,4}" maxlength="4" placeholder="123" required
                  style="width:100%;padding:10px;border-radius:8px;border:1px solid #e6eef8">
              </div>
            </div>
            <div style="margin-bottom:16px">
              <label style="display:block;margin-bottom:6px;font-size:14px">Nombre en la tarjeta</label>
              <input type="text" id="cardName" placeholder="Como aparece en la tarjeta" required
                style="width:100%;padding:10px;border-radius:8px;border:1px solid #e6eef8">
            </div>
          </div>

          <div style="margin-top:20px;text-align:right">
            <button type="button" class="btn btn-ghost" onclick="closeModal()" style="margin-right:8px">Cancelar</button>
            <button type="submit" class="btn btn-primary">Pagar $${formatPrice(
              total
            )}</button>
          </div>
        </form>

        <p style="margin-top:16px;font-size:13px;color:var(--muted);text-align:center">
          
        </p>
      `;

  // Add form handlers
  const form = document.getElementById("paymentForm");
  const cardFields = document.getElementById("cardFields");
  const payMethods = document.querySelectorAll('input[name="payMethod"]');

  // Toggle card fields visibility based on payment method
  payMethods.forEach((radio) => {
    radio.addEventListener("change", () => {
      cardFields.style.display = radio.value === "card" ? "block" : "none";
    });
  });

  // Helper: detect card type from BIN/prefix
  function detectCardType(number) {
    if (!number) return "";
    // Visa
    if (/^4/.test(number)) return "Visa";
    // Mastercard (51-55, 2221-2720)
    if (
      /^(5[1-5])/.test(number) ||
      /^(22[2-9]|2[3-6]\d|27[01]|2720)/.test(number)
    )
      return "MasterCard";
    // American Express
    if (/^3[47]/.test(number)) return "AmEx";
    // Discover
    if (/^(6011|65|64[4-9])/.test(number)) return "Discover";
    return "";
  }

  // Wire up smart behaviors: format inputs, autodetect card, adjust CVV length
  const cardInput = document.getElementById("cardNumber");
  const expiryInput = document.getElementById("expiry");
  const detectedEl = document.getElementById("detectedCard");
  const cvvInput = document.getElementById("cvv");

  // ensure initial visibility
  cardFields.style.display =
    (document.querySelector('input[name="payMethod"]:checked') || {}).value ===
    "card"
      ? "block"
      : "none";

  if (cardInput) {
    cardInput.addEventListener("input", () => {
      // keep only digits, limit to 19
      let digits = cardInput.value.replace(/\D/g, "").slice(0, 19);
      // format into groups of 4 for readability
      cardInput.value = digits.replace(/(.{4})/g, "$1 ").trim();

      // detect network
      const type = detectCardType(digits);
      detectedEl.textContent = type ? type : "";

      // set CVV length for AmEx
      if (cvvInput) {
        if (type === "AmEx") {
          cvvInput.maxLength = 4;
          cvvInput.placeholder = "4 dígitos";
        } else {
          cvvInput.maxLength = 3;
          cvvInput.placeholder = "123";
        }
      }

      // auto-select card method and reveal fields
      const cardRadio = document.querySelector(
        'input[name="payMethod"][value="card"]'
      );
      if (cardRadio) {
        cardRadio.checked = true;
        cardFields.style.display = "block";
      }
    });
  }

  if (expiryInput) {
    expiryInput.addEventListener("input", () => {
      let v = expiryInput.value.replace(/\D/g, "").slice(0, 6); // up to MMYYYY
      if (v.length <= 2) {
        expiryInput.value = v;
      } else if (v.length <= 4) {
        expiryInput.value = v.slice(0, 2) + "/" + v.slice(2);
      } else {
        expiryInput.value = v.slice(0, 2) + "/" + v.slice(2, 6);
      }
    });
  }
}

function processPayment(e) {
  e.preventDefault();
  const payMethod = document.querySelector(
    'input[name="payMethod"]:checked'
  ).value;

  // Simulate processing
  const modal = document.getElementById("modalContent");
  modal.innerHTML = `
        <div style="text-align:center">
          <div class="loading" style="margin:20px auto">
            <div style="width:40px;height:40px;border:3px solid #f3f6fb;border-top-color:var(--accent);border-radius:50%;animation:spin 1s linear infinite"></div>
          </div>
          <h3>Procesando pago...</h3>
          <p class="muted">Por favor espera mientras verificamos tu pago</p>
        </div>
      `;

  // Simulate API call delay
  setTimeout(() => {
    completeOrder();
  }, 2000);

  return false;
}

function completeOrder() {
  const orderNumber = Math.floor(Math.random() * 1000000);
  CART = [];
  updateCartUI();

  document.getElementById("modalContent").innerHTML = `
        <div style="text-align:center">
          <div style="width:64px;height:64px;margin:20px auto;background:var(--accent);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white">
            <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" fill="none">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h3>¡Pago completado!</h3>
          <p>Tu orden #${orderNumber} ha sido procesada exitosamente.</p>
          <p class="muted" style="margin:16px 0">Te enviaremos un correo con los detalles de tu compra.</p>
          <div style="margin-top:20px">
            <button class="btn btn-primary" onclick="closeModal()">Entendido</button>
          </div>
        </div>
      `;
}

function previewProduct(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  const modal = document.getElementById("modalContent");
  const CATEGORY_LABELS = {
    herramientas: "Herramientas",
    materiales: "Materiales",
    software: "Software",
    planos: "Planos",
    muebles: "Muebles",
    computacion: "Computación",
    memorias: "Memorias",
    ups: "UPS",
    discos: "Discos Duros",
    tintas: "Tintas",
    iluminacion: "Iluminación",
    hardware: "Hardware",
    all: "Productos",
  };
  modal.innerHTML = `
        <div class="modal-body">
          <div style='display:flex;gap:18px;flex-wrap:wrap'>
            <div style='flex:1;min-width:260px'>
              <div style="position:relative;border-radius:10px;overflow:hidden;max-height:420px">
                <img src='${p.img}' alt='${
    p.title
  }' style='width:100%;display:block;object-fit:cover;max-height:420px'>
                ${
                  p.previousPrice && p.previousPrice > p.price
                    ? `<div style="position:absolute;top:12px;left:12px;background:linear-gradient(90deg,#f97316,#fb923c);color:white;padding:6px 8px;border-radius:999px;display:flex;align-items:center;gap:8px;font-weight:700;font-size:13px;box-shadow:0 6px 18px rgba(0,0,0,0.12)">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0">
                        <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h11z"></path>
                        <path d="M13.73 21a2 2 0 01-3.46 0"></path>
                      </svg>
                      <span>Promoción</span>
                    </div>`
                    : ""
                }
              </div>
            </div>
            <div style='flex:1;min-width:220px'>
              <h3 style="margin:6px 0">${p.title}</h3>
              <div style="margin-top:6px"><span class="tag">${
                CATEGORY_LABELS[p.category] ||
                (p.category
                  ? p.category.charAt(0).toUpperCase() + p.category.slice(1)
                  : "")
              }</span></div>
              <p>${p.desc}</p>

              <div style='margin-top:8px'>
                <div class='muted'>Código: <strong>${
                  p.code || "—"
                }</strong></div>
                <div class='muted'>Fabricante: <strong>${
                  p.manufacturer || "—"
                }</strong></div>
                <div class='muted'>Modelo: <strong>${
                  p.model || "—"
                }</strong></div>
                <div class='muted'>Garantía: <strong>${
                  p.warranty || "No aplica"
                }</strong></div>
                ${
                  p.specs && p.specs.length
                    ? `<div style="margin-top:8px"><div class='muted' style='margin-bottom:6px'>Especificaciones:</div><ul style="margin:0 0 0 18px;padding:0;list-style:disc">${p.specs
                        .map((s) => `<li style="margin-bottom:6px">${s}</li>`)
                        .join("")}</ul></div>`
                    : ""
                }
              </div>

              ${
                p.safety
                  ? `<div class="safety-alert"><strong>ADVERTENCIA DE SEGURIDAD</strong><p style='margin:0'>${p.safety}</p></div>`
                  : ""
              }

              <div style='margin-top:12px;display:flex;gap:16px;align-items:center'>
                <p class="price-modal" style='font-weight:700;color:var(--accent);margin:0'>$${formatPrice(
                  p.price
                )}</p>
                <p style='font-size:13px;color:var(--muted);margin:0'>UNIDAD: C/U</p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-actions">
          <div style="display:flex;gap:8px;align-items:center">
            <button class='btn btn-primary' onclick='addToCart(${
              p.id
            })'>Añadir al carrito</button>
            <button class='btn btn-ghost' onclick='closeModal()'>Cerrar</button>
          </div>
          <div style="margin-left:auto;display:flex;gap:8px;align-items:center">
            <button class="tag" title="Compartir en Facebook" onclick="shareFacebook(${
              p.id
            })" style="cursor:pointer;border:none;background:rgba(0,0,0,0.06);padding:8px;display:flex;align-items:center;justify-content:center">
              <svg viewBox="0 0 24 24" fill="currentColor" style="width:18px;height:18px;color:#0078d4"><path d="M22 12.07C22 6.55 17.52 2 12 2S2 6.55 2 12.07C2 17.1 5.66 21.22 10.44 21.98v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22C18.34 21.22 22 17.1 22 12.07z"/></svg>
            </button>
            <button class="tag" title="Compartir en WhatsApp" onclick="shareWhatsApp(${
              p.id
            })" style="cursor:pointer;border:none;background:rgba(0,0,0,0.06);padding:8px;display:flex;align-items:center;justify-content:center">
              <svg viewBox="0 0 24 24" fill="currentColor" style="width:18px;height:18px;color:#25D366"><path d="M20.52 3.48A11.86 11.86 0 0012 0C5.37 0 .01 5.37.01 12a11.8 11.8 0 001.64 6.02L0 24l6.25-1.62A11.9 11.9 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.24-6.18-3.48-8.52zM12 21.5c-1.2 0-2.38-.3-3.43-.86l-.24-.12-3.72.97.97-3.63-.13-.25A9.5 9.5 0 012.5 12c0-5.25 4.25-9.5 9.5-9.5S21.5 6.75 21.5 12 17.25 21.5 12 21.5zM17.25 14.88c-.28-.14-1.65-.82-1.9-.91-.25-.09-.43-.14-.62.14-.18.28-.69.91-.85 1.1-.16.18-.32.21-.6.07-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.47-.07-.12-.62-1.5-.86-2.04-.23-.54-.46-.47-.62-.48-.16-.01-.35-.01-.54-.01s-.47.07-.72.34c-.25.27-.95.93-.95 2.27 0 1.34.97 2.64 1.1 2.82.14.18 1.9 2.9 4.61 3.96 3.23 1.28 3.23.85 3.8.8.57-.05 1.65-.66 1.88-1.31.23-.65.23-1.2.16-1.31-.07-.12-.25-.18-.53-.32z"/></svg>
            </button>
            <button class="tag" title="Copiar enlace" onclick="copyProductLink(${
              p.id
            })" style="cursor:pointer;border:none;background:rgba(0,0,0,0.06);padding:8px;display:flex;align-items:center;justify-content:center">
              <svg viewBox="0 0 24 24" fill="currentColor" style="width:18px;height:18px;color:#6b7280"><path d="M3.9 12.5l1.4 1.4c.4.4 1 .4 1.4 0l3.2-3.2c.4-.4.4-1 0-1.4L9.8 8.3c-.4-.4-1-.4-1.4 0L5.2 11.5c-.4.4-.4 1 0 1.4zM13.5 3.5h5c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2h-1v-2h1V5h-4.5V3.5zM12 6.5h-3v2h3c1.4 0 2.5 1.1 2.5 2.5V15h2v-4c0-2.5-2-4.5-4.5-4.5z"/></svg>
            </button>
          </div>
        </div>`;

  document.getElementById("modalBackdrop").style.display = "flex";
}

// Filters and search
function applyFilters() {
  const container = document.getElementById("products");

  // Show loading state
  container.innerHTML = `
        <div class="loading-container" style="grid-column: 1 / -1;">
          <div class="loading-spinner"></div>
          <p class="loading-text">Cargando productos...</p>
        </div>
      `;

  // Simulate network delay and then render
  setTimeout(() => {
    const cat = document.getElementById("categoryFilter").value;
    // Map internal category keys to human-friendly labels
    const CATEGORY_LABELS = {
      all: "Productos",
      herramientas: "Herramientas",
      materiales: "Materiales",
      software: "Software",
      planos: "Planos",
      muebles: "Muebles",
      computacion: "Computación",
      memorias: "Memorias",
      ups: "UPS",
      discos: "Discos Duros",
      tintas: "Tintas",
      iluminacion: "Iluminación",
      hardware: "Hardware",
    };
    const titleEl = document.getElementById("productsTitle");
    try {
      if (titleEl)
        titleEl.textContent =
          CATEGORY_LABELS[cat] || cat.charAt(0).toUpperCase() + cat.slice(1);
    } catch (e) {}
    const max =
      parseFloat(document.getElementById("maxPrice").value) || Infinity;
    const sort = document.getElementById("sortBy").value;
    const q = document.getElementById("searchInput").value.trim().toLowerCase();
    let out = PRODUCTS.filter(
      (p) =>
        (cat === "all" || p.category === cat) &&
        p.price <= max &&
        (p.title.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q))
    );
    if (sort === "price_asc") out.sort((a, b) => a.price - b.price);
    if (sort === "price_desc") out.sort((a, b) => b.price - a.price);
    // If page requested featured-style cards (like destacados.html) use renderFeatured
    if (window && window.USE_FEATURED_CARDS) renderFeatured(out);
    else renderProducts(out);
  }, 600);
}
function resetFilters() {
  document.getElementById("categoryFilter").value = "all";
  document.getElementById("maxPrice").value = "";
  document.getElementById("sortBy").value = "default";
  document.getElementById("searchInput").value = "";
  // Remove persisted category so refresh returns to 'Todas'
  try {
    localStorage.removeItem("selectedCategory");
  } catch (e) {}
  applyFilters();
}

document.getElementById("searchInput").addEventListener("input", () => {
  applyFilters();
});
// Persist selected category so a page refresh does not revert to "Todas"
// Al cargar la página, actualizar el breadcrumb según la categoría seleccionada
window.addEventListener("DOMContentLoaded", () => {
  const categoryFilter = document.getElementById("categoryFilter");
  const breadcrumb = document.getElementById("breadcrumbProducts");
  if (categoryFilter && breadcrumb) {
    const selected = categoryFilter.value;
    let catText = "Productos";
    if (selected !== "all") {
      const option = categoryFilter.options[categoryFilter.selectedIndex];
      catText = `Productos / ${option.text}`;
    }
    breadcrumb.textContent = catText;
  }
});
document.getElementById("categoryFilter").addEventListener("change", (e) => {
  try {
    localStorage.setItem("selectedCategory", e.target.value);
  } catch (err) {}
  // Actualizar breadcrumb
  const breadcrumb = document.getElementById("breadcrumbProducts");
  const selected = e.target.value;
  let catText = "Productos";
  if (selected !== "all") {
    // Buscar el texto de la opción seleccionada
    const option = e.target.options[e.target.selectedIndex];
    catText = `Productos / ${option.text}`;
  }
  breadcrumb.textContent = catText;
  applyFilters();
});
document.getElementById("sortBy").addEventListener("change", () => {
  applyFilters();
});
document.getElementById("maxPrice").addEventListener("input", () => {
  applyFilters();
});

// En mobile/tablet: al cambiar la categoría en el drawer, aplicar automáticamente
(function () {
  const catDrawer = document.getElementById("categoryFilterDrawer");
  if (!catDrawer) return;
  catDrawer.addEventListener("change", () => {
    try {
      // Si estamos en pantallas pequeñas, aplicar y cerrar el drawer
      if (window.innerWidth <= 768) {
        applyFiltersDrawer();
      } else {
        // En escritorio simplemente sincronizamos el valor al sidebar
        syncDrawerFilters();
      }
    } catch (e) {}
  });
})();

function gridView() {
  currentView = "grid";
  const el = document.getElementById("products");
  el.className = "products";
  // Update button states
  const gridBtn = document.getElementById("gridBtn");
  const listBtn = document.getElementById("listBtn");
  gridBtn.style.background = "var(--accent)";
  gridBtn.style.color = "white";
  listBtn.style.background = "transparent";
  listBtn.style.color = "inherit";
  applyFilters();
}

function listView() {
  currentView = "list";
  const el = document.getElementById("products");
  el.className = "products list-view";
  // Update button states
  const gridBtn = document.getElementById("gridBtn");
  const listBtn = document.getElementById("listBtn");
  listBtn.style.background = "var(--accent)";
  listBtn.style.color = "white";
  gridBtn.style.background = "transparent";
  gridBtn.style.color = "inherit";
  applyFilters();
}

// initial setup: restore category selection from localStorage (if any), initialize UI and render
function createCustomSelects() {
  document.querySelectorAll("select.select").forEach((select) => {
    if (select.dataset.csInitialized) return;
    select.dataset.csInitialized = "1";

    // wrap and hide native select visually but keep it in DOM for form semantics
    const wrapper = document.createElement("div");
    wrapper.className = "custom-select";
    select.parentNode.insertBefore(wrapper, select);
    wrapper.appendChild(select);
    // visually hide native select but keep it accessible
    select.style.position = "absolute";
    select.style.opacity = 0;
    select.style.pointerEvents = "none";
    select.style.height = "0";
    select.style.width = "0";

    // toggle button (shows current value)
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "cs-toggle";
    toggle.setAttribute("aria-haspopup", "listbox");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = `<span class="cs-value">${
      select.options[select.selectedIndex]?.text || ""
    }</span><span class="cs-arrow"></span>`;
    wrapper.appendChild(toggle);

    // options panel
    const list = document.createElement("ul");
    list.className = "cs-options";
    list.setAttribute("role", "listbox");
    wrapper.appendChild(list);

    // populate
    Array.from(select.options).forEach((opt) => {
      const li = document.createElement("li");
      li.className = "cs-option";
      li.setAttribute("role", "option");
      li.tabIndex = 0;
      li.textContent = opt.text;
      li.dataset.value = opt.value;
      if (opt.disabled) {
        li.classList.add("disabled");
        li.setAttribute("aria-disabled", "true");
        li.tabIndex = -1;
      }
      if (opt.selected) li.classList.add("selected");
      li.addEventListener("click", (e) => {
        if (li.classList.contains("disabled")) return;
        select.value = li.dataset.value;
        select.dispatchEvent(new Event("change", { bubbles: true }));
        updateToggle();
        close();
      });
      list.appendChild(li);
    });

    function updateToggle() {
      const s = select.options[select.selectedIndex];
      toggle.querySelector(".cs-value").textContent = s ? s.text : "";
      list
        .querySelectorAll(".cs-option")
        .forEach((li) =>
          li.classList.toggle("selected", li.dataset.value == select.value)
        );
    }

    function open() {
      list.style.display = "block";
      toggle.setAttribute("aria-expanded", "true");
      wrapper.classList.add("open");
    }
    function close() {
      list.style.display = "none";
      toggle.setAttribute("aria-expanded", "false");
      wrapper.classList.remove("open");
    }

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      if (wrapper.classList.contains("open")) close();
      else {
        open();
        const f = list.querySelector(".cs-option:not(.disabled)");
        if (f) f.focus();
      }
    });

    // keyboard navigation
    toggle.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
        const f = list.querySelector(".cs-option:not(.disabled)");
        if (f) f.focus();
      }
    });
    list.addEventListener("keydown", (e) => {
      const active = document.activeElement;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        let next = active.nextElementSibling;
        while (next && next.classList.contains("disabled"))
          next = next.nextElementSibling;
        if (next) next.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        let prev = active.previousElementSibling;
        while (prev && prev.classList.contains("disabled"))
          prev = prev.previousElementSibling;
        if (prev) prev.focus();
      } else if (e.key === "Enter") {
        e.preventDefault();
        active.click();
      } else if (e.key === "Escape") {
        close();
        toggle.focus();
      }
    });

    // close when clicking outside
    document.addEventListener("click", (e) => {
      if (!wrapper.contains(e.target)) close();
    });

    // sync when native select changes programmatically
    select.addEventListener("change", updateToggle);
  });
}

// call initialization: restore saved category, create custom selects and render filters
(function initFiltersFromStorage() {
  try {
    const sel = document.getElementById("categoryFilter");
    const saved = localStorage.getItem("selectedCategory");
    if (saved && sel) {
      // only apply if option exists
      if (Array.from(sel.options).some((o) => o.value === saved))
        sel.value = saved;
    }
  } catch (e) {}

  // Initialize custom selects so the visible toggle reflects restored value
  createCustomSelects();

  // Ensure cart UI updated and render products using current filters
  updateCartUI();
  // load favorites from storage and update badge/icons
  loadFavorites();
  updateFavoritesBadge();
  updateFavoritesUI();
  applyFilters();
})();

// close modal on backdrop click
document.getElementById("modalBackdrop").addEventListener("click", (e) => {
  if (e.target.id === "modalBackdrop") closeModal();
});

// Drawer de filtros para mobile
function openFilterDrawer() {
  const drawer = document.getElementById("filterDrawer");
  const overlay = document.getElementById("filterOverlay");
  drawer.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeFilterDrawer() {
  const drawer = document.getElementById("filterDrawer");
  const overlay = document.getElementById("filterOverlay");
  drawer.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

function syncDrawerFilters() {
  // Sincronizar filtros entre sidebar desktop y drawer mobile
  const catMain = document.getElementById("categoryFilter");
  const catDrawer = document.getElementById("categoryFilterDrawer");
  const sortMain = document.getElementById("sortBy");
  const sortDrawer = document.getElementById("sortByDrawer");
  const maxMain = document.getElementById("maxPrice");
  const maxDrawer = document.getElementById("maxPriceDrawer");

  if (catMain && catDrawer) catDrawer.value = catMain.value;
  if (sortMain && sortDrawer) sortDrawer.value = sortMain.value;
  if (maxMain && maxDrawer) maxDrawer.value = maxMain.value;
}

function applyFiltersDrawer() {
  // Copiar valores del drawer al sidebar desktop
  const catDrawer = document.getElementById("categoryFilterDrawer");
  const catMain = document.getElementById("categoryFilter");
  const sortDrawer = document.getElementById("sortByDrawer");
  const sortMain = document.getElementById("sortBy");
  const maxDrawer = document.getElementById("maxPriceDrawer");
  const maxMain = document.getElementById("maxPrice");

  if (catDrawer && catMain) catMain.value = catDrawer.value;
  if (sortDrawer && sortMain) sortMain.value = sortDrawer.value;
  if (maxDrawer && maxMain) maxMain.value = maxDrawer.value;

  // Aplicar filtros
  applyFilters();
  // Cerrar drawer
  closeFilterDrawer();
}

function resetFiltersDrawer() {
  // Limpiar filtros en drawer
  document.getElementById("categoryFilterDrawer").value = "all";
  document.getElementById("sortByDrawer").value = "default";
  document.getElementById("maxPriceDrawer").value = "";

  // Limpiar en sidebar desktop
  document.getElementById("categoryFilter").value = "all";
  document.getElementById("sortBy").value = "default";
  document.getElementById("maxPrice").value = "";

  try {
    localStorage.removeItem("selectedCategory");
  } catch (e) {}
  applyFilters();
  closeFilterDrawer();
}

// Sincronizar al abrir el drawer (soporta el toggle flotante y el del header)
document
  .querySelectorAll("#filterToggle, #filterToggleHeader")
  .forEach((btn) => {
    btn.addEventListener("click", () => {
      syncDrawerFilters();
      openFilterDrawer();
    });
  });

  
