# Mi Campo V6 · despliegue Vercel/PWA

La raíz del repositorio contiene la copia ejecutable para Vercel. La carpeta `Mi_Campo_V6_Completo_Listo_GitHub_AIStudio/` se conserva intacta como respaldo de V6.

## Ajustes técnicos aplicados
- viewport accesible para iPhone: `width=device-width, initial-scale=1, viewport-fit=cover`
- manifest con `start_url` y `scope` en `/`, modo `standalone`, orientación vertical e iconos 180/192/512
- service worker con shell cache, runtime cache, limpieza entre versiones y fallback offline de navegación
- registro del service worker con `updateViaCache: none`
- hardening táctil/scroll horizontal y tamaño mínimo de 16px en inputs móviles
- `vercel.json` para evitar cachear de forma agresiva el service worker y el manifest

## Three.js / Axoflutter
El modelo GLB se sirve localmente desde `/assets/character/axoflutter_companion.glb`. Three.js y GLTFLoader continúan cargándose desde unpkg para evitar introducir un cambio de dependencias de riesgo en esta entrega. El service worker almacena esos recursos externos en runtime cache después de una primera carga correcta; por ello el 3D puede requerir conexión en el primer uso.

## Nota de pruebas
Se realizaron validaciones automatizadas locales y de rutas. Esto no equivale a una prueba física en Safari de un iPhone real.
