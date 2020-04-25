const CACHE_NAME = 'my_cache';
const urlsToCache = [
    '/map/',
    '/build/',
    '/build/itemdb.json',
    '/assets/js/common.js?1587828591736',
    '/assets/js/items_v3.js?1587828591736',
    '/assets/js/chosen.jquery.min.js?1587828591736',
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
    '/assets/css/chosen.min.css?1587828591736',
    '/assets/css/chosen-sprite.png',
    '/assets/css/chosen-sprite@2x.png',
    '/assets/css/main.css?1587828591736',
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
    console.log('[SW] ready.');
});

self.addEventListener('fetch', function(event) {
    console.log('fetch', event.request);
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Cache hit - return response
                if (response) {
                    if (response.url.endsWith('/itemdb.json')) {
                        console.log('itemdb loading detected');
                        response.clone().json().then(json => {
                            let version = json.version;
                            console.log(version);
                        });
                    }
                    return response;
                }

                return fetch(event.request).then(
                    function(response) {
                        // Check if we received a valid response
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // the itemdb is what we want to cache cuz size
                        if (response.url.endsWith('/itemdb.json')) {
                            let responseToCache = response.clone();

                            caches.open(CACHE_NAME)
                                .then(function(cache) {
                                    cache.put(event.request, responseToCache);
                                });
                        }

                        return response;
                    }
                );
            })
    );
});