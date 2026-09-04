# Mi Campo · Edición Integral

Entrega integral consolidada de **Mi Campo** para importar de una sola vez en GitHub / Google AI Studio o desplegar como PWA estática.

## Qué ya viene integrado

- Interfaz cósmica premium con **menú circular desde Inicio**.
- 7 modalidades: Familiar, Individual, Decisiones, Relaciones, Proyectos, Simbólica y Libre.
- Modalidad Familiar ampliada con:
  - mamá, papá, hermanos y generaciones anteriores;
  - línea materna y paterna;
  - familia actual;
  - familia adoptiva;
  - familia de origen / biológica;
  - familia elegida, cuidadores, tutela y crianza;
  - representantes personalizados;
  - plantillas de relación con mamá/papá, abuelos, lugar en la familia, orígenes y adopción.
- Soporte para personas adoptadas sin obligar a usar una estructura familiar concreta.
- Estilos de apertura visuales: Neutral, Sistémico, Meditativo, Espiritual, Energético y Personalizado.
- Colocación física guiada paso a paso.
- Mapa digital con X/Y normalizados, rotación y **postura de cada pieza**:
  - de pie;
  - acostada;
  - inclinada.
- Motor local de lectura simbólica con tres niveles:
  - Interpretar esta pieza;
  - Interpretar esta relación;
  - Interpretar todo el campo.
- Comparación entre configuración inicial y actual.
- Lecturas redactadas como hipótesis posibles, con alternativas y opción “No me resuena”.
- Movimientos, comparación, deshacer y restaurar.
- Frases simbólicas, cierre e integración.
- Historial local, duplicación, eliminación y exportación JSON.
- Fotografías locales con IndexedDB.
- Lectura en voz alta, vibración y sonido ambiental opcional.
- Bloqueo local con cifrado Web Crypto.
- PWA: manifest, iconos y service worker.
- **Axoflutter 3D** ya incluido en `assets/character/axoflutter_companion.glb`.
- Compañero 3D en Inicio y mini compañero durante la sesión.
- Ajustes de presencia/calidad del compañero.

## Archivos principales

```text
Mi_Campo_EDICION_INTEGRAL/
├── index.html
├── styles.css
├── app.js
├── companion3d.js
├── manifest.webmanifest
├── sw.js
├── icons/
└── assets/
    └── character/
        ├── axoflutter_companion.glb
        └── axoflutter_reference.jpg
```

## Cómo probarlo sin Google AI Studio

Sirve la carpeta con un servidor estático:

```bash
python3 -m http.server 8080
```

Luego abre `http://localhost:8080`.

> Abrir `index.html` directamente como `file://` puede limitar service worker, módulos remotos y algunas funciones del navegador. Para pruebas reales usa un servidor HTTP/HTTPS.

## Compañero 3D

El GLB está dentro del proyecto. `companion3d.js` usa Three.js/GLTFLoader mediante import map desde `unpkg.com` para no inflar el paquete con la librería completa.

- Si hay Internet: se renderiza el GLB real.
- Si Three.js no puede cargarse: la app sigue funcionando y mantiene visible la imagen local completa de Axoflutter.
- La PWA mantiene el motor de constelaciones local aunque el 3D remoto no esté disponible.

## Importación única a Google AI Studio

Esta versión está pensada precisamente para reducir el número de cambios que tengas que pedir dentro de AI Studio: sube **todo el proyecto completo de una sola vez** a GitHub y usa `Import from GitHub`.

Lee `IMPORTAR_UNA_SOLA_VEZ.md`.

## Verificaciones realizadas

- `app.js`: sintaxis JavaScript validada con Node.
- `companion3d.js`: sintaxis JavaScript validada con Node.
- Comprobaciones estructurales del flujo V4 y presencia de funciones de intuición: realizadas.
- Manifest JSON validado.

No se afirma que haya sido probado exhaustivamente en Safari real de iPhone dentro de este entorno. Conviene hacer una última prueba visual en tu dispositivo después de importarlo/desplegarlo.


## Novedades V6
- **Orígenes desconocidos · intuitivo** para familia biológica o ancestros sin información.
- Generador de figuras hipotéticas desde sensaciones: presencia, ausencia, rama desconocida, figura ancestral, protección, recurso o algo sin nombre.
- Botón para generar tres figuras simbólicas automáticamente.
- Preguntas de observación guiadas por intuición y sensación corporal/subjetiva.
- Nueva lectura **Relato intuitivo de lo desconocido**, que crea narrativas simbólicas a partir de posiciones, posturas, distancias y palabras registradas.
- Las figuras intuitivas son editables, descartables y quedan marcadas internamente como hipotéticas.

Consulta `NOVEDADES_V6.md` para el detalle completo.

## Novedades V3
- Apariencia **Normal (aurora clara)** y **Oscuro (cosmos profundo)**, con cambio rápido desde la barra superior y Ajustes.
- Navegación con movimiento: órbitas, anillos, transiciones de pantalla y respuesta visual; niveles Suave / Expresivo / Reducido.
- Nuevas exploraciones familiares e individuales sobre **adicciones, consumo y compulsiones**.
- Nuevos temas en modo **hipotético/simbólico**: sensación de energía externa, brujería o mal de ojo, carga/ambiente pesado, miedo a influencias externas y límites/protección simbólica.
- Las lecturas de estos temas pueden ser imaginativas y traducir postura, orientación, distancia y movimientos, manteniendo la formulación como hipótesis simbólica en vez de afirmar una causa externa.


## Ajuste adicional V5

- Se extendió el modo intuitivo a constelaciones individuales y energéticas.
- La modalidad energética ahora tiene pantalla propia de entrada y presets específicos.
- El generador intuitivo adapta sugerencias, textos y figuras según el tipo de constelación.


## V6 · herramientas avanzadas

Esta versión integra, sin requerir un backend, mapa familiar editable, constructor personalizado, Laboratorio del Campo, memoria local de uso, capas visuales, línea temporal de configuraciones, exportación/importación `.campo`, voz seleccionable y paisajes sonoros generativos.

La implementación usa APIs nativas del navegador (IndexedDB existente, localStorage/Web Crypto, Speech Synthesis, Web Audio y Service Worker) para mantener la app ligera y reducir dependencias externas.


## MASTER 2026.09.2
Las asociaciones sistémicas tradicionales se ofrecen como hipótesis opcionales guiadas por la intuición del practicante. Ver `../docs/INTUICION_E_HIPOTESIS_SISTEMICAS.md`.


## Generador de constelaciones
`constellation-factory.js` convierte una intención libre en un plan completo y validable. `exercise-engine.js` aporta presets, no una whitelist. La biblioteca combina presets y prácticas personalizadas.
