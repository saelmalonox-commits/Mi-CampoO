# Mi Campo · MASTER 2026.09.4 · AI Studio Ready

Versión maestra consolidada para Google AI Studio, iPhone/PWA y despliegue Node.

## Empieza aquí
1. `AGENTS.md` — invariantes que no deben romperse.
2. `docs/AI_STUDIO_MASTER_PROMPT.md` — prompt para importar/continuar en Google AI Studio.
3. `docs/MASTER_SPEC_09_4.md` — comportamiento del producto.
4. `docs/VISUAL_TARGET.md` + `docs/references/HOME_VISUAL_TARGET.jpeg` — diseño de Inicio.
5. `docs/FUNCTIONAL_INVENTORY.md` — todo lo que ya existe.
6. `docs/GOOGLE_AI_STUDIO_SETUP.md` — configuración Gemini/secrets.
7. `docs/ACCEPTANCE_TESTS_09_4.md` — qué debe probarse antes de considerar una versión terminada.

## Código
- `client/`: PWA, interfaz, motor local, Axoflutter, mundos, prácticas, generador y bridge Gemini.
- `server/`: Node/Express y endpoints Gemini.
- `shared/`: acciones, prácticas semilla, schema de constelación, tokens visuales y capacidades.

## Ejecutar
```bash
npm install
npm run check
npm start
```
Gemini es opcional. Sin `GEMINI_API_KEY`, el motor local sigue funcionando.

No incluye ninguna clave secreta real.
