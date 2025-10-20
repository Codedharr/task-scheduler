##Resumen del proyecto##
FlowQ es una aplicación web que permite crear, visualizar y simular la ejecución de tareas con dependencias, prioridades y duración. Está diseñada como un entorno de práctica para consolidar conceptos clave de programación como:

1- Programación orientada a objetos (POO)
2- Estructuras de datos avanzadas (grafos, heaps, mapas)
3- Algoritmos de planificación (ordenación topológica, concurrencia)
4- Asincronía con promesas (Promise, async/await)
5- Interacción con el DOM y visualización (timeline tipo Gantt)
6- Persistencia local (localStorage)
7- Testing unitario con Jest

##Estructura del proyecto##
/src
 ├── index.html              # HTML principal
 ├── styles/                 # Estilos CSS
 └── js/
      ├── models/            # Entidades del dominio (Task, TaskManager)
      ├── UI/                # Controlador de interfaz (UIController)
      ├── core/              # Lógica de ejecución (Scheduler, Worker)
      ├── main.js            # Punto de entrada e inicialización
      └── storage.js         # Persistencia en localStorage


##Estado actual##

##Funcionalidades implementadas##

1- Modal para crear tareas
2- Creación dinámica de tareas con clase Task
3- Eliminación de tareas desde la interfaz
4- Marcado de tareas como completadas
5- Persistencia automática con localStorage
6- Reconstrucción de tareas al recargar la página
7- Encapsulamiento básico con TaskManager y UIController

##Funcionalidades en desarrollo## 

1- Rediseño del ciclo de vida de tareas (pending, ready, running, etc.)
3- Construcción de grafo de dependencias
4- Validación de ciclos en dependencias
5- Planificador (Scheduler) con ordenación topológica y cola de prioridad
6- Simulación de ejecución con Worker (promesas, delays, cancelación)
7- Visualización tipo timeline/Gantt