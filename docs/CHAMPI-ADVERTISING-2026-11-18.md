# Champi: adición a la ficha de publicidad — 18 noviembre 2026

## Alcance autorizado

Ale pide añadir estos trabajos, o al menos el último, exclusivamente en `/design/project/ai-advertising-content`, siguiendo su estructura y estilo. Se incorpora **un vídeo real nuevo**, R05 de Champi, de 18 segundos. La ficha pasa de cinco a seis vídeos. Se conservan las cuatro categorías/fichas y los vídeos anteriores; no se recupera la ampliación rechazada del 11 de noviembre.

Contexto consultado: chat «Analiza proyectos y prepara webs» (01a0f254-cec2-7be3-90fe-33685b82fd9e), especialmente la restauración y los cambios todavía pendientes en PR #4. Esta rama parte de `master` f363e17; no incluye PR #4 ni modifica alewences.es.

## Presentación

- Vídeo de Champi en primera posición, portada original, sin reproducción automática.
- Contenedor vertical adaptativo solo para esta pieza; `object-fit: contain` conserva todo el encuadre. Miniatura completa, sin ampliación que recorte texto.
- Mismos colores, bordes, tipografías, dos columnas, tarjetas, selección e información del reproductor existente.
- Descripción comercial ES/EN: fotografías auténticas, menús 35/45/60 €, edición asistida por IA y cierre para reservar. Sin resultados comerciales inventados.
- Crédito musical y licencia visibles en ambas versiones. Los tres archivos son copias idénticas de R05; no se genera ni cobra otro vídeo.
- React Bits no aporta una función necesaria a esta adición: se reutiliza el reproductor y el sistema visual existentes, sin dependencias nuevas.

## Verificación

- ESLint correcto; 15 tests aprobados; build y presupuesto de bundle correctos.
- El fixture del inventario anterior se conserva sin modificaciones. La comparación admite solamente el id 6 de esta categoría y comprueba esa incorporación por separado.
- Chromium real controlado desde CUA: reproducción de 0 a 18 s con sonido habilitado, estado ended y sin error; no se afirma escucha crítica humana.
- 320×568, 390×844, 844×390 y 1440×900: sin desbordamiento horizontal; vídeo 1080×1920 con encuadre completo. No se probaron dispositivos físicos.
- Cambio ES → EN → ES, selección del vídeo anterior de YouTube y regreso al MP4 correctos. Consola revisada sin errores.
- Evidencias en `docs/qa/champi-2026-11-18/`. Previsualización del build: http://127.0.0.1:5190/design/project/ai-advertising-content

## Bloqueo de publicación

El preflight obligatorio de `scripts/check-release.mjs` falla en `npm audit --audit-level=high` por GHSA-fc5q-39xc-vjpf (picomatch, aviso actualizado 17-nov-2026). La última versión publicada, 4.0.7, sigue afectada y el aviso declara que no hay versión corregida. Las 11 alertas son la propagación del mismo hallazgo por herramientas de compilación (Vite/Tailwind/globs). Se guarda aparte la auditoría de dependencias de producción para delimitar el alcance; NO sustituye el control completo.

No se cambia el umbral, no se desactiva el control y no se fuerza una migración de Tailwind. No hay merge ni publicación en producción. La pieza está terminada y revisable; resolver el hallazgo o aprobar una excepción exacta y temporal es un paso aparte.

Fuente del hallazgo: https://github.com/advisories/GHSA-fc5q-39xc-vjpf
