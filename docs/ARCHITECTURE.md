# Arquitectura maestra

```text
CLIENTE IPHONE / PWA
├── app.js                    Motor local y UI funcional existente
├── experience-master.js      Escena 3 universos × 2 modos
├── companion3d.js            Axoflutter GLB + fallback
├── gemini-bridge.js          Voz/IA opcional y acciones locales
├── SecureStore               localStorage + Web Crypto
├── PhotoDB                   IndexedDB
└── Service Worker            PWA/offline

NODE SERVER (Google AI Studio)
├── /api/gemini/facilitate    Interacción textual adaptativa
├── /api/gemini/live-token    Token efímero Live
└── /api/gemini/tts           PCM Gemini → WAV

GEMINI
├── Interactions API          facilitador
├── Live API                  conversación voz
└── TTS                       narración exacta
```

La arquitectura es intencionalmente híbrida para preservar el motor probado: AI Studio puede refactorizar por módulos/React después, pero primero debe mantener equivalencia funcional.
