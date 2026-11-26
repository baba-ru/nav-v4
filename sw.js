const CACHE='nav-v4-shell-1';
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png']))));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
 if(e.request.mode==='navigate' && new URL(e.request.url).origin===self.location.origin)
 e.respondWith(fetch(e.request).catch(()=>caches.match('./index.html')));
});