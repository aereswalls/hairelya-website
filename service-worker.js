self.addEventListener("install", e => {
  console.log("Service Worker installed");
  self.skipWaiting();
});

self.addEventListener("fetch", e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
