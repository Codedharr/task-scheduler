export class Task {
    constructor (id, name, { completed = false, duration = 0, dependencies = []} = {}) {
        this.id = id; 
        this.name = name;
        this.completed = completed; 
        this. duration = duration;
        this.dependencies = dependencies;
    }
    mostrarConsola() {
        console.log(this.completed)
    }
    toggleCompleted() {
        this.completed = !this.completed
    }
}
