# AGonzL · Revisión local del 11 de noviembre de 2026

Rama local `codex/portfolio-refresh-2026-11-11`. El servidor Vite escucha en `127.0.0.1:5178` y los enlaces a Alewences usan `VITE_SERVICES_URL=http://127.0.0.1:3016`. En un entorno sin esa variable el destino es `https://alewences.es`.

## Recorridos

- [Diseño y proyectos](http://127.0.0.1:5178/design#design-projects). Champi, Velvet y Beirocor junto a las cuatro fichas temáticas.
- [La Parrilla de Champi](http://127.0.0.1:5178/design/project/la-parrilla-de-champi) y [sus cuatro vídeos](http://127.0.0.1:5178/design/project/la-parrilla-de-champi#videos). Identidad aplicada, rótulos, aviso real de vacaciones, diseño de temporada de Halloween y prototipos de plato y vitrina.
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
- Estado inicial, resuelto en la revisión móvil documentada más abajo: la reproducción, el foco, el diseño a 320/390 px y la preferencia de movimiento reducido quedaron pendientes porque la conexión del navegador del coordinador se interrumpió y después la captura nativa falló con ScreenCaptureKit. Las comprobaciones HTTP y de render estático cubren carga inicial, referencias y rutas, pero no sustituyen la revisión visual y de interacción.

Los commits de código y los activos de los demás responsables están separados. El ensayo se realiza en local y la revisión de Ale precede cualquier publicación.

## Cierre técnico del coordinador

- Build de Vite repetido tras los últimos cambios: correcto. ESLint de todos los archivos de la ampliación: sin diagnósticos.
- Revisión independiente de fuentes y HTTP concluida sin bloqueos nuevos abiertos. Se corrigió el enlace de Brétema a `/estilos#experiencia-3d` para que respete el origen local y llegue a una ruta existente.
- Captura local de Halloween incorporada; el encuadre debe revisarse junto con la aceptación visual pendiente.
- La implementación y sus commits permanecen en el worktree y la rama locales. No se ha publicado.

## Ajuste solicitado por Ale · 11 nov 2026

Se retira el aviso «ejemplo ficticio» de Halloween y sus referencias visibles. Se mantiene la presentación como diseño de temporada, sin afirmar una campaña celebrada. El navegador vuelve a estar disponible: se abrieron las cuatro rutas locales y se verificó la retirada del aviso en la página. Nueva captura de portada sin el texto anterior, compartida por ambas webs. La revisión completa de interacción se completó después; ver el apartado siguiente.

## Revisión móvil completada · 11 nov 2026

Esta comprobación sustituye los pendientes de navegador indicados en el registro inicial. Todo sigue en los worktrees locales; no se ha publicado.

- **Responsive:** páginas comerciales principales y casos a 320 y 390 CSS px; entrada, Diseño, Desarrollo y seis fichas del portfolio en móvil. Comprobaciones adicionales a 768 px (Diseño) y 1024 px (anuncios). Sin desbordamiento del documento tras corregir la órbita decorativa de Halloween y el ancho fijo del globo. Las tiras de miniaturas antiguas conservan su desplazamiento horizontal dentro del componente.
- **Vídeos:** los 15 archivos de la colección del portfolio, los 13 YouTube de las cuatro fichas anteriores y los 5 reproductores de la web comercial (3 IA y 2 WebViva) arrancan con controles reales, avanzan y decodifican imagen (`readyState=4`). Se probó también la selección de vídeo dentro del caso Champi y un enlace directo a la pieza de Maps.
- **Continuidad:** cerrar devuelve el foco y desmonta el vídeo; seleccionar otra pieza deja un único reproductor; cambiar a una imagen retira el clip; abrir Sketchfab retira el vídeo y viceversa. ES/EN, FAQ de ChatGPT, menús, Escape y cierre al navegar comprobados. El estado de movimiento reducido elimina la transición de la cabecera y el scroll suave en los componentes revisados.
- **Enlaces:** 84 destinos HTTP comprobados: 83 devuelven 200; LinkedIn devuelve 999 y bloquea la comprobación automática. Ninguna ancla comercial inspeccionada falta. Se recorrieron en UI las nueve rutas del portfolio, evitando tomar su fallback HTTP 200 como prueba suficiente. Los CTA de contacto se inspeccionaron sin enviar formularios o mensajes.
- **Correcciones:** menú comercial con Escape y scroll en pantallas bajas; menú Dev con área de 44 px, estado accesible, contenido cerrado desmontado y cierre al elegir una sección; tarjetas de entrada del portfolio como enlaces de teclado; enlace de contacto conectado al origen local; globo y órbita sin exceso de ancho; dos duraciones de YouTube corregidas.
- **Anuncios:** bloque nuevo de ChatGPT, Microsoft Copilot y Google IA, acceso desde el hero, CTA y cuatro FAQ. Home, pie, sitemap y guía de servicios actualizados. País, cuenta, actividad y público se distinguen; fuentes en `ADS-IA-SOURCES-2026-11-11.md` del repositorio comercial.
- **Ingeniería:** Next build + TypeScript correctos (29 páginas); Vite build correcto después del último cambio de enlaces. Lint de los archivos comerciales y de Navbar/Globe correcto. El lint global del portfolio conserva los mismos 27 errores previos; las advertencias heredadas de bundle/Three.js/Browserslist continúan. Revisión independiente del diff: sin bloqueos.

Evidencia estructurada: `docs/qa/mobile-2026-11-11.json`. Capturas: `docs/qa/anuncios-ia-390.jpg` en Alewences y `docs/qa/video-390.jpg` en el portfolio. Las observaciones anteriores a las correcciones se conservan con etiquetas diferenciadas.

**Límites:** emulación de navegador, no ensayo en iPhone/Android físico; el proveedor no admite inyección táctil nativa. Se comprobó el inicio y avance de cada pieza, no una escucha íntegra de todas ellas. Los avisos heredados de la escena 3D no equivalen a una auditoría completa de rendimiento. La aceptación de Ale y cualquier publicación siguen pendientes.
