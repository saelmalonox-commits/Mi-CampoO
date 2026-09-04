# Ejecutar Mi Campo en Google AI Studio Build

## Objetivo
Importar esta MASTER completa y continuar sobre el código existente; no pedirle al agente que regenere la app desde cero.

## Importación
1. Abre Google AI Studio → Build.
2. Usa `Add files (+)` → `Import from GitHub` si ya subiste este proyecto, o carga/importa la carpeta del proyecto según la interfaz disponible.
3. Indica que es una **web app full-stack**. El frontend actual es HTML/CSS/JS y el servidor es Node/Express; puede conservarse. Si AI Studio propone migrar a React, sólo hacerlo de manera incremental y conservando rutas, datos y pruebas.
4. Pega el contenido de `AI_STUDIO_MASTER_PROMPT.md` como primera instrucción.
5. Revisa `Settings → Secrets`. AI Studio debe proporcionar `GEMINI_API_KEY` en el entorno del servidor. Nunca copies la clave dentro de `client/`.

## Variables
- `GEMINI_API_KEY`: secreto del servidor. AI Studio lo configura automáticamente cuando la app usa Gemini.
- `GEMINI_TEXT_MODEL=gemini-3.7-flash`.
- `GEMINI_LIVE_MODEL=gemini-3.1-flash-live-preview`.
- `GEMINI_TTS_MODEL=gemini-3.1-flash-tts-preview`.

## Servidor
`npm start` sirve `client/` y expone:
- `GET /api/health`
- `POST /api/gemini/generate-constellation`
- `POST /api/gemini/facilitate`
- `POST /api/gemini/live-token`
- `POST /api/gemini/tts`

## Live
El navegador solicita a nuestro servidor un token efímero de un solo uso y luego abre la conexión Live. La API key real nunca se envía al iPhone.

## Desarrollo posterior
Conecta GitHub desde Settings para sincronización bidireccional. Antes de aceptar cambios grandes, exige ejecutar `npm run check` y las pruebas de `docs/ACCEPTANCE_TESTS_09_4.md`.
