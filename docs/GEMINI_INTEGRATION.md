# Gemini en Mi Campo

- `GEMINI_API_KEY`: secreto servidor en AI Studio.
- Texto: `server/index.js` usa Interactions API.
- Live: `/api/gemini/live-token` crea token de un uso; el navegador conecta por WebSocket y transmite PCM.
- TTS: `/api/gemini/tts` genera audio PCM y lo envuelve en WAV.
- La integración es opcional y degradable: sin servidor/clave, la PWA local sigue funcionando.

Modelos y nombres están parametrizados por variables de entorno porque los modelos Preview cambian con el tiempo.
