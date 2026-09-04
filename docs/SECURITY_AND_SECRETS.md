# Claves, secretos y datos

No hay una API key real incluida en este ZIP.

`GEMINI_API_KEY` debe existir sólo como variable del servidor. En Google AI Studio Build se administra desde Secrets y se inyecta al runtime de servidor. Si despliegas fuera de AI Studio, configúrala en las variables del hosting.

El cliente puede recibir únicamente tokens efímeros limitados para Gemini Live. Nunca insertar la API key en HTML, JavaScript, manifest, service worker, localStorage, IndexedDB o archivos `.campo`.

Los datos de sesiones permanecen locales por defecto. Las funciones Gemini deben enviar únicamente un snapshot reducido de la sesión activa cuando el practicante invoca Gemini.
