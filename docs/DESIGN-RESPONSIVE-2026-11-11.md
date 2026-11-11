# Corrección responsive de Diseño · 11 nov 2026

## Alcance

Petición de Ale: evitar que el título cubra el modelo 3D y revisar Diseño en móvil. Base `f363e17`, después de restaurar el contenido original. Se conservan las cuatro áreas, las galerías, los ocho vídeos principales, el modelo y la identidad visual. La revisión posterior incorpora el panel de contacto responsive y los perfiles sociales solicitados. Sin cambios en alewences.es, la presentación de Dev, dependencias o medios. Preparado para revisión local antes de publicar.

## Fallos reproducidos y correcciones

- El visor y el CTA estaban posicionados absolutamente respecto a la altura del hero. Solape título/visor: 18 px a 1440×900, 109 px a 320×568 y 107 px a 844×390. Ahora texto, visor y CTA reservan su espacio en el flujo; se conservan los tamaños habituales del visor y se adapta su ancho en horizontal de poca altura. La página puede crecer verticalmente.
- A 640 px el menú de escritorio desplazaba los idiomas hasta x=735, fuera de pantalla. El menú plegable se mantiene hasta 1024 px. Cierra al navegar, con Escape y al pasar a escritorio; las opciones cerradas salen del DOM, y la lista abierta tiene scroll cuando falta altura.
- En fichas, los enlaces de cabecera apuntaban a fragmentos de la propia ficha que no existían. Apuntan ahora a `/design#…`, conservando las secciones.
- La ficha de arte fotográfico ocupaba 385 px en una pantalla de 320 por el título de 48 px y el mínimo intrínseco del grid. El título usa 30/36/48 px según ancho y su columna admite contracción y saltos de palabras. Se reserva espacio para la cabecera fija.
- El contenido del reproductor vacío sobresalía de su caja en 320 px. Tiene altura mínima suficiente cuando está vacío; el vídeo mantiene 16:9. Los anclajes reservan margen para la cabecera; selección de vídeo en fichas lleva al reproductor. Se acota el texto superpuesto móvil, se nombra el cierre de 44 px y los controles de galería; las tarjetas de vídeo admiten teclado y recuperan el foco al cerrar.

## Evidencia

Versión compilada con Node 24.20.0, npm 11.19.0. `npm run check:release`: lint correcto y 14/14 tests; el inventario original y la retirada de medios siguen verificados. Auditoría sin altas/críticas (permanece el aviso bajo de deepmerge). `npm run build` correcto, entrada de aplicación 402.934 bytes antes de compresión; se conserva el aviso del chunk 3D original.

- 30 combinaciones de portada: ES y EN, anchos 320, 360, 390, 430, 568, 639, 640, 768, 820, 844, 1023, 1024, 1280, 1440 y 1920. Incluye 568×320 y 844×390. Se esperó al título del idioma seleccionado antes de medir. Sin overflow horizontal, sin superposición de título/visor/CTA ni controles de cabecera fuera de pantalla. Separación mínima de 16 px en horizontal y 24 px en pantallas pequeñas verticales.
- 16 comprobaciones de fichas: cuatro rutas, ES/EN, 320×568 y 768×1024. Sin overflow horizontal. Arte fotográfico vuelve a 320 px de ancho total.
- Menú a 568×320: panel entre y=84 e y=320; contenido de 450 px desplazable dentro de 236 px. Idioma accesible; Escape devuelve foco y el giro a escritorio cierra el panel. Cabecera recuperada al desplazar hacia arriba y navegación desde una ficha a Proyectos confirmada con margen superior de 104 px.
- Galerías: cambio de categoría, tres miniaturas de UI/UX, anterior/siguiente y retorno a la imagen inicial. Reproducción real de los vídeos originales Cyberpunk (11,921 s) y Alma Digital (27,541 s), `readyState=4`, fotogramas decodificados; cierre desmonta el iframe y devuelve el foco. No se ha repetido la reproducción completa de los 21 vídeos históricos.
- Primera revisión del formulario publicado, sin envío: a 320 px sus campos quedan entre x=40 y x=280; fuente 18 px, inputs/select 56 px y botón 48 px. Esa medición de ancho no detectó el desajuste entre contenido y marco dibujado en la imagen. La revisión posterior corrige y comprueba el panel completo, como se detalla debajo.
- Sin errores de consola en la pestaña compilada durante el recorrido. Medidas y capturas en `docs/qa/design-responsive-2026-11-11/`.

## Límites

Chromium integrado con tamaños emulados; no equivale a Safari/iPhone/Android físicos ni a un ensayo de rendimiento en hardware modesto. La entrada táctil directa por CDP no está disponible en este navegador: controles probados por las interacciones disponibles, sin atribuirles un ensayo de gesto físico. Sketchfab y YouTube conservan su dependencia externa. No se ha enviado correo ni se ha desplegado esta corrección a producción.

## Revisión posterior: contacto y redes

Ale señaló el marco desajustado del formulario a 525×827 y pidió TikTok e Instagram profesional. El fondo era una imagen absoluta con un marco dibujado; `object-cover` y la altura variable del formulario no podían mantener alineados texto y bordes. Diseño utiliza ahora un panel real que crece con el contenido, con introducción y formulario en columnas desde 1024 px y una columna en móvil. Se mantienen textos, campos, opciones, botón y transporte de EmailJS. La variante por defecto de Contact conserva el terminal y las clases originales en Dev; comprobado en navegador.

TikTok apunta a `https://www.tiktok.com/@alewencesai`, confirmado expresamente por Ale. Instagram añade `https://www.instagram.com/alewences.artia/` con el SVG existente y el mismo botón circular de 48 px. Ambos enlaces abren sus perfiles reales, comprobados desde el pie. Los tres enlaces tienen nombres accesibles; la fila legal admite salto de línea.

Validación del formulario completo con transporte simulado **exclusivamente en un servidor QA local**:

- 20 combinaciones: ES/EN a 320×568, 360×800, 390×844, 525×827, 640×800, 768×1024, 844×390, 1024×768, 1440×900 y 1920×1080. Sin overflow horizontal, solape entre introducción y formulario, elementos fuera del panel ni iconos fuera de pantalla. Campos de 18 px y botones sociales de 48×48 px.
- Validación nativa de campos vacíos y correo incorrecto. En pendiente se desactivan los cinco controles; error recuperable conserva el borrador y el selector. El cambio a horizontal conserva los valores. El éxito simulado restaura el formulario y muestra el aviso dentro del panel. Los avisos ocupan el ancho del formulario y aumentan la altura del contenedor.
- Teclado: cambio ES/EN, tabulación entre enlaces sociales y foco visible de campos y enlaces. Selector largo probado con «Carteles de Conciertos y Gráficas para Eventos» mediante el control nativo; permanece dentro de su columna.
- Sin errores de consola durante el recorrido de contacto. Capturas `contact-desktop.jpg`, `contact-mobile-top.jpg`, `contact-mobile-bottom.jpg` y medidas `contact-layout.json` en el directorio de evidencia.
- Repetidos `npm run check:release` (14/14 tests y lint) y `npm run build`; entrada sin incremento: 402.934 bytes. Se mantienen los avisos previos de deepmerge bajo y chunk 3D. El inventario de medios original permanece intacto.

Revisión local del formulario completo: `http://127.0.0.1:5181/design#contact`. El servidor y sustituto de EmailJS viven en `/tmp/design-contact-qa-20261111/`, fuera del repositorio; no contienen credenciales ni pueden enviar correo. Un aviso visible identifica la prueba. No se incluyen en el build ni en el despliegue. El build habitual en `http://127.0.0.1:5180/design` conserva la alternativa de correo al no haber claves locales. Esta prueba acredita presentación y estados del cliente, **no entrega real de EmailJS**.

## Acceso a Servicios desde la navegación

Petición posterior de Ale: añadir acceso al portfolio de servicios. El botón «Servicios» / «Services» aparece junto a Portfolio Dev en escritorio y debajo en el menú móvil. Reutiliza `servicesUrl()`, abre `https://alewences.es/` en otra pestaña y cierra el menú móvil al activarlo. No cambia la web de servicios.

Comprobado en el build local: 1024×768 ES/EN, 1440×900 EN, 525×827, 320×568 y 844×390 ES; sin overflow horizontal ni controles fuera del ancho disponible. El menú horizontal dispone de scroll (530 px de contenido en 306 px), admite tabulación hasta ES y Escape devuelve el foco al botón. El enlace abrió la portada real de Alewences. Captura `services-menu-mobile.jpg` y medidas `services-menu-layout.json`. `check:release` y build correctos; 14 tests y entrada de 402.992 bytes. Cambios incluidos en el mismo PR de revisión, sin publicar a producción.
