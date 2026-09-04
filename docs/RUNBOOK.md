# Runbook

## Local / cualquier Node 20+
```bash
cp .env.example .env
# añade GEMINI_API_KEY sólo si quieres probar Gemini
npm install
npm run check
npm start
```
Abrir `http://localhost:3000`.

## Sin Gemini
Deja `GEMINI_API_KEY` vacía. La app debe seguir abriendo, creando constelaciones, guardando sesiones, interpretando localmente, ejecutando prácticas y usando la voz de iOS.

## Con Gemini
Configura el secreto y prueba `/api/health`, generar constelación, TTS y Live. El navegador solicitará permiso de micrófono sólo al iniciar Live.

## Entrega iPhone
Usa HTTPS. Abre en Safari y añade a pantalla de inicio para probar standalone, safe areas, audio, micrófono, IndexedDB y service worker.
