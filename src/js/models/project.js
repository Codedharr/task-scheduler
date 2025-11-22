export class Project {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    
    static fromJSON(data){
        return new Project(data.id, data.name)
    }
}