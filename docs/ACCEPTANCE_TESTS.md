# Pruebas de aceptación

## P0 · No regresiones
- Abrir Inicio sin error JS.
- Crear sesión de cada una de las 7 modalidades.
- Familiar: preset normal, adopción y modo intuitivo de origen desconocido.
- Individual intuitiva y Energética intuitiva.
- Preparación completa → apertura → colocación física/digital → observación → movimiento → frase → cierre → integración → resumen.
- Arrastrar pieza, rotar, cambiar postura, guardar posición.
- Deshacer movimiento y comparar con inicio.
- Interpretar pieza, relación y campo; descartar lectura que no resuena.
- Pausar/reanudar/cerrar.
- Historial, detalle, duplicar, borrar.
- Genograma → iniciar sesión con selección.
- Constructor y Laboratorio.
- Exportar `.campo`, borrar estado en entorno de prueba, importar y recuperar.
- Cifrado local con PIN: bloquear/desbloquear y persistencia.

## P0 · PWA/iPhone
- `manifest.webmanifest`, iconos y `sw.js` responden 200.
- Sin `user-scalable=no`; `viewport-fit=cover`.
- Safe areas superior/inferior.
- Teclado no tapa acción primaria.
- Home Screen standalone conserva navegación.

## P1 · Universos
Para cada combinación ocean/forest/storm × dark/light:
- fondo, partículas, menú y respuesta táctil son visualmente distinguibles;
- cambio sin reload y con transición aproximada de 2 s;
- sesión activa reduce intensidad;
- Axoflutter visible como imagen fallback aunque WebGL falle.

## P1 · Audio
- ambiente Océano, Bosque y Tormenta se distingue.
- cambio de mundo sincroniza paisaje si el ajuste está activo.
- TTS Gemini reproduce WAV cuando servidor tiene clave.
- sin clave, motor local y speechSynthesis siguen utilizables.

## P1 · Live
- servidor entrega token efímero, nunca API key.
- permiso de micrófono se pide sólo al activar Live.
- transcripción de "pausa", "repite", "deshacer", "océano/bosque/tormenta", "claro/oscuro" ejecuta acción allowlisted.
- detener Live libera micrófono y AudioContext.

## Declaración de pruebas
No marcar Safari/iPhone físico como probado si sólo se verificó en entorno de escritorio/emulador.


## Intuición e hipótesis sistémicas
- [ ] Al indicar “esta pieza parece mirar al suelo”, la app puede ofrecer muerte/pérdida/ausencia/exclusión como **una** posibilidad junto a alternativas no históricas.
- [ ] Al indicar “mira a lo lejos”, puede ofrecer ancestro/rama ancestral como **una** posibilidad junto a ausencia, futuro, algo mayor o simple distancia.
- [ ] Antes de sugerir, pregunta o incorpora lo que el practicante percibe.
- [ ] `No me resuena` descarta la lectura sin insistir.
- [ ] `Otra interpretación` produce una hipótesis diferente.
- [ ] `Añadir figura intuitiva` permite materializar la hipótesis como pieza editable sin convertirla en un hecho.

## Generador abierto
- [ ] La Biblioteca muestra las 12 prácticas semilla sin presentarlas como catálogo completo.
- [ ] "Generar una constelación completa" acepta un tema que no exista en ninguna plantilla.
- [ ] El generador local crea un plan válido sin red.
- [ ] Gemini puede devolver un plan válido por `/api/gemini/generate-constellation`.
- [ ] Un plan inválido de Gemini no entra directamente al estado; se normaliza/valida.
- [ ] El plan generado puede iniciarse sin guardarlo.
- [ ] El plan generado puede guardarse y reaparece en Biblioteca tras recargar.
- [ ] Una práctica personalizada puede editarse, duplicarse y eliminarse.
- [ ] Duplicar una práctica crea un ID distinto.
- [ ] Eliminar una práctica no elimina las sesiones históricas creadas con ella.
- [ ] No existe un límite fijo de 12, 20, 50 o 100 prácticas personalizadas en el código.
- [ ] Una constelación generada admite figuras intuitivas añadidas durante la sesión.
- [ ] Preguntas, movimientos, frases, cierre e integración del plan se muestran en el flujo real.
- [ ] Si Gemini falla, se ofrece automáticamente el plan local y la sesión sigue siendo utilizable.
