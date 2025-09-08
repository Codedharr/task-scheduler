
import { Task } from "../models/task.js";

export class uiController {
    constructor(TaskManager, fomrEl, inpuntEl, listEl){
        this.TaskManager = TaskManager;
        this.formEl = fomrEl;
        this.inpuntEl = inpuntEl; 
        this.listEl = listEl; 
    }
    init(){
        this._bindEvents()
    }
    _bindEvents(){
        this.formEl.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = this.inpuntEl.value.trim()


            try {
                const newTask = new Task(Date.now().toString(), name);
                this.TaskManager.addTask(newTask);
                this.inpuntEl.value = '';
                this.renderTasks()
            } catch(error){
                alert(error.message)
            }
        })
    }
    renderTasks() {
        this.listEl.innerHTML = ""
        console.log(this.TaskManager)
        this.TaskManager.getTasks().forEach(element => {
            const task = document.createElement("li");
            task.textContent = element.name;
            this.listEl.appendChild(task);
        });
    }
}


