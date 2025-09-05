//Terminar de realizar la class de task. Y realizar el renderizado de las tareas que están alojas en el localstorage IMPORTANTE TERMINAR MAÑANA Y SEGUIR AVANZANDO EN EL PROYECTO. QUE SE DEBE TERMINAR ANTES DEL 15 DE SEPTIEMBRE 2025. DANIEL TIENES QUE CENTRARTE Y DEJAR DE PONER TU INTERES EN OTRAS COSAS QUE NO TE VAN A AYUDAR. VAMOS YO CREO QUE TI
const modal = document.querySelector('#myModal')
const openModal = document.querySelector('#openModal');
const closeModal = document.querySelector('#closeModal');
import { saveTasks, STORAGE_TASK, loadTasks } from './storage.js';
import { creartarea } from './UI/uicontroller.js';
import { Task } from './models/task.js';

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
    console.log('Desde el bonton')
    event.preventDefault();
    const texto = document.querySelector('#texto').value
    const objecTask = new Task(Date.now(), texto)

    creartarea(texto)
    STORAGE_TASK.push(objecTask)
    saveTasks(STORAGE_TASK);

    modal.style.display = 'none';
})





