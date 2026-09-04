# AI STUDIO · EJECUTAR ESTA MASTER SIN REESCRIBIRLA

Esta carpeta es la fuente maestra de **Mi Campo**. Trabaja SOBRE el código existente.

## Primer objetivo
1. Instala dependencias con `npm install`.
2. Ejecuta `npm run check`.
3. Ejecuta `npm start` y abre la vista previa.
4. Comprueba `GET /api/health`.
5. Si el entorno de AI Studio ya expone `GEMINI_API_KEY`, prueba en este orden:
   - `POST /api/gemini/facilitate`
   - `POST /api/gemini/generate-constellation`
   - `POST /api/gemini/tts`
   - `POST /api/gemini/live-token`
6. Corrige únicamente errores reales de ejecución. NO sustituyas el proyecto por una demo nueva.

## Modelos previstos
- Texto: `gemini-3.7-flash` (estable y compatible con `models.generateContent`).
- Live: `gemini-3.1-flash-live-preview`.
- TTS: `gemini-3.1-flash-tts-preview`.

Los nombres son configurables por variables de entorno. No incrustes claves en `client/`.

## Archivos que debes leer antes de cambiar arquitectura
- `AGENTS.md`
- `START_HERE.md`
- `docs/AI_STUDIO_MASTER_PROMPT.md`
- `docs/MASTER_SPEC_09_4.md`
- `docs/VISUAL_TARGET.md`
- `docs/INTUICION_E_HIPOTESIS_SISTEMICAS.md`
- `docs/GENERADOR_ABIERTO_DE_CONSTELACIONES.md`
- `shared/constellation-plan.schema.json`
- `shared/actions.json`

## Condiciones de aceptación
- El Home se aproxima a `docs/references/HOME_VISUAL_TARGET.jpeg` mediante UI real, no una imagen plana.
- Axoflutter es visible aun si WebGL falla.
- Océano / Bosque / Tormenta y sus modos claro/oscuro no son recoloreados equivalentes.
- Las 12 prácticas son presets semilla; el generador puede crear prácticas y constelaciones nuevas sin whitelist.
- Las hipótesis sistémicas preservan la intuición del practicante y se descartan al pulsar “No me resuena”.
- El motor local sigue funcionando sin Gemini.
- PWA, historial, exportación/importación, cifrado, campo y sesiones existentes siguen funcionando.
- Antes de declarar listo, ejecutar el checklist de `docs/ACCEPTANCE_TESTS_09_4.md`.
