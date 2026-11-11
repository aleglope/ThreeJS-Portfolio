# AGonzL: portfolio creativo y técnico local Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Mostrar encargos y quince piezas reales con reproducción accesible y contexto bilingüe.

**Architecture:** Mantener rutas SPA existentes. Registro único de vídeos; fichas propias Champi y Velvet, y bloque ligero de proyectos recientes en Desarrollo.

**Tech Stack:** React 18/Vite, React Router, i18next, R3F y estilos existentes

**Spec:** /Users/agl/.codex/worktrees/portfolio-refresh-2026-11-11/aglwences-web/docs/superpowers/specs/2026-11-11-portfolio-proyectos-ia-design.md

## Global Constraints

- Entrega SOLO LOCAL. Sin push, merge, despliegue, preview remota o cambios de producción antes de revisión de Ale y autorización posterior.
- Preservar identidad, rutas y funcionalidades previas; no dependencias nuevas ni actualización de frameworks.
- Etiquetas explícitas: real, en desarrollo, prototipo y concepto ficticio. No cifras ni resultados inventados, ni datos de clientes.
- Medios originales intactos; derivados en public/media/portfolio; un medio pesado activo, proporción fuente, controles y movimiento reducido.
- Las tres webs son elcaminotattoo.es, velvettattooacademy.es, velvetatto.com/es. Son cliente real con Diego.
- Datos compartidos solo dentro de cada repo. Separar trabajo de Billing.

## Review Focus

1. Usuario entra directamente en una ficha: navegación vuelve a las secciones correctas del índice.
2. Usuario cambia de pieza con el vídeo reproduciéndose: la anterior se detiene; ninguna carga global de todos los vídeos.
3. Móvil de 320 px y vídeo vertical: controles, etiqueta y contenido completos, sin overflow.
4. Medio roto o movimiento reducido: portada/texto/enlace siguen utilizables; reproducción voluntaria.
5. Vacaciones terminadas o concepto Halloween: fecha/procedencia y destino no se confunden con operación actual de Champi.

---
## Contrato de medios

Quince IDs: champi-spot, champi-promo, champi-rotulos, champi-seo, nova, stock-ia, reformas-materiales, anuncios-ia, asistente-voz, respuesta-clientes, datos-negocio, engram, chatbot-307, bretema, color-legibilidad.
Cada ID tiene /media/portfolio/videos/{id}.mp4 y /media/portfolio/posters/{id}.webp en el portfolio. Alewences recibe reformas-materiales, stock-ia y datos-negocio. El agente de medios escribe los derivados y docs/portfolio-media-manifest.json con id, seconds, width, height, bytes, source, captions/transcript evidence; ningún código UI.
Imágenes compartidas: champi-vacaciones.webp, champi-logo.svg, champi-marca.webp, champi-parrillada.webp, champi-vitrina.webp, velvet-logo.webp, elcamino-logo.webp, velvet-wireframes.svg. El coordinador produce capturas velvet-web.webp, elcamino-web.webp, academy-web.webp, beirocor-web.webp, champi-halloween-web.webp. No compartir propiedad de esos archivos.

### Task 1: Colección audiovisual

**Files:** src/constants/portfolioMedia.js (nuevo); src/sections/design/VideoShowcase.jsx; src/components/PortfolioVideo.jsx (nuevo); src/hooks/useLocalizedVideoShowcase.js cuando proceda.
**Interfaces:** portfolioVideos: Array<{id,projectId,title:{es,en},description:{es,en},status:{es,en},seconds,width,height,src,poster,featured,transcript?}>; PortfolioVideo({video,onClose?}) usa reproducción voluntaria, preload none y controls. Contenido hablado español, web ES/EN.
- [ ] Leer spec/mapa y baseline; comprobar npm run build y lint anotando fallos anteriores.
- [ ] Registrar limitaciones actuales del selector/reproducción. Añadir pruebas de comportamiento donde aporten, sin snapshots de textos estáticos ni dependencias nuevas.
- [ ] Implementar quince entradas según inventario y seis destacados, coleccion completa, portadas propias y referencias únicas. Conservar las cuatro obras previas identificables; sustituir cuatro tarjetas genéricas sin vínculo acreditado por la colección real y documentar decisión.
- [ ] Implementar inicio con portada/título, ratio fuente, cambio que desmonta el vídeo previo, error visible, controles, nombres y retorno de foco. No autoplay audible ni descarga de todos los vídeos.
- [ ] Alternativa de texto: usar transcripciones verificadas suministradas por medios. No inventar transcripción; audio permanece original, títulos/contexto ES/EN.
- [ ] Build y lint de archivos propios; comprobar HTML/servidor. El coordinador realizará CUA para evitar control de navegador concurrente.
- [ ] Commit local solo código propio.

### Task 2: Casos y navegación

**Files:** src/constants/design.js; src/pages/ProjectDetail.jsx o componente propio de caso; src/sections/design/DesignProjects.jsx; src/sections/design/DesignNavbar.jsx; src/constants/clientProjects.js (nuevo); src/locales/es.json; src/locales/en.json.
**Interfaces:** /design/project/la-parrilla-de-champi y /design/project/velvet-ecosistema con referencias a IDs del registro. VITE_SERVICES_URL sustituye solo destino comercial en local, fallback https://alewences.es.
- [ ] Incorporar fichas y tarjetas Champi/Velvet más Beirocor breve con enlaces/capturas/roles/estados. En Champi mostrar marca/rótulos/prototipos y vacaciones. En Velvet sus tres webs y adaptación/integración de logos, no autoría original falsa.
- [ ] Reutilizar PortfolioVideo en fichas, solo activado a petición; no incrustar todos los vídeos pesados. Usar esquema público para diploma, no grabaciones privadas.
- [ ] Corregir navegación desde ficha a /design#home, #design-projects, #video-showcase, #contact y focus de controles afectados.
- [ ] Mantener las cuatro fichas previas y rutas. Completar ES/EN nuevo, incluyendo alt/etiquetas y selección de categorías.
- [ ] Build y lint propio; commit local.

### Task 3: Desarrollo y enlaces recientes

**Files:** src/sections/RecentWork.jsx (nuevo); src/pages/DevPortfolio.jsx; src/constants/recentWork.js (nuevo); README.md si dominio obsoleto.
**Interfaces:** RecentWork usa registros localizados y enlaces públicos reales, no texturas de vídeo obligatorias ni href #. Ancla recent-work.
- [ ] Añadir Velvet, Rastro, combivideo, Palermo, VirusInvaders, Music IA, Wentwit y selección profesional AudioNow/Online Registration/PrintFlow con índice ocho. Preservar nueve proyectos actuales, no duplicar Museum/Groove.
- [ ] Mantener estados y atribución, descripción pública saneada de Palermo; referencias sin demo se presentan sin falsa acción.
- [ ] Ejecutar npm run build y npm run lint; corregir errores propios y documentar baseline ajeno. No actualizar frameworks.
- [ ] Arrancar solo localhost:5178 con VITE_SERVICES_URL=http://127.0.0.1:3016; no Vercel, no push, no llamadas a formularios reales.
- [ ] Dejar informe docs/LOCAL-REVIEW-2026-11-11.md con archivos, comprobaciones y límites para revisión de coordinador.
