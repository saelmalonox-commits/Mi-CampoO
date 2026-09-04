# Generador abierto de prácticas y constelaciones

## Decisión maestra
Las 12 prácticas incluidas en `shared/exercises.json` son ejemplos y semillas. No son un límite funcional ni una enumeración exhaustiva de lo que Mi Campo puede hacer.

Mi Campo debe admitir tres orígenes equivalentes de una constelación:
1. preset incluido con la app;
2. práctica creada/editada/duplicada por el practicante;
3. constelación generada dinámicamente a partir de una intención por el motor local o por Gemini.

No existe un límite hardcodeado al número de prácticas guardadas. La única limitación práctica es el almacenamiento disponible en el dispositivo/navegador. Una sesión individual sí conserva límites de legibilidad y rendimiento (hasta 24 representantes en el esquema actual), pero eso no limita cuántas prácticas pueden existir.

## Constellation Plan
Una práctica dinámica es un documento JSON validable. Contiene:
- título, modalidad, intensidad, duración;
- intención;
- representantes;
- preparación/apertura;
- preguntas de observación;
- experimentos de movimiento reversibles;
- frases simbólicas opcionales;
- reglas de ramificación;
- cierre;
- integración;
- permiso para añadir figuras intuitivas e hipótesis durante la sesión.

El contrato está en `shared/constellation-plan.schema.json`.

## Flujo de generación
TEMA/INTENCIÓN → inferir modalidad → proponer representantes → construir observación → proponer experimentos → preparar ramificaciones → cierre → integración → validar → previsualizar → iniciar o guardar.

La salida del modelo nunca modifica directamente el estado de sesión. Primero pasa por `CampoConstellationFactory.normalizePlan()` en cliente y por `sanitizeConstellationPlan()` cuando procede del backend.

## Extensibilidad durante una constelación
Una constelación generada no queda congelada. Puede:
- añadir o renombrar figuras por intuición;
- proponer otra hipótesis cuando una no resuena;
- añadir una figura para ausencia, ancestro, pérdida, recurso, límite, parte interna, proyecto, opción, energía percibida u otra imagen simbólica;
- ofrecer más observación antes de mover;
- revertir movimientos;
- continuar sin frase;
- terminar antes y cerrar;
- generar una variante y guardarla como nueva práctica.

La prioridad se mantiene: intuición del practicante → observación → hipótesis → resonancia → experimento reversible.

## Biblioteca abierta
`state.data.customPractices` guarda prácticas creadas por el usuario dentro del mismo contenedor local/cifrado de Mi Campo. Puede crecer sin un contador máximo de prácticas. Cada definición puede editarse, duplicarse, eliminarse y ejecutarse.

`state.data.generatedPlans` mantiene un historial corto de borradores generados para recuperación; no es la biblioteca definitiva.

## Gemini
`POST /api/gemini/generate-constellation` acepta un tema libre y devuelve un plan completo. Gemini no selecciona solamente una de 12 plantillas: puede crear una estructura nueva combinando recursos sistémicos, estructurales, individuales, familiares, relacionales, de decisiones, proyectos, energéticos o libres.

El generador local permanece disponible sin red.
