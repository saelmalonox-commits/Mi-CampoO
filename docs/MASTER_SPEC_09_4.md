# Mi Campo · MASTER 2026.09.4

## Propósito
Aplicación privada, mobile-first y PWA para guiar constelaciones físicas con piezas sobre una mesa. El iPhone acompaña paso a paso; no reemplaza las piezas.

## Principio de interacción
Nunca entregar toda la constelación durante una sesión. Trabajar mediante:

`OBSERVACIÓN → RESPUESTA DEL PRACTICANTE → SIGUIENTE PASO`

El plan completo existe internamente, pero el usuario recibe una sola acción principal por pantalla. Debe poder repetir, pausar, retroceder y cerrar.

## Motor de interpretación
Las asociaciones sistémicas, espirituales y energéticas pueden usarse como hipótesis ricas. Ejemplos: una mirada al suelo puede evocar pérdida, fallecido, ausencia, peso o exclusión; una orientación lejana puede evocar ancestro, rama, futuro, destino o algo mayor. La app pregunta primero qué sugiere al practicante, ofrece alternativas y conserva sólo aquello que resuena.

No convertir una configuración simbólica en una prueba objetiva de hechos desconocidos. Esto no reduce el valor de la intuición: permite explorarla sin clausurarla.

## Constelaciones sin catálogo cerrado
Las 12 prácticas son semillas. La app puede construir planes nuevos, añadir representantes durante el proceso y guardar estructuras emergentes como prácticas reutilizables. El generador admite cualquier combinación de personas, partes internas, relaciones, proyectos, objetivos, opciones, recursos, energías, presencias, ausencias o figuras intuitivas.

## Escenas visuales
El Inicio sigue `VISUAL_TARGET.md`. Las escenas cambian con el universo:
- Océano Abismal / Mares Alba.
- Bosque de Luciérnagas / Bosque del Amanecer.
- Tormenta Cósmica / Aurora Radiante.

La función es idéntica entre mundos; cambia la experiencia sensorial.

## Arquitectura
`client/` contiene UI, motor local, PWA, Axoflutter, campo y almacenamiento.
`server/` contiene Gemini y secretos.
`shared/` contiene contratos de planes, acciones y diseño.
`docs/` contiene fuente de verdad y pruebas.

Gemini nunca es un requisito para completar una sesión: el generador y facilitador local son el fallback.
