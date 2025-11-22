export class Task {
    constructor (id, projectId, name, status, priority, duration) {
        this.id = id; 
        this.projectId = projectId,
        this.name = name;
        this.status = status; 
        this.priority = priority; 
        this.duration = duration;
    }

    toggleCompleted() {
        this.completed = !this.completed
    }

    toJSON() {
        return {
            id: this.id,
            projectId: this.projectId,
            name: this.name,
            status: this.status,   
            priority: this.priority,
            duration: this.duration,
        }
    }
    
    static fromJSON(data){
        return new Task(
            data.id, 
            data.name, 
            data.status,
            data.priority,
            data.duration
        )
    }
}
