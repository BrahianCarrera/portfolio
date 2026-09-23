import gerardoImg1 from "./images/gerardo.png";
import gerardoImg2 from "./images/gerardo-2.png";
import inventoryImg from "./images/inventory.png";
import cultivoImg from "./images/cultivo.png";

const PIXEL_DRAW_LIVE_URL =
  "https://pixel-draw-demo-n4j56a7mf-brahiancarreras-projects.vercel.app/";

const INVENTORY_LIVE_URL =
  "https://management-system-poc-frontend.vercel.app/";

const MI_CULTIVO_LIVE_URL =
  "https://io-t-project-5cfj5ar4y-brahiancarreras-projects.vercel.app/";

const projects = [
  {
    name: "Inventory Management",
    description:
      "Proof of concept de un sistema de gestion de inventario con dashboard, CRUD de productos, categorias y productores, y registro de ventas con deduccion automatica de stock. Frontend en React conectado a una API FastAPI con PostgreSQL.",
    technologies: ["React", "Vite", "React Router", "FastAPI", "PostgreSQL"],
    features: [
      "Dashboard con valor de inventario, unidades en stock y alertas de stock bajo",
      "CRUD de productos, categorias y productores con busqueda y filtros",
      "Registro de ventas con deduccion automatica de stock en tiempo real",
      "Operaciones masivas de precios e inventario y API documentada con Swagger",
    ],
    liveUrl: INVENTORY_LIVE_URL,
    image: {
      src: inventoryImg,
      alt: "Dashboard del sistema de Inventory Management",
    },
  },
  {
    name: "Pixel Draw",
    description:
      "App universal (web, Android e iOS) para compartir arte en pixeles con tu persona favorita en tiempo real. Los dibujos se reflejan al instante en la pareja, se guardan en una galeria colaborativa y pueden aparecer en el widget del telefono sin abrir la app.",
    technologies: [
      "React Native",
      "Expo",
      "React Native Skia",
      "TypeScript",
      "Android Widget",
    ],
    features: [
      "Lienzo de pixel art 16x16 y 32x32 con lapiz, borrador, cubo de relleno, cuentagotas y deshacer",
      "Sincronizacion en pareja con codigos de invitacion PX-XXXXXX",
      "Galeria colaborativa con paleta dominante, cobertura y autor de cada obra",
      "Widget de pantalla de inicio con notificaciones push en Android e iOS",
    ],
    liveUrl: PIXEL_DRAW_LIVE_URL,
    preview: "pixel-draw",
    embedUrl:
      "https://snack.expo.dev/embedded/@usuario/pixel-draw?preview=true&platform=android",
    snackUrl: "[SNACK_URL_PIXEL_DRAW]",
  },
  {
    name: "Hidroponiac",
    description:
      "GUI para controlar y monitorear un cultivo hidroponico. Permite apagar y encender valvulas y bombas del sistema mediante un frontend conectado a Firebase, actualizado por un backend corriendo en un ESP32.",
    technologies: ["React Native", "Expo", "Firebase Realtime Database", "ESP32"],
    embedUrl:
      "https://snack.expo.dev/embedded/@usuario/hidroponiac?preview=true&platform=android",
    snackUrl: "[SNACK_URL_HIDROPONIAC]",
  },
  {
    name: "Gerardo App",
    description:
      "App para llevar el tracking de la alimentacion de personas de la tercera edad en centros asistenciales. Un medico y los encargados de los pacientes tienen asignadas dietas para que los tres roles puedan controlar la alimentacion del paciente.",
    technologies: ["React Native", "Expo", "Supabase"],
    images: [
      {
        src: gerardoImg1,
        alt: "Gerardo App - Pantalla de inicio de sesión",
      },
      {
        src: gerardoImg2,
        alt: "Gerardo App - Perfil de usuario y navegación",
      },
    ],
    snackUrl: "[SNACK_URL_GERARDO_APP]",
  },
  {
    name: "Mi Cultivo",
    description:
      "Sistema IoT de monitoreo y control para cultivos hidroponicos. La app recibe datos de sensores en tiempo real desde Firebase y permite consultar metricas, revisar el historico y encender la bomba o la valvula desde el movil.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Firebase Realtime Database",
      "Material 3",
    ],
    features: [
      "Monitoreo en vivo de temperatura, humedad, pH y nivel de agua con estados de alerta",
      "Historial de las ultimas 50 lecturas con graficas de tendencia por metrica",
      "Panel de control para bomba de riego, valvula de llenado y medicion de pH",
      "Datos sincronizados con Firebase Realtime Database en tiempo real",
    ],
    liveUrl: MI_CULTIVO_LIVE_URL,
    image: {
      src: cultivoImg,
      alt: "Mi Cultivo - Panel de monitoreo del cultivo hidroponico",
    },
  },
];

const projectsGrid = document.querySelector("#projects-grid");
const currentYear = document.querySelector("#current-year");

function createTag(tag) {
  const element = document.createElement("span");
  element.className = "tag";
  element.textContent = tag;
  return element;
}

function createFeatureList(project) {
  const list = document.createElement("ul");
  list.className = "feature-list";
  list.setAttribute("aria-label", `Caracteristicas de ${project.name}`);

  project.features.forEach((feature) => {
    const item = document.createElement("li");
    item.textContent = feature;
    list.append(item);
  });

  return list;
}

const PIXEL_HEART_PATTERN = [
  "01100110",
  "11111111",
  "11111111",
  "11111111",
  "01111110",
  "00111100",
  "00011000",
];

const PIXEL_PALETTE = [
  "#e11d48",
  "#facc15",
  "#22c55e",
  "#3b82f6",
  "#a855f7",
  "#ffffff",
  "#94a3b8",
  "#64748b",
];

function createPixelCanvas() {
  const canvas = document.createElement("div");
  canvas.className = "pixel-canvas";
  canvas.setAttribute("role", "img");
  canvas.setAttribute(
    "aria-label",
    "Vista previa de un corazon dibujado en el lienzo de Pixel Draw",
  );

  PIXEL_HEART_PATTERN.forEach((row) => {
    row.split("").forEach((cell) => {
      const pixel = document.createElement("span");
      pixel.className = cell === "1" ? "pixel-cell filled" : "pixel-cell";
      canvas.append(pixel);
    });
  });

  return canvas;
}

function createPixelPreview() {
  const device = document.createElement("div");
  device.className = "pixel-device";

  const bar = document.createElement("div");
  bar.className = "pixel-device-bar";

  const title = document.createElement("span");
  title.className = "pixel-device-title";

  const dot = document.createElement("span");
  dot.className = "status-dot";

  title.append(dot, document.createTextNode(" Pixel Draw"));

  const code = document.createElement("span");
  code.className = "pixel-code";
  code.textContent = "PX-XXXXXX";

  bar.append(title, code);

  const tools = document.createElement("div");
  tools.className = "pixel-tools";
  tools.setAttribute("aria-hidden", "true");
  ["Lapiz", "Borrador", "Relleno", "Gotera", "Deshacer"].forEach((tool) => {
    const chip = document.createElement("span");
    chip.className = "pixel-tool";
    chip.textContent = tool;
    tools.append(chip);
  });

  const palette = document.createElement("div");
  palette.className = "pixel-palette";
  palette.setAttribute("aria-hidden", "true");
  PIXEL_PALETTE.forEach((color) => {
    const swatch = document.createElement("span");
    swatch.className = "pixel-swatch";
    swatch.style.background = color;
    palette.append(swatch);
  });

  const caption = document.createElement("p");
  caption.className = "pixel-caption";
  caption.textContent = "24 colores retro · demo web en vivo";

  const canvas = createPixelCanvas();
  device.append(bar, canvas, tools, palette, caption);
  return device;
}

function createMobileScreensPreview(images) {
  const wrapper = document.createElement("div");
  wrapper.className = "mobile-screens-wrapper";

  images.forEach((imgData) => {
    const card = document.createElement("a");
    card.className = "mobile-screen-card";
    const src = typeof imgData === "string" ? imgData : imgData.src;
    const alt =
      (typeof imgData === "object" && imgData.alt) ||
      "Captura de pantalla de la app móvil";
    card.href = src;
    card.target = "_blank";
    card.rel = "noreferrer";
    card.title = "Ver captura en tamaño completo";

    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.loading = "lazy";

    card.append(img);
    wrapper.append(card);
  });

  return wrapper;
}

function createWebScreenPreview(imageData, liveUrl, projectName) {
  const frame = document.createElement(liveUrl ? "a" : "div");
  frame.className = "browser-window";
  if (liveUrl) {
    frame.href = liveUrl;
    frame.target = "_blank";
    frame.rel = "noreferrer";
    frame.setAttribute(
      "aria-label",
      `Abrir demo en vivo de ${projectName}`,
    );
  }

  const bar = document.createElement("div");
  bar.className = "browser-bar";

  const dots = document.createElement("div");
  dots.className = "browser-dots";
  ["red", "yellow", "green"].forEach((color) => {
    const dot = document.createElement("span");
    dot.className = `browser-dot ${color}`;
    dots.append(dot);
  });

  const address = document.createElement("div");
  address.className = "browser-address";
  address.textContent = liveUrl
    ? liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : projectName;

  bar.append(dots, address);

  const img = document.createElement("img");
  const src = typeof imageData === "string" ? imageData : imageData.src;
  const alt =
    (typeof imageData === "object" && imageData.alt) ||
    "Captura de pantalla del sistema";
  img.src = src;
  img.alt = alt;
  img.loading = "lazy";

  frame.append(bar, img);
  return frame;
}

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  const content = document.createElement("div");
  content.className = "project-content";

  const title = document.createElement("h3");
  title.textContent = project.name;

  const description = document.createElement("p");
  description.textContent = project.description;

  content.append(title, description);

  if (project.features?.length) {
    content.append(createFeatureList(project));
  }

  const tags = document.createElement("div");
  tags.className = "tags";
  tags.setAttribute("aria-label", `Tecnologias usadas en ${project.name}`);
  project.technologies.forEach((tag) => tags.append(createTag(tag)));
  content.append(tags);

  const action = document.createElement("a");
  action.className = "button snack-button";
  action.target = "_blank";
  action.rel = "noreferrer";

  if (project.liveUrl) {
    action.classList.add("primary");
    action.href = project.liveUrl;
    action.textContent = "Ver demo en vivo";
    content.append(action);
  } else if (project.snackUrl) {
    action.href = project.snackUrl;
    action.textContent = "Abrir en Expo Snack";
    content.append(action);
  }

  const preview = document.createElement("div");
  preview.className = "snack-preview";

  if (project.preview === "pixel-draw") {
    preview.classList.add("pixel-preview");
    preview.append(createPixelPreview());
  } else if (project.images?.length) {
    preview.classList.add("images-preview-mode");
    preview.append(createMobileScreensPreview(project.images));
  } else if (project.image) {
    preview.classList.add("web-preview-mode");
    preview.append(
      createWebScreenPreview(project.image, project.liveUrl, project.name),
    );
  } else if (project.embedUrl) {
    const iframe = document.createElement("iframe");
    iframe.title = project.snackUrl
      ? `Preview de ${project.name} en Expo Snack`
      : `Preview de ${project.name} en vivo`;
    iframe.src = project.embedUrl;
    iframe.allow =
      "accelerometer; camera; encrypted-media; gyroscope; picture-in-picture";
    iframe.loading = "lazy";
    preview.append(iframe);
  }

  article.append(content, preview);
  return article;
}

projects.forEach((project) => {
  projectsGrid.append(createProjectCard(project));
});

currentYear.textContent = new Date().getFullYear();
