import { saveTasks, loadTasks, STORAGE_TASK } from './storage.js';


// Modal
const modal = document.querySelector('#myModal')
const openModal = document.querySelector('#openModal');
const closeModal = document.querySelector('#closeModal');
import { saveTasks, loadTasks, STORAGE_TASK } from './storage.js';


openModal.addEventListener('click', function(){
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => { 
    modal.style.display = 'none';
})

modal.addEventListener('click', (event) => {
    if (event.target == modal) modal.style.display = 'none';
})


// Crear una tarea
const boton = document.querySelector('#boton_crear');
boton.addEventListener('click', function (event){
    event.preventDefault();
    const texto = document.querySelector('#texto').value

    const objecTask = {
        id: Date.now(),
        texto: texto,
        completed: false
    }

    STORAGE_TASK.push(objecTask)
    
    saveTasks(STORAGE_TASK);

    const nuevaTarea = new Nuevatarea(texto)
    nuevaTarea.crear()

    modal.style.display = 'none';
})

//Renderizar tarea 


function renderTasks(taskObj) { 
    const taskDiv = document.querySelector('div'); 
    const taskText = document.querySelector('p');
    taskText.textContent = taskObj.texto;

     if(taskObj.completed) {
        taskText.classList.toggle('tachada')
     }   


     
    document.querySelector('#tasks').appendChild(taskDiv)
}

















class Nuevatarea {
    constructor (texto) {
        this.texto = texto
        this.elemento = null;
    }

    crear() {
        const tareaDiv = document.createElement('div')
        const tareaText = document.createElement('p')
        tareaText.textContent = this.texto


        tareaText.addEventListener('click', () => {
            tareaText.classList.toggle('tachada')
        })

        const eliminarBtn = document.createElement('button')
        eliminarBtn.textContent = 'x'; 
        eliminarBtn.addEventListener('click', () => this.eliminar());
        
        tareaDiv.appendChild(eliminarBtn)
        tareaDiv.appendChild(tareaText)
        tareaDiv.classList.add('task')

        this.elemento = tareaDiv 
        document.querySelector('#tasks').appendChild(tareaDiv)
    }

    eliminar() {
        if(this.elemento) {
            this.elemento.remove()
        }
    }

    actualizar() { 
        
    }
}


console.log(STORAGE_TASK)

