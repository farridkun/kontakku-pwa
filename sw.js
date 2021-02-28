const staticCaches = 'static-cache'
const dynamicCache = 'dynamic-cache'
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/ui.js',
    '/js/materialize.min.js',
    '/css/materialize.min.css',
    'https://fonts.googleapis.com/icon?family=Material+Icons'
]

//install proses
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(staticCaches).then(cache => {
            cache.addAll(assets)
        })
    )
})

//activate
self.addEventListener('activate', e=> {
    console.log('activate');
})

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(staticRes => {
            return staticRes || fetch(e.request).then(dynamicRes => {
                return caches.open(dynamicCache).then(cache => {
                    cache.put(e.request.url, dynamicRes.clone())
                    return dynamicRes
                })
            })
        })
    )
})