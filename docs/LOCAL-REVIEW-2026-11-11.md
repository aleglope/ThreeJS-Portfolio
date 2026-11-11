# AGonzL · Revisión local del 11 de noviembre de 2026

Rama local `codex/portfolio-refresh-2026-11-11`. El servidor Vite escucha en `127.0.0.1:5178` y los enlaces a Alewences usan `VITE_SERVICES_URL=http://127.0.0.1:3016`. En un entorno sin esa variable el destino es `https://alewences.es`.

## Recorridos

- [Diseño y proyectos](http://127.0.0.1:5178/design#design-projects). Champi, Velvet y Beirocor junto a las cuatro fichas temáticas.
- [La Parrilla de Champi](http://127.0.0.1:5178/design/project/la-parrilla-de-champi) y [sus cuatro vídeos](http://127.0.0.1:5178/design/project/la-parrilla-de-champi#videos). Identidad aplicada, rótulos, aviso real de vacaciones, concepto ficticio de Halloween y prototipos de plato y vitrina.
- [Velvet · Tres webs con Diego Hermo](http://127.0.0.1:5178/design/project/velvet-ecosistema). Tres webs públicas, trabajo de adaptación e integración de las marcas y un esquema del pergamino con estado del 10 de noviembre.
- [Vídeo y motion](http://127.0.0.1:5178/design#video-showcase). Seis destacados, quince piezas locales y cuatro Shorts identificables de la colección anterior enlazados a su origen. [Enlace directo a Anuncios con IA](http://127.0.0.1:5178/design?video=anuncios-ia#video-showcase).
- [Reaper Scene](http://127.0.0.1:5178/design#model-3d-showcase). Visor existente activado a petición, con enlace a la fuente.
- [Trabajo reciente y casos técnicos](http://127.0.0.1:5178/dev#recent-work). Siete referencias nuevas, tres casos profesionales destacados y enlace a los ocho del índice. Los nueve proyectos del carrusel siguen disponibles.

## Archivos y decisiones

- `src/constants/portfolioMedia.js` registra las piezas y sus metadatos medidos. `src/components/PortfolioVideo.jsx` monta un reproductor nativo con controles por elección del visitante y lo desmonta al cerrar o cambiar de pieza. La apertura y la reproducción son acciones distintas. `docs/media-transcripts.json` aporta las nueve alternativas textuales. Los subtítulos integrados en los másteres se conservan en los derivados.
- `src/constants/clientProjects.js`, `src/pages/ClientProjectDetail.jsx` y `src/sections/design/DesignProjects.jsx` comparten rutas e imágenes. La ficha del diploma usa un esquema público y texto. El activo de Halloween enlaza a la demostración de Alewences.
- `src/App.jsx` y `src/sections/design/DesignNavbar.jsx` dirigen a las secciones de Diseño desde todas las fichas. El menú móvil usa un botón con estado expandido y cierra con Escape. El modelo de Sketchfab conserva su enlace y comparte activación con el reproductor.
- `src/constants/recentWork.js` y `src/sections/RecentWork.jsx` incorporan referencias ligeras. Palermo, Music IA y Wentwit se presentan con una descripción de su estado. El README enlaza a `www.aglwences.dev`.
- Las cuatro tarjetas genéricas de vídeo se retiraron de la galería al carecer de asociación editorial fiable. Sus rutas de origen siguen en las fichas anteriores. Los cuatro Shorts reconocibles se presentan como enlaces, al margen de las quince piezas locales.
- Se evaluó React Bits. La selección, el foco y el reproductor aprovechan controles nativos y los estilos del sitio.

## Comprobaciones

- `npm run build` correcto en el baseline y en la ampliación. Continúan avisos heredados de Browserslist, `eval` en una dependencia de Three.js y paquetes superiores a 1 MB.
- ESLint específico de la ampliación correcto. `npm run lint` general devuelve 27 errores heredados frente a 31 iniciales. Los cuatro de Sketchfab se resolvieron al reemplazar su envoltorio. Los dos errores de validación de `position` en `LandingPage.jsx` ya existían antes de cambiar el destino de servicios.
- Render de componentes en ES/EN comprobó seis tarjetas iniciales, quince desde el enlace directo, ausencia de reproductor al entrar, referencias de fichas y nueve transcripciones. En Desarrollo verificó el ancla y la ausencia de enlaces vacíos y de medios pesados en el bloque nuevo.
- HTTP local devolvió 200 en nueve rutas SPA, 206 con `video/mp4` y 256 bytes en los quince vídeos, y el MIME correcto en quince pósteres y doce activos de las fichas. Los nueve enlaces nuevos a repositorios y documentación de GitHub devolvieron 200.
- La reproducción y el foco con controles reales, el diseño a 320/390 px y la preferencia de movimiento reducido quedan pendientes: la conexión del navegador del coordinador se interrumpió y después la captura nativa falló con ScreenCaptureKit. Las comprobaciones HTTP y de render estático cubren carga inicial, referencias y rutas, pero no sustituyen la revisión visual y de interacción.

Los commits de código y los activos de los demás responsables están separados. El ensayo se realiza en local y la revisión de Ale precede cualquier publicación.

## Cierre técnico del coordinador

- Build de Vite repetido tras los últimos cambios: correcto. ESLint de todos los archivos de la ampliación: sin diagnósticos.
- Revisión independiente de fuentes y HTTP concluida sin bloqueos nuevos abiertos. Se corrigió el enlace de Brétema a `/estilos#experiencia-3d` para que respete el origen local y llegue a una ruta existente.
- Captura local de Halloween incorporada; el encuadre debe revisarse junto con la aceptación visual pendiente.
- La implementación y sus commits permanecen en el worktree y la rama locales. No se ha publicado.
