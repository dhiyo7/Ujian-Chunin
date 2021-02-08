let CACHE_NAME = "ChuninApp";
let urlsToCache = ["/", "/completed"];

// Install a service worker
self.addEventListener("install", (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Cache and return requests
addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response; // if valid response is found in cache return it
      } else {
        return fetch(event.request) //fetch from internet
          .then(function (res) {
            return caches.open(CACHE_DYNAMIC_NAME).then(function (cache) {
              cache.put(event.request.url, res.clone()); //save the response for future
              return res; // return the fetched data
            });
          })
          .catch(function (err) {
            // fallback mechanism
            return caches
              .open(CACHE_CONTAINING_ERROR_MESSAGES)
              .then(function (cache) {
                return cache.match("/offline.html");
              });
          });
      }
    })
  );
});

// Update a service worker
self.addEventListener("activate", (event) => {
  let cacheWhitelist = ["Arc-teryx"];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
