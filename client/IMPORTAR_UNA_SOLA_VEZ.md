# Importar Mi Campo una sola vez

La idea de este paquete es evitar gastar muchas iteraciones en Google AI Studio.

## Opción recomendada: GitHub → Google AI Studio

1. Descomprime el ZIP de `Mi Campo V6` en el iPhone.
2. En Working Copy, abre tu repositorio `Mi-Campo`.
3. Sustituye el contenido del repositorio por el contenido de esta carpeta completa.
4. Haz un commit, por ejemplo:
   `Mi Campo V6 completo`.
5. Haz Push a GitHub.
6. Verifica en GitHub que aparezcan en la raíz:
   - `index.html`
   - `app.js`
   - `styles.css`
   - `companion3d.js`
   - `manifest.webmanifest`
   - `sw.js`
   - `assets/`
   - `icons/`
7. En Google AI Studio abre Build → Import from GitHub.
8. Selecciona `Mi-Campo` y la rama `main`.
9. Importa.

El modelo 3D ya está dentro de `assets/character/`, por lo que no necesitas subirlo aparte después.

## Qué no necesitas volver a pedirle a AI Studio

La carpeta ya contiene el código para:

- menú circular;
- diseño cósmico;
- representantes familiares;
- adopción;
- posturas de piezas;
- lectura simbólica;
- comparación de configuraciones;
- acompañante 3D;
- ajustes del acompañante;
- historial, cierre, integración, voz, almacenamiento y PWA.

Usa AI Studio solamente para retoques puntuales, si los quieres.


### V6 ya integrada
No necesitas pedirle a AI Studio que agregue por separado el modo claro/oscuro, animaciones, adicciones, exploraciones hipotéticas ni el nuevo modo de orígenes desconocidos por intuición: ya forman parte del código inicial de esta carpeta.
