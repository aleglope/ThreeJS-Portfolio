const image = (file, width, height) => ({ src: `/media/portfolio/${file}`, width, height });

export const clientProjects = [
  {
    id: "la-parrilla-de-champi",
    to: "/design/project/la-parrilla-de-champi",
    href: "https://laparrilladechampi.es/es",
    servicesPath: "/casos/la-parrilla-de-champi",
    cover: image("posters/champi-spot.webp", 960, 540),
    chapters: [
      { id: "brand", image: image("champi-marca.webp", 3508, 3508) },
      { id: "seasonal" },
      { id: "vacation", image: image("champi-vacaciones.webp", 1400, 1120) },
      { id: "halloween", image: image("champi-halloween-web.webp", 1440, 810), servicesPath: "/muestras/champi-halloween" },
      { id: "platter", image: image("champi-parrillada.webp", 1000, 1000) },
      { id: "display", image: image("champi-vitrina.webp", 1000, 1000) },
    ],
    videoIds: ["champi-spot", "champi-promo", "champi-rotulos", "champi-seo"],
  },
  {
    id: "velvet-ecosistema",
    to: "/design/project/velvet-ecosistema",
    servicesPath: "/casos/velvet",
    cover: image("velvet-web.webp", 1440, 900),
    chapters: [
      { id: "velvet", image: image("velvet-web.webp", 1440, 900), href: "https://velvetatto.com/es" },
      { id: "elcamino", image: image("elcamino-web.webp", 1440, 900), href: "https://elcaminotattoo.es/" },
      { id: "academy", image: image("academy-web.webp", 1440, 900), href: "https://velvettattooacademy.es/" },
      { id: "velvet-logo", image: image("velvet-logo.webp", 896, 211), contain: true },
      { id: "elcamino-logo", image: image("elcamino-logo.webp", 1000, 1000), contain: true },
      { id: "workflow", image: image("velvet-wireframes.svg", 1200, 1100), contain: true },
      { id: "diploma" },
    ],
    videoIds: [],
  },
  {
    id: "beirocor",
    href: "https://beirocor.es/",
    cover: image("beirocor-web.webp", 1440, 900),
  },
];
