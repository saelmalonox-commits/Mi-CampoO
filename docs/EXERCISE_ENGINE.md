# MOTOR DE EJERCICIOS · MI CAMPO MASTER 2026.09.2

## Objetivo
Añadir una biblioteca de ejercicios sistémicos adaptados al uso individual con piezas físicas, papeles/anclajes y el teléfono como guía paso a paso. Los ejercicios reutilizan el motor de sesión existente; no crean un segundo sistema incompatible.

## Patrón operativo único
Cada ejercicio debe respetar esta secuencia:

1. Preparar y centrar.
2. Definir un tema/intención breve.
3. Elegir representantes editables.
4. Colocar uno por uno.
5. Observar primero qué percibe e intuye el practicante.
6. Sólo después ofrecer hipótesis simbólicas opcionales.
7. Registrar respuesta corporal/visual/verbal.
8. Probar un movimiento pequeño y reversible.
9. Comparar antes/después.
10. Probar una frase opcional, sólo si representa al usuario.
11. Cerrar y volver al presente.
12. Elegir una integración pequeña y concreta.

Nunca mostrar todos los pasos de golpe durante una sesión activa.

## Tipos de ejercicios incluidos
- Campo con anclajes.
- Emoción + contraparte + testigo.
- Lugar familiar.
- Relación con madre/padre por capas: recibido, necesitado, límite, recurso.
- Relación y límites: lo mío / lo suyo.
- Cierre de vínculo pasado.
- Objetivo / problema / solución / obstáculos / tarea futura.
- Cierre de proyecto y recuperación de aprendizajes.
- Relación simbólica con dinero y recursos.
- Adulto / parte vulnerable / cuidado / límite.
- Parte rechazada / función protectora / testigo.
- Decisión con posición observadora.

La definición exacta está en `shared/exercises.json`; la versión navegador está en `client/exercise-engine.js`.

## Metaposición / observador
Varios ejercicios incorporan una figura `Testigo` u `Observador`. Su función es permitir una vista panorámica de la escena y generar distancia respecto de una sola emoción o posición. No se presenta como una posición objetivamente superior; es otro punto de observación.

## Anclajes físicos
El usuario puede utilizar piezas de madera, papeles o tarjetas. La app conserva el mapa digital como registro opcional. El usuario puede notar postura, orientación, distancia, impulso de movimiento y cambios corporales, pero estas observaciones no se convierten automáticamente en hechos sobre otras personas o generaciones.

## Movimiento
- Debe ser lento, pequeño y reversible.
- Antes del movimiento se guarda snapshot.
- Después se pregunta: Mejor / Igual / Más incómodo / Diferente / No lo sé.
- Si empeora, se ofrece volver atrás inmediatamente.
- Nunca asumir que negarse a mover una pieza es “resistencia”.

## Frases
Las frases de la app son originales y breves. Funcionan como propuestas de observación, no como fórmulas obligatorias. Siempre existe `No me representa` y `Modificar`.

## Intensidad
`suave`: preguntas concretas, 2–6 piezas, 5–12 min.
`normal`: más posiciones internas o relacionales, 4–8 piezas, 10–20 min.
`profunda`: sólo si se diseña expresamente y con controles adicionales; no es el valor por defecto.

## Contenido no automatizado en modo solo
No convertir en ejercicio autónomo por defecto:
- confrontaciones físicas entre representantes;
- trabajo grupal que depende de múltiples personas reales;
- ejercicios de enfermedad/síntomas que atribuyen causas familiares;
- trauma, duelo intenso o recuerdos inducidos;
- instrucciones que obliguen a arrodillarse, abrazar, perdonar o reconciliarse;
- afirmaciones categóricas que conviertan “ancestro”, “muerto”, “secreto” u otro contenido en un hecho demostrado a partir de una mirada, postura o síntoma. **Sí pueden ofrecerse como asociaciones simbólicas tradicionales opcionales si el practicante las siente, las pregunta o desea explorarlas.**

Si una futura versión incluye materiales de alta intensidad, deben estar separados del catálogo solo, con requisitos explícitos de facilitación humana.

## Gemini
Gemini puede:
- seleccionar un ejercicio apropiado según el tema y la profundidad elegida;
- reformular una pregunta con lenguaje breve;
- proponer 3–8 representantes iniciales;
- elegir una pregunta siguiente basada en la respuesta;
- llamar `startExercise(id)`;
- sugerir una frase original o una variante.

Gemini no debe:
- saltarse el ciclo observación → respuesta → siguiente paso;
- afirmar que una pieza revela un hecho desconocido;
- forzar una interpretación si el usuario marca `No me resuena`.


## Intuición y asociaciones sistémicas tradicionales
La intuición del practicante tiene prioridad sobre cualquier tabla interpretativa. La app no neutraliza las asociaciones tradicionales; las usa como repertorio de hipótesis.

Ejemplos:
- Si el practicante dice que una figura **mira al suelo**, Campo puede ofrecer: “En algunas lecturas sistémicas esto puede representar simbólicamente a una persona fallecida, una pérdida o algo excluido. También podría ser simplemente peso, retiro, descanso o algo que pide atención. ¿Qué te resuena a ti?”.
- Si una figura **mira a lo lejos**, puede sugerir: “A veces se lee como una rama ancestral, alguien ausente, el futuro, algo mayor o una dirección aún no representada. ¿Tu intuición la relaciona con alguna de estas posibilidades?”.
- Si una pieza queda **acostada**, **aislada**, **entre dos** o **de espaldas**, la app puede proponer varias asociaciones y dejar que el practicante elija, renombre o descarte.

Regla de interacción: `intuición propia → descripción → 1–3 hipótesis → ¿te resuena? → experimentar o descartar`. Nunca `señal → verdad automática`.

## Motor abierto 2026.09.3
`CampoExercises` conserva los presets incluidos. `CampoConstellationFactory` añade una segunda capa que crea `ConstellationPlan` arbitrarios. La biblioteca final es la unión de presets y `state.data.customPractices`.

El número de presets no define las capacidades de la app. Los planes dinámicos usan el mismo motor de sesión, por lo que una nueva práctica no requiere una nueva pantalla ni código específico.
