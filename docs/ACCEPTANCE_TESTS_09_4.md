# Pruebas de aceptación MASTER 2026.09.4

## Inicio visual
- CAMPO y el subtítulo son visibles sin truncarse.
- Axoflutter aparece aunque Three.js no cargue.
- Historial, Continuar, Iniciar, Ajustes, Biblioteca y Modalidades son botones reales y abren el destino correcto.
- Guía Viva abre el panel de Axoflutter.
- Navegación inferior contiene Inicio, Explorar, Prácticas, Diario y Respirar.
- Perfil abre Ajustes; campana abre Novedades.

## Mundos
Para cada combinación ocean/forest/storm × dark/light:
- el fondo, movimiento y elementos ambientales son distinguibles;
- cambiar mundo no elimina datos ni reinicia la sesión;
- sonido sincronizado usa water/forest/storm;
- `prefers-reduced-motion` y Quietud reducen animación.

## Constelación completa
- Crear modalidad familiar, individual, decisión, relación, proyecto, energética y libre.
- Añadir/renombrar/eliminar representantes.
- Colocación física y campo digital.
- Registrar posición, orientación y postura.
- Observación, movimiento, comparar, deshacer, frase, cierre, integración y resumen.
- `No me resuena` descarta la interpretación activa.
- Añadir figura intuitiva durante una sesión.

## Generador abierto
- Crear plan local con un tema no presente en los 12 presets.
- Crear plan Gemini si hay API; fallback local si no la hay.
- Guardar plan como práctica, editar, duplicar, ejecutar y borrar.
- Guardar una sesión terminada como nueva práctica.

## Gemini
- `/api/health` responde sin necesidad de API key.
- Gemini texto/generador devuelven error controlado si falta API key.
- Live obtiene token sólo desde servidor.
- TTS devuelve WAV cuando Gemini está configurado.
- Comandos de voz locales: pausa, repetir, deshacer, continuar, historial, biblioteca, ajustes, océano, bosque, tormenta, claro y oscuro.

## Datos
- Autosave de sesión activa.
- Exportar/importar `.campo` conserva historial, prácticas personalizadas y configuración relevante.
- Cifrado local funciona con Web Crypto.
- Eliminar todos los datos limpia almacenamiento y fotos.

## PWA
- Manifest parsea.
- Service worker instala y precachea shell + Axoflutter.
- `index.html`, CSS, JS, iconos, GLB y fallback responden 200.
- Sin red después de una primera carga, el motor local puede abrir y continuar una sesión.

No declarar prueba física de Safari/iPhone como pasada sin realizarla en un dispositivo real.
