# DECISIONS.md | Documentación de Decisiones Técnicas

Este documento detalla los criterios técnicos, la arquitectura y el proceso de resolución de problemas aplicados en el desarrollo de la Cartelera de Hype Tecnológico.

### 1. Enfoque General de la Solución
El proyecto se concibió bajo un modelo de **separación de responsabilidades (SoC)**. El backend (NestJS) actúa como una capa de servicio y transformación que consume, limpia y enriquece la data cruda, mientras que el frontend (React) se limita a la representación visual y gestión de estados de la interfaz. El objetivo principal fue entregar una UI libre de "ruido" informativo, donde la jerarquía visual sea dictada directamente por la lógica de negocio procesada en el servidor.

### 2. Decisiones Técnicas Principales
* **React Bootstrap:** Se seleccionó para garantizar la estabilidad del layout y un diseño responsivo robusto sin dependencias de compilación complejas. Esto permitió implementar componentes de UI consistentes y enfocarse en la lógica de diferenciación de la "Joya de la Corona".
* **Procesamiento de Data en Backend:** Toda la lógica de cálculo (Fórmula de Hype y modificadores) se centralizó en NestJS. Esto asegura la integridad de los datos y permite que cualquier cambio en las reglas de negocio sea agnóstico al cliente.
* **Manipulación de Fechas con JS Nativo:** Para cumplir con la restricción técnica, se evitó el uso de librerías externas. Se implementó una solución basada en el objeto `Date` y el cálculo de deltas de tiempo en milisegundos para generar el formato de tiempo relativo.

### 3. Organización del Proyecto
* **Modularidad en NestJS:** Se estructuró un módulo de videos con controladores y servicios independientes para facilitar la escalabilidad.
* **Custom Hooks en React:** Se implementó el hook `useVideos` para encapsular la lógica de consumo de la API, manejo de errores y estados de carga, separando la lógica de obtención de datos de la lógica de renderizado de los componentes.
* **Componentes Atómicos:** La `VideoCard` es un componente reutilizable que adapta su morfología y estilos dinámicamente mediante la propiedad `isFeatured`.

### 4. Supuestos o Simplificaciones Realizadas
* Se asumió que la ausencia de la propiedad de comentarios en el JSON de entrada equivale a "comentarios desactivados", resultando en un Score de 0.
* Se simplificó la navegación para priorizar la visualización de la cartelera en una sola página (Landing Page), maximizando el impacto visual de la "Joya de la Corona".
* Se implementó un sistema de fallback para miniaturas (thumbnails) ante posibles fallas en las URLs del proveedor de datos.

### 5. Problemas Encontrados y Soluciones
* **Inconsistencia en URLs de Imágenes:** Varias imágenes del mock presentaban errores de carga. **Solución:** Implementación de un manejador de eventos `onError` en el frontend para inyectar un placeholder visual automático.
* **Cálculo de Tiempo Relativo:** La precisión en años/meses sin librerías externas. **Solución:** Algoritmo de comparación de marcas de tiempo basado en constantes de tiempo (segundos/minutos/horas/días).

### 6. Prompts de IA Relevantes
Se utilizaron herramientas de IA para optimizar tiempos de desarrollo en los siguientes puntos:
1. *"Muestrame 3 ejemplos de cómo implementar una función en JavaScript nativo que calcule el tiempo relativo (ej. 'Hace 3 días') comparando fechas con marcas de tiempo en milisegundos."*
2. *"Sugerencia de estructura para un Custom Hook en React que maneje estados de carga, error y data de una API rest."*
