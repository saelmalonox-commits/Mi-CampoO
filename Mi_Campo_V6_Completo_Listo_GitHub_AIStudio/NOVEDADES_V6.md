# Mi Campo V6 — herramientas avanzadas, voz y sonido

## Incluido

- Mapa familiar / genograma simbólico editable.
- Selección de figuras del mapa y envío directo a una constelación familiar.
- Constructor personalizado con generación local de representantes por palabras clave.
- Laboratorio del Campo para experimentar sin iniciar una sesión formal.
- Memoria local: recuerda modalidades, figuras frecuentes y lecturas descartadas en este dispositivo.
- Capas de lectura visual: orientación, distancias, grupos, centro/periferia y cambios respecto al inicio.
- Línea temporal de configuraciones con restauración de escenas.
- Exportación e importación de paquetes `.campo` con validación de estructura.
- Paisajes sonoros generativos: Silencio, Cósmico, Agua, Bosque y Profundo.
- Volumen regulable y paisaje predeterminado.
- Cada constelación puede elegir paisaje sonoro.
- Selección independiente de voz para la guía y para Axoflutter usando las voces disponibles en iOS/Safari.
- Cada constelación puede elegir narración por Guía, Axoflutter o Sin voz.
- Narración automática opcional de la instrucción principal.
- Axoflutter añade estados visuales vinculados con apertura, colocación, observación, movimiento, cierre e integración.
- Service Worker V6 con caché de shell y caché runtime para recursos ya visitados.

## Enfoque técnico

Para evitar aumentar el peso y depender de instalaciones npm en Google AI Studio, esta versión no agrega Dexie, Zod ni Workbox como paquetes externos. Las funciones equivalentes necesarias para esta arquitectura se implementan con APIs nativas: almacenamiento existente, validación de importaciones, Web Crypto y Service Worker.
