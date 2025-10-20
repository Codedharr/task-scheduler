
import { Task } from "../models/task.js";

export class UIController {
    constructor(taskManager, fomrEl, inpuntEl, listEl){
        this.taskManager = taskManager;
        this.formEl = fomrEl;
        this.inpuntEl = inpuntEl; 
        this.listEl = listEl; 
    }

    init(){
        this.renderTasks()
        this._bindEvents()
    }

    _bindEvents(){

        this.formEl.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = this.inpuntEl.value.trim()


            try {
                const newTask = new Task(Date.now().toString(), name, 1);
                this.taskManager.addTask(newTask);
                this.inpuntEl.value = '';
                this.renderTasks()
            } catch(error){
                alert(error.message)
            }
        })
    }
    //Renderiza las tareas
    renderTasks() {
        this.listEl.innerHTML = ""
        this.taskManager.getTasks().forEach(element => {
            const task = document.createElement("li");
            task.classList.add('task')
            task.textContent = element.name;
            task.appendChild(this.delete(element.id))
            task.appendChild(this.toggleCompleted(element.id))
            this.listEl.appendChild(task);
        });
    }   
    // Elimina tarea
    delete(id){
        const deleteTask = document.createElement('button')
        deleteTask.textContent = 'X';
        deleteTask.addEventListener('click', () => {
            this.taskManager.removeTask(id)
            this.renderTasks();
        })
        return deleteTask;
    }

    toggleCompleted(id){
        const toggleTask = document.createElement('button')
        toggleTask.textContent = 'Toggle'
        toggleTask.addEventListener('click', () => {
            this.taskManager.toggleTask(id)
            this.renderTasks();
        })
        return toggleTask;
    }

}


