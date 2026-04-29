const CACHE_NAME = 'cyber-vis-v1.7';
const ASSETS = [
  './index.html',
  './Vis7.html',
  './x3.html',
  './Vis2HD.html',
  './Vis3.html',
  './Vis4.html',
  './Vis4.360.html',
  './Vis5.html',
  './Vis6c.html',
  './Vis7a4.html',
  './Vis8b.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
