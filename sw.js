// Funcionamiento sin conexión: la página se sirve desde la red si hay internet
// (así siempre se ve la última versión) y, si no, desde la copia guardada.
const CACHE = "historia-v20";
const BASICOS = ["/", "/index.html", "/manifest.webmanifest", "/icons/icon-192.png", "/icons/icon-512.png", "/icons/icon-32.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASICOS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Tipografías de Google: primero la copia guardada (no cambian)
  if (url.hostname.endsWith("fonts.googleapis.com") || url.hostname.endsWith("fonts.gstatic.com")){
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => {
      const copia = res.clone(); caches.open(CACHE).then(c => c.put(req, copia)); return res;
    })));
    return;
  }
  if (url.origin !== location.origin) return;
  // Lo demás: primero la red y, si falla, la copia guardada
  // «no-cache»: pregunta siempre al servidor si hay versión nueva (GitHub Pages deja la página
  // 10 minutos en la caché del navegador y, sin esto, se seguía viendo la versión anterior)
  e.respondWith(fetch(req, { cache: "no-cache" }).then(res => {
    const copia = res.clone(); caches.open(CACHE).then(c => c.put(req, copia)); return res;
  }).catch(() => caches.match(req).then(r => r || caches.match("/index.html"))));
});
