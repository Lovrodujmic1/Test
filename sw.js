let currentPath = self.location.href.replace("/sw.js", "");

const cacheName = "cards-workout-v1"
const assets = [
  "/",
  "/index.html",
  "/script.js"
 
].map(url => currentPath + url)

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('my-pwa-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
