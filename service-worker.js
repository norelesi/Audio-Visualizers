const CACHE_NAME = 'neural-hub-v1';
const ASSETS = [
  './index.html',
  './Vis7.html',
  './x3.html',
  './Vis2HD.html',
  './Vis3.html',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
