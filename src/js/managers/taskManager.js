import { STORAGE_TASK, saveTasks, incrementCounter } from "../storage.js";
import { Task } from "../models/task.js";

//Clase principal para manipular tareas
export class TaskManager {
    
        constructor () {
            this.tasks = STORAGE_TASK.map(task => Task.fromJSON(task))
        }

        // Metodo para añadir una tarea
        addTask(projectId, name){ 
            if(!name || name.trim() === ""){
                throw new Error('El nombre de la tarea no puede estar vacio')
            }

            if(!projectId || projectId.trim() === "") {
                throw new Error('La tarea debe estar asociada a un proyecto valido')
            }

            const counter = incrementCounter()
            const id = Date.now().toString() +  '-' + counter

            const task = new Task(id, projectId, name.trim(), 'pending')
            this.tasks.push(task)
            this._save()
        }

        // Eliminar una tarea 
        removeTask(id) {
            const taskIndex = this.tasks.findIndex(task => task.id === id);

            if (taskIndex === -1) {
                throw new Error(`No existe una tarea con id: ${id}`);
            }

            this.tasks.splice(taskIndex, 1); // elimina la tarea en esa posición
            this._save();
        }

        // Actualizar el estatus de un tarea
        updateTask(id, newStatus){
            const task = this.tasks.find(task => task.id === id)
            if(!task) {
                throw new Error(`No existe una tarea con id: ${id}`);
            }
            task.status = newStatus; 
            this._save()
        }

        //Obtener la lista de tareas
        getTasks(){
            return [...this.tasks] 
        }
        // Guardamos las tareas en el local storage
        _save(){    
            saveTasks(this.tasks.map(task => task.toJSON()))
        }
}
