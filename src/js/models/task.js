export class Task {
    constructor (id, name, priority, { completed = false, duration = 0, dependencies = []} = {}) {
        this.id = id; 
        this.name = name;
        this.priority = priority;
        this.completed = completed; 
        this. duration = duration;
        this.dependencies = dependencies;
    }
    toggleCompleted() {
        this.completed = !this.completed
    }
    toJSON() {
        return {
            id: this.id,
            name: this.name,    
            completed: this.completed,
            duration: this.duration,
            priority: this.priority,
            dependencies: this.dependencies
        }
    }
    static fromJSON(data){
        return new Task(data.id, data.name, data)
    }
}


//Terminar de consolidar el TaskManager


