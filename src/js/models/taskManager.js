import { STORAGE_TASK, saveTasks } from "../storage";
import { Task } from "./task";

export class TaskManager {
        constructor () {
            this.tasks = STORAGE_TASK.map(task => Task.fromJSON(task))
        }
        addTask(task){ 
            this.tasks.push(task)
            this._save()
        }
        removeTask(id){ 
            this.tasks = this.tasks.filter(task => task.id !== id)
            this._save()
        }
        toggleTask(id){
            const task = this.tasks.find(task => task.id === id)
            if (task) { 
                task.toggleCompleted()
                this._save()
            }
        }
        
        getTasks(){
            return this.tasks
        }

        _save(){
            saveTasks(this.tasks.map(task => task.toJSON()))
        }
}