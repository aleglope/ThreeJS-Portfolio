import transcripts from "../../docs/media-transcripts.json";

const bilingual = (es, en) => ({ es, en });

const real = bilingual("Trabajo real", "Client work");
const concept = bilingual("Concepto ficticio", "Fictional concept");
const demo = bilingual("Demostración", "Demo");
const editorial = bilingual("Pieza editorial", "Editorial piece");

const localVideo = ({ id, ...video }) => ({
  id,
  ...video,
  sourceType: "file",
  transcript: transcripts[id],
  featured: video.featured ?? false,
  src: `/media/portfolio/videos/${id}.mp4`,
  poster: `/media/portfolio/posters/${id}.webp`,
});

const champi = "la-parrilla-de-champi";
const studio = "alewences";

export const portfolioVideos = [
  localVideo({
    id: "champi-spot", projectId: champi, status: real, featured: true,
    title: bilingual("La Parrilla de Champi · Spot", "La Parrilla de Champi · TV spot"),
    description: bilingual("Treinta segundos de parrilla, equipo y ambiente del restaurante, con imágenes y voz del encargo.", "Thirty seconds of the grill, the team and the restaurant, with footage and voice from the project."),
    seconds: 30.016, width: 1280, height: 720,
  }),
  localVideo({
    id: "champi-seo", projectId: champi, status: real, featured: true,
    title: bilingual("Champi · De Maps a la web", "Champi · From Maps to the website"),
    description: bilingual("Pieza de motion sobre la conexión entre la ficha de Maps y la web de un restaurante local.", "A motion piece about how a local restaurant’s Maps listing connects to its website."),
    seconds: 48.0, width: 720, height: 1280,
  }),
  localVideo({
    id: "champi-rotulos", projectId: champi, status: real, featured: true,
    title: bilingual("Champi · Rótulos de neón en 3D", "Champi · 3D neon signs"),
    description: bilingual("Proceso visual de los rótulos «Churrasco» y «Niveles» que trasladan la identidad del local a su web.", "The visual process behind the ‘Churrasco’ and ‘Niveles’ signs that bring the restaurant’s identity to its website."),
    seconds: 22.916667, width: 960, height: 720,
  }),
  localVideo({
    id: "bretema", projectId: "bretema", status: concept, featured: true,
    title: bilingual("Brétema · Fareiro 39", "Brétema · Fareiro 39"),
    description: bilingual("Relojería ficticia. Modelo 3D y montaje de producto para explorar una ficha de comercio electrónico.", "A fictional watchmaker. A 3D model and a product film exploring an e-commerce product page."),
    seconds: 44.01, width: 720, height: 1280,
  }),
  localVideo({
    id: "nova", projectId: "nova", status: concept, featured: true,
    title: bilingual("NOVA · Asistente para barbería", "NOVA · Barbershop assistant"),
    description: bilingual("Película de concepto para una barbería ficticia, centrada en el flujo de un asistente.", "A concept film for a fictional barbershop, centred on an assistant workflow."),
    seconds: 55.018, width: 1280, height: 720,
  }),
  localVideo({
    id: "reformas-materiales", projectId: studio, status: demo, featured: true,
    title: bilingual("Reformas · Previsión de materiales", "Renovation · Planning materials"),
    description: bilingual("Ejemplo de cómo preparar las necesidades de material de una obra con un sistema a medida.", "An example of using custom software to plan the materials a renovation will need."),
    seconds: 32.106, width: 720, height: 1280,
  }),
  localVideo({
    id: "champi-promo", projectId: champi, status: real,
    title: bilingual("Champi · Promoción vertical", "Champi · Vertical promo"),
    description: bilingual("Montaje de veinte segundos pensado para mostrar el restaurante en formato vertical.", "A twenty-second edit designed to show the restaurant in a vertical format."),
    seconds: 20.01, width: 720, height: 1280,
  }),
  localVideo({
    id: "stock-ia", projectId: studio, status: demo,
    title: bilingual("Control de stock con IA", "Stock control with AI"),
    description: bilingual("Explicador de un flujo de revisión de existencias y preparación de reposiciones.", "An explainer about reviewing stock levels and preparing replenishment."),
    seconds: 44.01, width: 720, height: 720,
  }),
  localVideo({
    id: "anuncios-ia", projectId: studio, status: demo, servicesPath: "/#casos",
    title: bilingual("Anuncios con IA", "Advertising with AI"),
    description: bilingual("Motion de presentación para un servicio de producción de anuncios con IA.", "Motion graphics introducing an AI-assisted ad production service."),
    seconds: 45.013, width: 720, height: 900,
  }),
  localVideo({
    id: "asistente-voz", projectId: studio, status: demo,
    title: bilingual("Asistente de voz con IA", "AI voice assistant"),
    description: bilingual("Demostración conversacional de un asistente que atiende por voz.", "A conversational demo of a voice assistant handling a call."),
    seconds: 62.016, width: 1280, height: 720,
  }),
  localVideo({
    id: "respuesta-clientes", projectId: studio, status: demo,
    title: bilingual("¿Respondes tarde?", "Are you replying too late?"),
    description: bilingual("Pieza breve sobre organizar la entrada de consultas y el seguimiento de clientes.", "A short film about organising incoming enquiries and customer follow-up."),
    seconds: 20.01, width: 720, height: 1280,
  }),
  localVideo({
    id: "datos-negocio", projectId: studio, status: demo,
    title: bilingual("Datos de negocio", "Business data"),
    description: bilingual("Ejemplo visual de cómo reunir y leer datos dispersos para revisar la actividad de un negocio.", "A visual example of bringing scattered data together to review business activity."),
    seconds: 30.016, width: 720, height: 1280,
  }),
  localVideo({
    id: "engram", projectId: studio, status: editorial,
    title: bilingual("Engram · Agentes con memoria", "Engram · Agents with memory"),
    description: bilingual("Explicador técnico en motion sobre conservar contexto al trabajar con agentes.", "A technical motion explainer about preserving context when working with agents."),
    seconds: 55.018, width: 1280, height: 720,
  }),
  localVideo({
    id: "chatbot-307", projectId: studio, status: concept,
    title: bilingual("Chatbots con IA · 3:07 AM", "AI chatbots · 3:07 AM"),
    description: bilingual("Escena ficticia con generación visual y motion para ilustrar una consulta fuera de horario.", "A fictional scene using generated visuals and motion to illustrate an out-of-hours enquiry."),
    seconds: 43.1, width: 720, height: 1280,
  }),
  localVideo({
    id: "color-legibilidad", projectId: studio, status: editorial, servicesPath: "/diseno-web-empresas",
    title: bilingual("Color web · Legibilidad", "Web colour · Readability"),
    description: bilingual("Pieza educativa sobre cómo el color y la tipografía afectan a la lectura de una interfaz.", "An educational piece on how colour and typography affect the readability of an interface."),
    seconds: 23.1, width: 720, height: 1280,
  }),
];

export const earlierVideos = [
  { id: "o0IVhvMOUqE", title: bilingual("Publicidad con IA · Alewences Cyberpunk", "AI advertising · Alewences Cyberpunk") },
  { id: "7UwD7YRqOLg", title: bilingual("Alma Digital · Consciencia y naturaleza", "Digital Soul · Consciousness and nature") },
  { id: "jrcoY_lo0Nw", title: bilingual("De selfie a retrato fantástico", "From selfie to fantasy portrait") },
  { id: "P_b8DT46CHM", title: bilingual("Amigo de terror de Halloween con IA", "AI Halloween horror friend") },
].map((video) => ({ ...video, href: `https://www.youtube.com/shorts/${video.id}` }));

export const mediaLocale = (language) => language === "es" ? "es" : "en";

export const videoDuration = (seconds) => {
  const total = Math.round(seconds);
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
};
