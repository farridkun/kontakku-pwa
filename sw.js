//install proses
self.addEventListener('install', e => {
    console.log('sw telah berhasil diinstall');
})

//activate
self.addEventListener('activate', e=> {
    console.log('sw telah aktif');
})

self.addEventListener('fetch', e => {
    console.log('sw fetch event', e);
})