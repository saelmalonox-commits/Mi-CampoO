# Inventario funcional maestro

## Motor local de constelaciones
- 7 modalidades: Familiar, Individual, Decisiones, Relaciones, Proyectos, Energética/Simbólica y Libre.
- Configuración por tema, intención, profundidad, duración y representantes.
- Familias adoptivas, de origen, ambas, elegidas, manuales y orígenes desconocidos/intuitivos.
- Representantes editables y figuras intuitivas añadibles durante la sesión.
- Campo digital con posición X/Y, rotación, postura, historial de layouts, deshacer y comparación con el inicio.
- Ciclo operativo: apertura → colocación → observación → movimiento → frase opcional → cierre → integración → resumen.
- Interpretación por pieza, relación y campo completo.
- Hipótesis sistémicas múltiples con `Profundizar`, `Otra lectura`, `No me resuena` y movimiento reversible.
- Fotos inicial/final cuando el navegador lo permita.

## Generador abierto
- `shared/exercises.json`: 12 prácticas semilla, no límite.
- `client/constellation-factory.js`: genera planes locales para cualquier tema.
- `POST /api/gemini/generate-constellation`: genera planes con Gemini.
- Planes validables mediante `shared/constellation-plan.schema.json` y sanitización servidor/cliente.
- Guardar una sesión como práctica nueva, editar, duplicar y eliminar prácticas personalizadas.
- Exportación/importación `.campo` incluye biblioteca personalizada.

## Intuición e hipótesis
- Permite personajes, ausencias, ramas, recursos, presencias, energías, límites o figuras sin nombre surgidas por intuición.
- Asociaciones como mirada al suelo, orientación lejana, aislamiento, interposición o postura pueden activar escenarios simbólicos alternativos; no se fijan como hechos.
- La intuición del practicante precede a la sugerencia de la app.

## Axoflutter y voz
- GLB 3D local + imagen fallback.
- Presencia en Inicio y miniatura durante sesión.
- SpeechSynthesis local para lectura rápida.
- Gemini TTS para narración de mayor calidad.
- Gemini Live para conversación de voz en tiempo real y comandos como pausar, repetir, deshacer, continuar, cambiar mundo, abrir historial/biblioteca/ajustes.

## Experiencia visual
- 3 universos × 2 modos: Océano Cósmico, Bosque Elemental, Tormenta Estelar; claro/oscuro.
- Movimiento, partículas, geometría, ambiente y sonido diferenciados.
- Inicio premium según `VISUAL_TARGET.md`.
- Sonido generativo local con Web Audio y sincronización opcional mundo/sonido.

## Datos y privacidad local
- Preferencia local por defecto.
- Historial de sesiones, memoria local de uso y prácticas personalizadas.
- Web Crypto para cifrado opcional.
- IndexedDB para fotografías.
- Exportar/importar y eliminar datos.
- Gemini sólo recibe el contexto necesario cuando el usuario usa las funciones Gemini.

## PWA / iPhone
- Manifest, service worker, iconos 180/192/512, standalone, viewport-fit=cover, safe areas y offline shell.
- Fallbacks para funcionalidades que Safari no admita.
