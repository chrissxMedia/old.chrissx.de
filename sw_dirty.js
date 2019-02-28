self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('chrissx.ga').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/style/dark.css',
       '/manifest.json',
       '/favicon.ico',
       '/logo/4000.png',
       '/logo/4096.png',
       '/logo/256.ico',
       '/logo/256t.ico',
       '/sw_init.js',
       '/index.js',
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);
 event.respondWith(
  caches.match(event.request).then(function(response) {
   return response || fetch(event.request);
  })
 );
});
