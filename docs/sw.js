const CACHE_NAME = "docs-cache-v1";
const urlsToCache = [
  "/index.html",
  "/info.html",
  "/testing.html",
  "/style.css",
  "/info.css",
  "/testing.css",
  "/index.js",
  "/info.js",
  "/firebase.js",
  // Add other assets as needed
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
