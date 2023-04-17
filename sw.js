let currentPath = self.location.href.replace("/sw.js", "");

const cacheName = "cards-workout-v1"
const assets = [
  "/",
  "/index.html",
 
].map(url => currentPath + url)

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
      caches.open(cacheName).then(cache => {
          cache.addAll(assets)
      })
  )
});
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
