/* Service worker du lanceur GEOTEC : garde la page du lanceur pour l'ouvrir sans attendre (et hors ligne).
   Les applications Apps Script ne passent pas par ici : elles viennent toujours de Google, à jour.
   Changer VERSION après une modification de index.html ou des icônes. applications.js est toujours relu sur Internet quand c'est possible. */
var VERSION = 'geotec-lanceur-2026-11-06b';
var FICHIERS = ['./', 'index.html', 'applications.js', 'manifest.webmanifest',
  'icones/logo.png', 'icones/icone-192.png', 'icones/icone-512.png', 'icones/icone-masquable-512.png', 'icones/favicon-32.png', 'icones/apple-touch-icon.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(FICHIERS); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (cles) {
    return Promise.all(cles.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  var reseauDabord = req.mode === 'navigate' || /applications\.js$/.test(new URL(req.url).pathname);
  if (reseauDabord) {
    /* page et liste des applications : version en ligne si possible, sinon la copie gardée */
    e.respondWith(fetch(req).then(function (r) {
      var copie = r.clone();
      if (r.ok) caches.open(VERSION).then(function (c) { c.put(req.mode === 'navigate' ? 'index.html' : req, copie); });
      return r;
    }).catch(function () {
      return caches.match(req.mode === 'navigate' ? 'index.html' : req, { ignoreSearch: true });
    }));
    return;
  }
  e.respondWith(caches.match(req).then(function (r) { return r || fetch(req); }));
});
