# Mi Campo · Edición Integral

Esta entrega consolida la línea V6 en una sola versión de trabajo.

## Cambios visuales definitivos

- Axoflutter queda visible desde el primer render mediante la imagen local del personaje; el GLB 3D se superpone solo después de renderizar correctamente.
- Se mantiene el GLB original `assets/character/axoflutter_companion.glb`.
- Inicio reconstruido con seis accesos radiales: Continuar, Historial, Biblioteca, Ajustes, Modalidades y Constructor.
- Iconografía SVG propia en los accesos principales, sin depender de emojis para la identidad visual central.
- Seis mundos con composición distinta, no únicamente recoloración:
  - Cosmos Vivo: portal, nebulosas, órbitas y cometa.
  - Aurora: corredor vertical, cintas de luz, cristales y montañas heladas.
  - Océano Astral: caústicas, rayos de profundidad, oleaje, burbujas y arrecife.
  - Bosque Esmeralda: arco vegetal, raíces, hojas y luciérnagas.
  - Templo Solar: mandala, disco solar, columnas, anillos y brasas.
  - Santuario Lunar: media luna, constelaciones, niebla y órbitas asimétricas.
- Cada mundo conserva su movimiento y paisaje sonoro propio.
- La pantalla activa de sesión mantiene una composición más limpia que Inicio.

## Funciones preservadas

Se mantienen las modalidades, sesiones, campo digital, mapa familiar/genograma, adopción, exploración intuitiva familiar/individual/energética, constructor, laboratorio, historial, biblioteca, cifrado local, exportación/importación `.campo`, voz, vibración, sonido ambiental y PWA.

## Validaciones realizadas

- Sintaxis de `app.js`, `companion3d.js` y `sw.js` validada con Node.
- `manifest.webmanifest` validado como JSON.
- Rutas locales de `index.html`, Service Worker, iconos, GLB e imagen de Axoflutter comprobadas.
- GLB presente: 289,692 bytes.
- Imagen local de respaldo presente: 838,291 bytes.

La validación visual definitiva en Safari físico debe realizarse en el iPhone después del despliegue; no se afirma una prueba física que no se realizó.
