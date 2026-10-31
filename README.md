# La Historia de la Humanidad

Línea del tiempo de la historia de la humanidad, del Big Bang a hoy, dibujada a mano alzada. Se va rellenando poco a poco con los libros que va leyendo Ferran.

Publicada en **https://lahistoriadelahumanidad.com** (y en https://historia-humanidad.pages.dev). Es instalable como app (PWA) y funciona sin conexión.

---

## Publicación

- **Repositorio:** `ferranxavier-maker/historia-humanidad` (privado). Es la copia buena: cada versión es un commit.
- **Hosting:** Cloudflare Pages, proyecto `historia-humanidad`, por subida directa (*Create deployment* con un zip de todos los archivos de este repo). No está conectado a GitHub: un proyecto de Pages creado por subida directa no se puede conectar después.
- **Dominio:** `lahistoriadelahumanidad.com`, registrado en Cloudflare (cuenta `theironsgolfclub@gmail.com`), conectado como dominio propio del proyecto de Pages.

---

## Estructura del repo

```
historia-humanidad/
├── index.html              ← La web entera: título, línea del tiempo, eventos y fichas (todo dentro)
├── manifest.webmanifest    ← Ficha de la app instalable: nombre, iconos, colores
├── sw.js                   ← Copia offline (primero la red; sin conexión, la copia guardada)
├── icons/                  ← Iconos de la app (palabra HISTORIA del título sobre papel)
│   ├── icon-32.png         ← Pestaña del navegador
│   ├── icon-180.png        ← iPhone
│   ├── icon-192.png        ← Android / escritorio
│   ├── icon-512.png        ← Pantalla de carga
│   └── icon-512-maskable.png
└── README.md               ← Este archivo
```

Todo es estático: sin servidor ni compilación.

---

## Flujo de trabajo con Claude

- **inicio tarea** (conversación nueva): Claude clona este repo y entrega `index.html` como archivo.
- **Durante la tarea:** cada cambio se entrega como archivo HTML, versionado (v79, v80…). Cuando Ferran pregunta algo, solo se comenta; el HTML no se toca hasta que dice «dibuja».
- **publica** o **fin de tarea:** Claude hace commit y push de la última versión a este repo y la sube a Cloudflare Pages (zip con todo el contenido del repo menos README y .git).

## Actualizar sin Claude

1. Sustituir los archivos en este repo.
2. Hacer un zip con `index.html`, `manifest.webmanifest`, `sw.js` y la carpeta `icons`.
3. Cloudflare → Workers & Pages → historia-humanidad → *Create deployment* → subir el zip.
