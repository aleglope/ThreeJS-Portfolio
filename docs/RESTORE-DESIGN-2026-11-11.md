# Restauración de Diseño — 11 noviembre 2026

Ale rechazó expresamente la ampliación de Diseño: se había cambiado su distribución por áreas y añadido vídeos y fichas web que no correspondían. Los controles técnicos anteriores no acreditaban aceptación del diseño ni autorización del material. Esta restauración se limita a aglwences.dev/design. Alewences.es queda intacta en 0e86fab.

La referencia es el commit publicado anterior a la ampliación: 2292e2ef3954c0aac9788d6be14783d6faf80061.

Se recuperan el hero y su escena, la navegación, las cuatro fichas originales, filtros, galerías, estilos, traducciones, ocho vídeos de la selección y trece vídeos de las fichas. Se retiran las fichas Champi/Velvet añadidas a Diseño y toda la carpeta public/media/portfolio de esta publicación. Los enlaces antiguos a esas dos fichas vuelven a /design; Desarrollo conserva sus trabajos y enlaza el caso Velvet de alewences.es.

Se mantienen la infraestructura CI, dependencias actualizadas y correcciones de runtime ajenas al diseño. El import de ReactPlayer conserva su entrada lazy para evitar la regresión del build; una miniatura original inexistente usa la miniatura del mismo vídeo de YouTube. No se añade material audiovisual nuevo. El formulario compartido conserva las protecciones de envío; el footer de Diseño recupera su presentación original.

La prueba de inventario contrasta los IDs, rutas, URLs de vídeo, categorías y galerías contra una extracción de 2292e2e. Otra prueba exige que los medios retirados no se incluyan en public. La comprobación del paquete limita la entrada general de la app; el hero 3D original vuelve a cargar sus dependencias propias conforme a la restauración solicitada.

Verificación local: 14 pruebas, lint, auditoría sin altas/críticas y build correctos. Navegador compilado: categorías y títulos originales ES/EN, detalle gráfico, galerías y vídeo YouTube; ficha a 390 px sin desbordamiento horizontal. No se ha enviado correo de prueba. La publicación se realiza mediante un nuevo PR de reversión parcial, conservando el historial.
