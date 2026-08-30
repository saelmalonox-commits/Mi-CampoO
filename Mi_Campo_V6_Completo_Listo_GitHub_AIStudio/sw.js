const CACHE = 'mi-campo-shell-v6';
const RUNTIME = 'mi-campo-runtime-v6';
const SHELL = [
  './','./index.html','./styles.css','./app.js','./companion3d.js','./manifest.webmanifest',
  './icons/icon.svg','./icons/icon-180.png','./icons/icon-192.png','./icons/icon-512.png',
  './assets/character/axoflutter_companion.glb'
];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k=>![CACHE,RUNTIME].includes(k)).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch', e => {
  if(e.request.method!=='GET') return;
  const url=new URL(e.request.url);
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(RUNTIME).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));
    return;
  }
  if(url.origin===self.location.origin){
    e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{if(r&&r.ok){const copy=r.clone();caches.open(RUNTIME).then(c=>c.put(e.request,copy))}return r})));
    return;
  }
  e.respondWith(caches.match(e.request).then(cached=>{const network=fetch(e.request).then(r=>{if(r&&(r.ok||r.type==='opaque')){const copy=r.clone();caches.open(RUNTIME).then(c=>c.put(e.request,copy))}return r}).catch(()=>cached);return cached||network}));
});
