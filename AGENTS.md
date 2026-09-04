# MI CAMPO · REGLAS MAESTRAS PARA CUALQUIER AGENTE

Este repositorio es la fuente de verdad de Mi Campo. No reconstruir desde cero y no sustituir el motor existente por una demo.

## Invariantes
1. Mantener funcionales todas las rutas y datos existentes: constelaciones, historial, biblioteca, genograma, laboratorio, constructor, prácticas, exportación/importación `.campo`, privacidad local, PWA, voz, sonidos y Axoflutter.
2. `shared/exercises.json` contiene prácticas semilla; NO es una whitelist. El usuario y Gemini pueden crear nuevas prácticas y constelaciones completas mediante `constellation-factory.js`.
3. La secuencia del facilitador es OBSERVACIÓN → RESPUESTA → SIGUIENTE PASO. No entregar una constelación completa de una sola vez durante la ejecución.
4. Las hipótesis sistémicas e intuitivas se pueden ofrecer con riqueza simbólica. Deben presentarse como posibilidades que el practicante puede aceptar, modificar o descartar. `No me resuena` elimina la hipótesis activa.
5. No convertir señales espaciales en hechos históricos comprobados. Sí conservar asociaciones sistémicas como escenarios hipotéticos y experimentables.
6. Axoflutter debe ser visible. Si Three.js/WebGL o el GLB fallan, usar `assets/character/axoflutter_reference.jpg` sin dejar un hueco vacío.
7. El Inicio debe respetar `docs/references/HOME_VISUAL_TARGET.jpeg` y `shared/design-tokens.json`. No aplanar el diseño a tarjetas genéricas.
8. Los tres universos —Océano, Bosque y Tormenta— tienen modo claro y oscuro y deben sentirse escénicamente distintos, no sólo recoloreados.
9. Gemini es opcional. El motor local debe seguir funcionando sin red ni API.
10. Nunca incluir `GEMINI_API_KEY` en código cliente. AI Studio la provee como secreto del servidor.

Antes de modificar arquitectura o eliminar una función, revisar `docs/MASTER_SPEC_09_4.md`, `docs/FUNCTIONAL_INVENTORY.md` y `docs/ACCEPTANCE_TESTS_09_4.md`.
