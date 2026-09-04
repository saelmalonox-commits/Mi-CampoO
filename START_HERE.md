# EMPIEZA AQUÍ

Si el proyecto se abre dentro de Google AI Studio, lee primero `AI_STUDIO_START.md`.

# EMPIEZA AQUÍ — Mi Campo MASTER 2026.09.4

Esta carpeta es la fuente maestra consolidada.

## Para Google AI Studio

1. Lee `AGENTS.md`.
2. Lee `docs/MASTER_SPEC_09_4.md`.
3. Lee `docs/VISUAL_TARGET.md` y usa `docs/references/HOME_VISUAL_TARGET.jpeg` como referencia obligatoria.
4. Lee `docs/FUNCTIONAL_INVENTORY.md` para no eliminar funciones existentes.
5. Usa `docs/AI_STUDIO_MASTER_PROMPT.md` como prompt de construcción/refactor.
6. Configura `GEMINI_API_KEY` como secreto del servidor. Nunca la escribas en `/client`.
7. Ejecuta las pruebas de `docs/ACCEPTANCE_TESTS_09_4.md`.

## Arquitectura

- `/client`: PWA iPhone-first y motor local.
- `/server`: Node/Express + Gemini.
- `/shared`: contratos de acciones, planes dinámicos, presets semilla y tokens de diseño.
- `/docs`: especificación, seguridad, pruebas, referencia visual y runbooks.

## Invariante principal

No reconstruir como demo ni reducir a un catálogo de ejercicios. El producto debe conservar el generador abierto de constelaciones, el motor local, la intuición hipotética, Axoflutter, los tres universos × claro/oscuro, almacenamiento local, PWA, historial, biblioteca, genograma, laboratorio, constructor y Gemini opcional.
