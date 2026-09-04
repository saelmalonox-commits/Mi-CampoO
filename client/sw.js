const VERSION = 'master-2026-09-04-visual-gemini-complete';
const SHELL_CACHE = `mi-campo-shell-${VERSION}`;
const RUNTIME_CACHE = `mi-campo-runtime-${VERSION}`;
const APP_CACHE_PREFIX = 'mi-campo-';

const SHELL = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/experience-master.js',
  '/gemini-bridge.js',
  '/exercise-engine.js',
  '/constellation-factory.js',
  '/companion3d.js',
  '/manifest.webmanifest',
  '/icons/icon.svg',
  '/icons/icon-180.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/assets/character/axoflutter_companion.glb',
  '/assets/character/axoflutter_reference.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then(cache => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key.startsWith(APP_CACHE_PREFIX) && ![SHELL_CACHE, RUNTIME_CACHE].includes(key))
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

async function cacheResponse(cacheName, request, response) {
  if (!response || (!response.ok && response.type !== 'opaque')) return response;
  try {
    const cache = await caches.open(cacheName);
    await cache.put(request, response.clone());
  } catch (_) {}
  return response;
}

async function networkFirst(request, fallback) {
  try {
    const response = await fetch(request);
    await cacheResponse(RUNTIME_CACHE, request, response);
    return response;
  } catch (_) {
    return (await caches.match(request)) || (fallback ? await caches.match(fallback) : undefined) || Response.error();
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    return await cacheResponse(RUNTIME_CACHE, request, response);
  } catch (_) {
    return Response.error();
  }
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request, '/index.html'));
    return;
  }

  if (url.origin === self.location.origin) {
    const dynamicShell = ['script', 'style', 'manifest'].includes(request.destination);
    event.respondWith(dynamicShell ? networkFirst(request) : cacheFirst(request));
    return;
  }

  // Recursos externos (Google Fonts / Three.js): funcionan por red y quedan
  // disponibles en caché después de una primera carga correcta.
  event.respondWith(networkFirst(request));
});

self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
