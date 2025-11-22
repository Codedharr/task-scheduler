import { saveProjects, STORAGE_PROJECTS, incrementCounter } from "../storage"
import { Project } from "../models/project"

export class ProjectManager {
    constructor() {
        this.listProjects = STORAGE_PROJECTS.map( project => Project.fromJSON(project))
    }

    createProject(name) {
        if (!name || name.trim() === "") {
            throw new Error("El nombre del proyecto no puede estar vacío");
        }

        counter = incrementCounter()
        const id = Date.now().toString() + '-' + counter
        
        console.log(id)

        const newProject = new Project(id, name.trim())
        this.listProjects.push(newProject)
        this._saveProjects()
    }

    removeProject(id, newName) {
        if (!newName || newName.trim() === "") {
            throw new Error("El nombre del proyecto no puede estar vacío");
        }

        const project = this.listProjects.find( element => element.id === id);
        
        if(!project){
            throw new Error('El projecto que quieres eliminar no existe');
        }
        project.name = newName.trim()
        this._saveProjects()
    }


    getProjects() {
        return [...this.listProjects]
    }

    _saveProjects() {
        saveProjects(this.listProjects)
    }
}