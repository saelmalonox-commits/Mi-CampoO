# Mi Campo MASTER 2026.09.3 · Generador abierto

- Las 12 prácticas existentes pasan formalmente a ser presets semilla.
- Nuevo `ConstellationPlan` con esquema JSON compartido.
- Nuevo `client/constellation-factory.js` con generador local offline y normalización de planes.
- Nuevo endpoint `POST /api/gemini/generate-constellation` para crear constelaciones completas desde una intención libre.
- Biblioteca unificada de presets + prácticas personalizadas.
- Sin límite hardcodeado de cantidad de prácticas personalizadas; la capacidad real depende del almacenamiento del dispositivo.
- Crear, editar, duplicar y eliminar prácticas personalizadas.
- Iniciar un plan generado sin necesidad de guardarlo.
- Guardar una sesión terminada como una nueva práctica reutilizable.
- Hasta 24 representantes por sesión dinámica para mantener legibilidad/rendimiento; esto no limita el número de prácticas de la biblioteca.
- Planes dinámicos pueden definir preguntas, experimentos de movimiento, frases opcionales, cierre, integración y reglas de ramificación.
- Las figuras intuitivas pueden añadirse aunque no estuvieran en el plan original.
- Fallback local cuando Gemini no esté disponible.
