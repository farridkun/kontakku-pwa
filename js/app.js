if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg=>console.log('sw berhasil registered',reg))
        .catch(err=>console.log('sw gagal registered',err))
}