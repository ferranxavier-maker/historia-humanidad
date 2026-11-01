# Archivo – versión anterior de La Historia de la Humanidad

Guardado el 1 de noviembre de 2026, antes de empezar la web de cero.

- **Web completa tal cual estaba:** en esta misma rama `archivo` (index.html, sw.js, manifest e iconos en la raíz) y en el commit `ccdea34`.
- **Esta carpeta** tiene lo aprovechable sacado del index.html en archivos sueltos.

## Contenido

- `imagenes/`
  - `corcho.webp` – tablón de corcho de grano grande (textura real que se repite).
  - `papel.webp` – hoja de papel poco arrugada.
  - `chincheta.webp` – chincheta (recortada de una imagen de GPT).
  - `cinta1.webp` … `cinta6.webp` – seis cintas de carrocero reales (PNG de Ferran pasados a webp).
  - `foto-la-piedad.webp`, `foto-el-david.webp`, `foto-capilla-sixtina.webp`, `foto-capilla-sixtina-2.webp`, `foto-juicio-final.webp` – fotos de Wikimedia Commons de la ficha de Miguel Ángel.
- `datos/eventos.js` – el array `EVENTOS` completo (90 entradas): periodos, personajes, inventos, pirámides, libros, guerras, hitos… con resumen y apartados de cada ficha. Las fotos apuntan a `imagenes/…`.
- Las caras de los personajes, los iconos dibujados a mano (pirámide, pirámide escalonada, túmulo, bombilla, imprenta, cohete, libros…) y las banderas están como código canvas dentro del index.html de esta rama.

## Reglas de contenido que pidió Ferran

- Personajes: si se sabe cuándo nació, la raya es su vida y se pone la edad que vivió, no el reinado.
- Faraones: solo Narmer, Zoser, Keops, Mentuhotep II, Senusret III, Ahmose I, Hatshepsut, Tutmosis III, Akenatón, Tutankamón, Ramsés II y Cleopatra.
- Sin dictadores sudamericanos salvo Fidel Castro.
- Fechas dudosas: «c.» y decirlo en la ficha; no inventar datos.

## Estilo de las fichas («quiero saber más»)

- Hoja de papel (textura real, poco arrugada) clavada con chincheta sobre tablón de corcho. Proporción A4 (aspect-ratio 210/297), se alarga si no cabe.
- Subtítulos con fluorescente a mano de una pasada; el título, de dos o tres pasadas (SVG).
- Fotos con aspecto antiguo (borde crema irregular, sepia, viñeta), dos cintas distintas por foto elegidas por hash del apartado; el crédito o enlace a Wikipedia al pulsar la foto.

## Lo que falló con la publicación anterior

- Estaba en Cloudflare Pages (proyecto `historia-humanidad`) con el dominio `lahistoriadelahumanidad.com` en DNS de Cloudflare **con proxy (nube naranja)**.
- Desde la conexión de Ferran el dominio daba ERR_CONNECTION_TIMED_OUT, mientras que los mismos archivos cargaban en 0,3–0,6 s en `historia-humanidad.pages.dev` y `actual.historia-humanidad.pages.dev`. La causa exacta no se averiguó.
- Sus otras webs (theironcapi.com, theironsgolfclub.com) van en GitHub Pages con DNS de Cloudflare **sin proxy** y funcionan.
