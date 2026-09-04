# FUENTE DE VERDAD · MI CAMPO MASTER

## Producto
Aplicación privada, iPhone-first, para acompañar constelaciones físicas con piezas sobre una mesa. El teléfono guía paso a paso y registra el campo digital; no sustituye las piezas.

## Principio operativo
Nunca entregar toda la sesión de una vez. Ciclo: **OBSERVACIÓN → RESPUESTA DEL USUARIO → SIGUIENTE PASO**. Una acción principal por pantalla durante sesión. Pausa siempre accesible.

## Funcionalidad maestra
1. Home inmersivo; Nueva constelación; Historial; Biblioteca; Ajustes; Privacidad; Genograma; Constructor; Laboratorio.
2. Modalidades: Familiar, Individual, Decisiones, Relaciones, Proyectos, Energética/Simbólica, Libre.
3. Asistente de preparación: modalidad, tema, intención, profundidad, duración, número de piezas, preparación, mundo/voz/ambiente.
4. Familiar: origen, adoptiva, ambas, elegida, cuidadores, estructuras no convencionales, desconocidos y figuras intuitivas.
5. Individual/Energética: presets + figuras intuitivas sin nombre previo.
6. Campo: x/y normalizado, rotación, postura, distancia, agrupación, aislamiento; interpretación por pieza, relación y campo.
7. Movimientos: snapshot antes/después, evaluación, undo y comparación con inicio.
8. Frases simbólicas, cierre progresivo, integración, acción cotidiana y resumen.
9. Datos: localStorage/IndexedDB, fotos locales, cifrado Web Crypto opcional, export/import `.campo`, borrar todo.
10. Voz local/TTS; Gemini opcional; Gemini nunca bloquea el motor local.

## Tres universos × dos modos
### Océano Cósmico
Oscuro = Océano Abismal: aguas profundas, nebulosas, burbujas, cristales, estrellas marinas, ballena/sirena etéreas; menú orbital de vidrio; movimiento acuático lento; voz calmada.
Claro = Mares Alba: turquesa, rayos solares, peces, coral, partículas doradas y caballitos; movimiento más alegre; voz clara y luminosa.

### Bosque Elemental
Oscuro = Bosque de Luciérnagas: árbol/ramas como estructura del menú, luciérnagas, esporas, hojas, fauna, luna; botones como frutos/flores; voz cálida/terrena.
Claro = Bosque del Amanecer: rayos, mariposas, pétalos, pájaros, polen; colores vivos; voz cálida y animada.

### Tormenta Estelar
Oscuro = Tormenta Cósmica: nebulosas turbulentas, auroras, cometas, descargas suaves; menú planetario multi-órbita; voz nítida/dinámica.
Claro = Aurora Radiante: cielo azul, nubes, auroras pastel, cometas dorados, partículas de energía; voz brillante y entusiasta.

## Axoflutter
Misma criatura en todos los mundos. GLB: `client/assets/character/axoflutter_companion.glb`; fallback inmediato: `axoflutter_reference.jpg`. Océano: deriva lenta/burbujas; Bosque: vuelo orgánico/esporas; Tormenta: aceleraciones/chispas. Al hablar: reacción visual; al escuchar: estado atento.

## Intensidad UX
Inicio/Explorar/Biblioteca: máxima riqueza escénica. Sesión activa: 30–50 % menos intensidad para mantener legibilidad y control con una mano.

## Gemini
- Facilitador opcional: recibe sólo el contexto necesario y devuelve una respuesta breve + acción opcional.
- Live: conversación de voz en tiempo real con token efímero.
- TTS: instrucciones exactas con estilo vocal dependiente de mundo/modo.
- Acciones locales por voz: continuar, pausar, repetir, deshacer, colocación, navegación, mundo/modo.

## Invariantes
- No borrar funcionalidades existentes para “simplificar”.
- No convertir la app en landing/dashboard desktop.
- No obligar conexión o IA para una sesión local.
- No romper `.campo` existente; migrar claves antiguas de mundos a los nuevos.

## Motor de ejercicios sistémicos · 2026.09.1
La MASTER incorpora `shared/exercises.json` y `client/exercise-engine.js` con un catálogo inicial de 12 prácticas adaptadas al uso individual con piezas, papeles y anclajes. No son un módulo separado: crean sesiones normales de Mi Campo y reutilizan apertura, colocación, observación, movimiento, frases, cierre e integración.

Principios añadidos:
- ejercicios seleccionables desde Prácticas/Biblioteca;
- representantes editables;
- preguntas de observación específicas por ejercicio;
- metaposición `Testigo/Observador` cuando aporta perspectiva;
- patrones estructurales `Problema → Solución → Obstáculo → Tarea futura` para objetivos/proyectos;
- comparación corporal y espacial entre posiciones;
- duración sugerida e intensidad por ejercicio;
- contenido de alta intensidad o dependiente de facilitación humana excluido del catálogo solo por defecto.

Leer también `docs/EXERCISE_ENGINE.md` y `docs/SOURCE_MATERIAL_ADAPTATION.md`.


## Lectura intuitiva e hipótesis sistémicas
- La intuición del practicante es una entrada válida del motor, no un error que deba corregirse.
- Las asociaciones tradicionales de constelaciones pueden aparecer como escenarios hipotéticos.
- Ejemplos: mirada al suelo → muerte/pérdida/ausencia/exclusión simbólica; mirada lejana → ancestro/rama ancestral/ausencia/futuro/algo mayor.
- Cada señal debe admitir varias lecturas alternativas.
- La interfaz debe ofrecer `Profundizar`, `Otra interpretación`, `Añadir figura intuitiva`, `Mover una pieza`, `Continuar observando` y `No me resuena`.
- Una hipótesis que no resuena se descarta y no vuelve a imponerse.

## 2026.09.3 · Biblioteca y generador abiertos
- Las 12 prácticas iniciales son presets semilla, no un límite.
- Debe poder existir cualquier cantidad de prácticas personalizadas hasta el límite real del almacenamiento del dispositivo; no usar `MAX_PRACTICES`, paginación destructiva ni listas cerradas de IDs.
- Una práctica/constelación se representa mediante `ConstellationPlan` y se valida antes de ejecutarse.
- El practicante puede generar una constelación completa desde un tema libre, iniciarla una sola vez o guardarla para reutilizarla.
- Gemini puede crear planes originales y no está restringido a escoger presets.
- Existe fallback local offline para generación estructural.
- Las prácticas personalizadas se pueden editar, duplicar y eliminar sin afectar sesiones históricas.
- Una sesión generada conserva el flujo completo de Campo: intención → representantes → apertura → colocación → observación → interpretación hipotética opcional → movimiento/contraste → frase opcional → cierre → integración → resumen.
- Las figuras intuitivas pueden aparecer durante el proceso aunque no estuvieran en el plan inicial.
