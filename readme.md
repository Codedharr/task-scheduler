Nombre del proyecto: Mini-proyecto: Task Scheduler & Visualizer (Simulador de Planificador de Tareas)


1️⃣ Visión general
La idea es hacer una aplicación web en JavaScript puro que permita:

Crear tareas con nombre, duración, prioridad y dependencias.

Programar automáticamente el orden en que se deben ejecutar (Scheduler).

Visualizar el proceso en tiempo real (lista o timeline).

Simular ejecución con Promises (para practicar asincronía).

Controlar la ejecución (pausar, reanudar, cancelar).

En pocas palabras: es como un pequeño Trello + motor de ejecución de procesos.


2️⃣ Componentes principales
🔹 Interfaz (UI)
Formulario para crear tareas:

Nombre: "Descargar archivo", "Procesar datos".

Duración: milisegundos para simular cuánto tarda.

Prioridad: número (1 = más importante).

Dependencias: elegir otras tareas que deben terminar antes.

Lista visual:

Estado: pending, running, done, failed, cancelled.

Barra de progreso o animación.

Botones: iniciar, pausar, reanudar, cancelar.

🔹 Modelo (POO)
Task: clase que representa una tarea con sus propiedades.

Scheduler: clase que decide el orden de ejecución y controla el flujo.

PriorityQueue: estructura para seleccionar la tarea más prioritaria lista para correr.

GraphUtils: utilidades para manejar el grafo de dependencias y detectar ciclos.


3️⃣ Flujo de funcionamiento
Definición de tareas

El usuario crea varias tareas desde la UI.

Cada tarea queda en estado "pending".

El sistema almacena estas tareas en un Map (id → Task).

Construcción del grafo

El Scheduler analiza las dependencias y crea:

edges: mapa de tarea → conjunto de tareas que dependen de ella.

indegree: cuántas dependencias pendientes tiene cada tarea.

Se verifica que no haya ciclos (ej. A depende de B y B depende de A).

Inicialización del Scheduler

Se agregan a la cola de prioridad todas las tareas con indegree = 0 (sin dependencias).

Se respeta un límite de concurrencia (ej. máximo 2 tareas a la vez).

Ejecución de tareas

Se toma la tarea más prioritaria de la cola y se ejecuta usando una Promise (runTaskAsync con setTimeout para simular duración).

El estado cambia de "pending" a "running".

En la UI se actualiza el progreso (por ejemplo, una barra que se llena).

Finalización

Cuando una tarea termina:

Pasa a "done".

Se reduce el indegree de cada tarea dependiente.

Si alguna dependencia llega a indegree = 0, se encola en la PriorityQueue.

El Scheduler ejecuta la siguiente tarea disponible.

Manejo de errores y control

Si falla: pasa a "failed" y se muestra en UI.

Pausar: se detiene la ejecución de nuevas tareas (no las que ya están en curso).

Reanudar: se reactivan ejecuciones.

Cancelar: se llama a un método task.cancel() que interrumpe su ejecución.
