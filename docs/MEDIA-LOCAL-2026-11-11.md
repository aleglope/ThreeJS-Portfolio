# Medios de portfolio en local

Entrega local para AGonzL del 11 de noviembre de 2026. Incluye 15 MP4 con 15 portadas propias, ocho imágenes compartidas y 9 transcripciones en castellano. Los MP4 suman 47.57 MB. Los másteres quedan en sus archivos de origen.

| ID | Duración | Dimensiones | MP4 | Póster |
| --- | ---: | ---: | ---: | ---: |
| `champi-spot` | 30.02 s | 1280 × 720 | 9.73 MB | 37.5 kB |
| `champi-promo` | 20.01 s | 720 × 1280 | 6.05 MB | 30.4 kB |
| `champi-rotulos` | 22.92 s | 960 × 720 | 2.64 MB | 23.0 kB |
| `champi-seo` | 48.00 s | 720 × 1280 | 3.42 MB | 28.5 kB |
| `nova` | 55.02 s | 1280 × 720 | 2.68 MB | 22.3 kB |
| `stock-ia` | 44.01 s | 720 × 720 | 2.54 MB | 52.7 kB |
| `reformas-materiales` | 32.11 s | 720 × 1280 | 1.18 MB | 19.8 kB |
| `anuncios-ia` | 45.01 s | 720 × 900 | 1.82 MB | 22.1 kB |
| `asistente-voz` | 62.02 s | 1280 × 720 | 4.13 MB | 24.3 kB |
| `respuesta-clientes` | 20.01 s | 720 × 1280 | 1.20 MB | 21.3 kB |
| `datos-negocio` | 30.02 s | 720 × 1280 | 1.89 MB | 32.4 kB |
| `engram` | 55.02 s | 1280 × 720 | 1.90 MB | 24.1 kB |
| `chatbot-307` | 43.10 s | 720 × 1280 | 3.98 MB | 23.2 kB |
| `bretema` | 44.01 s | 720 × 1280 | 3.64 MB | 27.1 kB |
| `color-legibilidad` | 23.10 s | 720 × 1280 | 0.77 MB | 22.1 kB |

## Marcas y prototipos

Las ocho imágenes son copias de las fuentes del inventario. `champi-parrillada.webp` y `champi-vitrina.webp` documentan prototipos 3D. `velvet-wireframes.svg` procede del caso público redibujado de Velvet. El aviso de vacaciones queda como pieza de temporada con regreso documentado el 12 de noviembre de 2026. Los modelos de borrador y las grabaciones internas del diploma quedaron fuera del conjunto.

## Verificación

- Los derivados MP4 usan H.264 en YUV420p y AAC. Se mantienen proporción y cadencia de cada fuente. La arista corta mide 720 px y todos los archivos quedan por debajo de 12 MB decimales.
- `ffprobe` verificó códecs, cadencia, duración y proporciones. La diferencia de duración está por debajo de 0,06 s por pieza. Se comprobó que el átomo `moov` precede a `mdat` en cada MP4 y se decodificaron completamente las pistas de vídeo y audio con FFmpeg.
- Las portadas mantienen proporción y se entregan en WebP con arista larga de 960 px. Se revisaron ocho fotogramas del derivado por pieza, incluida una muestra cerca de cada extremo, y las portadas exportadas. Las portadas vienen del fotograma indicado en el manifiesto, salvo Chatbots 3:07 AM, que usa su portada editorial emparejada.
- El manifiesto registra la procedencia local, el punto de captura y la evidencia de subtítulos. Los MP4 fuente y derivados contienen dos pistas, vídeo y audio. Los subtítulos integrados permanecen en la imagen.
- Se verificó SHA-256 de las tres parejas duplicadas y las ocho imágenes de marca entre repositorios.

## Subtítulos y transcripciones

Se contrastó el audio original en castellano con reconocimiento local mediante Whisper y con los guiones, la composición o los archivos de subtítulos disponibles. El texto de rótulos de Champi procede de dos pasadas del audio final porque el proyecto archivado conserva el render y materiales gráficos. En Datos de negocio se comparó el audio de la v2 con la locución de origen. El gancho inicial y «Escríbeme DATOS» se comunican en pantalla en ese corte. Las pistas de NOVA, SEO Champi, Anuncios con IA, Asistente de voz, Engram y Chatbots 3:07 AM son música y efectos. Las demostraciones de Asistente de voz y Chatbots 3:07 AM presentan la conversación en pantalla. El contraste de audio se hizo por reconocimiento local y revisión de fuentes, con muestreo visual de los subtítulos.

- [Manifiesto de medios](portfolio-media-manifest.json)
- [Transcripciones](media-transcripts.json)
