# FlowQ

FlowQ es una aplicación web para **organizar proyectos y gestionar las tareas asociadas a cada uno**.  
Permite crear proyectos, añadir tareas, actualizar su estado y mantener todo sincronizado con persistencia local.  

El objetivo principal es ofrecer una herramienta ligera y práctica para estudiantes y desarrolladores que buscan:  
- Mantener sus proyectos ordenados.  
- Visualizar el ciclo de vida de las tareas.  
- Practicar conceptos clave de programación en un entorno real.  

---

## 📂 Estructura del proyecto

```bash
/src
├── index.html        # HTML principal
├── styles/           # Estilos CSS
└── js/
    ├── models/       # Entidades del dominio (Project, Task, TaskManager)
    ├── UI/           # Controlador de interfaz (UIController)
    ├── core/         # Lógica de ejecución (Scheduler, Worker)
    ├── main.js       # Punto de entrada e inicialización
    └── storage.js    # Persistencia en localStorage
