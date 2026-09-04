# MEGAPROMPT · IMPORTAR MI CAMPO MASTER EN GOOGLE AI STUDIO

ACTÚA COMO ARQUITECTO SENIOR FULL-STACK, UX/UI MOBILE-FIRST PARA IPHONE Y ESPECIALISTA EN GEMINI LIVE/AUDIO.

Vas a trabajar sobre el repositorio existente **Mi Campo MASTER**. NO reconstruyas desde cero. Antes de editar, lee `README.md`, `docs/MASTER_SPEC.md`, `docs/ARCHITECTURE.md`, `shared/actions.json` y el código de `client/app.js`.

OBJETIVO: convertir esta fuente maestra en una app web full-stack mantenible dentro de Google AI Studio sin perder ninguna funcionalidad existente.

REGLAS INVIOLABLES:
1. No elimines funcionalidades del motor local para simplificar la implementación.
2. El flujo local debe funcionar sin Gemini/red.
3. Conserva compatibilidad de datos (`mi-campo.data.v1`, `.campo`, IndexedDB, Web Crypto) o implementa migración explícita.
4. Mantén iPhone-first, vertical, safe areas, touch targets grandes y una acción principal por pantalla durante sesión.
5. Mantén Axoflutter con GLB y fallback de imagen visible desde el primer frame.
6. Implementa 3 universos reales × claro/oscuro. No los reduzcas a skins/recoloreados: Océano usa navegación orbital acuática; Bosque usa composición de árbol/ramas; Tormenta usa órbitas planetarias/energéticas.
7. La intensidad escénica baja automáticamente en una sesión activa.
8. Gemini es opcional. La `GEMINI_API_KEY` vive sólo en servidor. Live usa token efímero.
9. No expongas secretos en cliente.
10. Antes de declarar listo, ejecuta verificaciones y enumera qué pruebas sí realizaste y cuáles requieren iPhone físico.

GEMINI:
- Facilitador: usa Gemini mediante `models.generateContent` desde el servidor para respuestas adaptativas cortas y JSON validado. Envía sólo contexto mínimo de sesión.
- Gemini Live: voz bidireccional con interrupciones y transcripción; token efímero desde servidor.
- Gemini TTS: narración exacta; estilo vocal por universo/modo.
- Function/actions: mantén un allowlist equivalente a `shared/actions.json`. Nunca ejecutes una acción que no esté en ese contrato.

MIGRACIÓN RECOMENDADA:
FASE 1: hacer correr el proyecto exactamente como está, con backend Node y PWA.
FASE 2: separar gradualmente `client/app.js` en módulos TypeScript SIN cambiar comportamiento.
FASE 3: si conviene React, envolver primero el motor existente y migrar pantalla por pantalla con pruebas de equivalencia; no hacer big-bang rewrite.
FASE 4: completar escenas 3D/sonido/Live y optimización iPhone.

ACEPTACIÓN VISUAL:
- Océano oscuro/claro son escenas distintas.
- Bosque oscuro/claro son escenas distintas y el menú se percibe orgánico/arbóreo.
- Tormenta oscuro/claro son escenas distintas y el menú se percibe orbital/energético.
- Axoflutter es protagonista en Inicio y discreto durante sesión.
- Cambio de universo ~2 s sin recarga.

ACEPTACIÓN FUNCIONAL:
Ejecuta el checklist completo de `docs/ACCEPTANCE_TESTS.md`.

# EXTENSIÓN OBLIGATORIA · MOTOR DE EJERCICIOS 2026.09.1

Antes de modificar la sección Prácticas, lee:
- `shared/exercises.json`
- `docs/EXERCISE_ENGINE.md`
- `docs/SOURCE_MATERIAL_ADAPTATION.md`

Debes preservar y completar el motor de ejercicios añadido a la MASTER.

REQUISITOS:
1. `shared/exercises.json` es la fuente de verdad del catálogo de ejercicios.
2. Cada ejercicio crea una sesión normal compatible con historial, `.campo`, voz, Gemini, PWA, cifrado y mapa digital.
3. Usa una acción principal por pantalla y el ciclo OBSERVACIÓN → RESPUESTA → SIGUIENTE PASO.
4. El usuario puede editar los representantes antes de empezar.
5. Las preguntas definidas en `exerciseProtocol.observationQuestions` tienen prioridad sobre las preguntas genéricas.
6. `Testigo` y `Observador` son posiciones de perspectiva, no autoridades que “saben la verdad”.
7. Un movimiento es siempre un experimento reversible; guarda snapshot antes/después.
8. No copies literalmente los PDFs de referencia ni reconstruyas guiones protegidos. Usa los patrones funcionales ya sintetizados en la MASTER y redacta contenido propio.
9. Conserva asociaciones sistémicas tradicionales como repertorio de **sugerencias hipotéticas**: “mirar al suelo” puede proponer muerte/pérdida/ausencia/exclusión simbólica; “mirar lejos” puede proponer ancestro/rama ancestral/ausencia/futuro/algo mayor. Pregunta primero por la intuición del practicante, ofrece varias posibilidades y pregunta “¿Te resuena?”. Nunca las conviertas en hechos demostrados ni en la única lectura.
10. El orden de lectura es: intuición del practicante → observación descriptiva → hipótesis simbólicas → resonancia → experimento reversible. Si el usuario pulsa `No me resuena`, descarta esa hipótesis sin insistir.
11. No elimines ejercicios porque Gemini pueda generarlos: el catálogo local debe funcionar completamente sin IA.
12. Gemini puede recomendar y arrancar un ejercicio mediante `startExercise(id)`, pero nunca debe saltar etapas ni resolver toda la constelación de una vez.
13. Durante ejercicios activos, reduce 30–50 % la intensidad visual de los mundos, igual que en las demás sesiones.

CRITERIO DE ACEPTACIÓN:
- abrir Prácticas muestra al menos 12 ejercicios locales;
- tocar uno crea una sesión con `exerciseId`, `exerciseProtocol`, intención, duración y representantes correctos;
- preguntas personalizadas aparecen durante Observación;
- cerrar la sesión la guarda normalmente en Historial;
- exportar/importar `.campo` conserva `exerciseId` y `exerciseProtocol`;
- funciona offline después de una primera instalación PWA.

### REQUISITO INVIOLABLE: GENERADOR ABIERTO
No conviertas `shared/exercises.json` en una whitelist. Sus 12 ejercicios son ejemplos iniciales. La aplicación DEBE permitir crear nuevas prácticas y constelaciones completas en tiempo de ejecución sin modificar el código fuente.

Usa `shared/constellation-plan.schema.json`, `client/constellation-factory.js` y `/api/gemini/generate-constellation` como contrato. El modelo debe poder construir representantes, preguntas, movimientos, frases opcionales, ramificaciones, cierre e integración a partir de una intención nueva. Valida siempre la salida del modelo antes de modificar estado.

No introduzcas un límite fijo de cantidad de prácticas. La biblioteca personalizada vive en almacenamiento local/cifrado y sólo está limitada por la capacidad real del dispositivo. Mantén el generador local offline como fallback cuando Gemini no esté disponible.

Una constelación generada debe seguir siendo abierta: el usuario puede añadir figuras por intuición, renombrarlas, descartar hipótesis, pedir otra lectura, deshacer movimientos, continuar sin frase o cerrar antes. No congeles una sesión a la plantilla generada inicialmente.
