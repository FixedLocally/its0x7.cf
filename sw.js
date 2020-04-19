const CACHE_NAME = 'my_cache';
const urlsToCache = [
    '/map/',
    '/build/',
    '/build/itemdb.json',
    '/assets/js/common.js',
    '/assets/js/items_v3.js',
    '/assets/img/icons/build.png',
    '/assets/img/powders/air0.png',
    '/assets/img/powders/air1.png',
    '/assets/img/powders/earth0.png',
    '/assets/img/powders/earth1.png',
    '/assets/img/powders/fire0.png',
    '/assets/img/powders/fire1.png',
    '/assets/img/powders/thunder0.png',
    '/assets/img/powders/thunder1.png',
    '/assets/img/powders/water0.png',
    '/assets/img/powders/water1.png',
    '/assets/img/powders/empty.png',
    '/assets/css/chosen.min.css',
    '/assets/css/chosen-sprite.png',
    '/assets/css/chosen-sprite@2x.png',
    '/assets/css/main.css',
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                // yo cache the whole site
                // jk map won't work offline
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }

                return fetch(event.request).then(
                    function(response) {
                        // Check if we received a valid response
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // IMPORTANT: Clone the response. A response is a stream
                        // and because we want the browser to consume the response
                        // as well as the cache consuming the response, we need
                        // to clone it so we have two streams.
                        let responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(function(cache) {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});