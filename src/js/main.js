//Terminar de realizar la class de task. Y realizar el renderizado de las tareas que están alojas en el localstorage IMPORTANTE TERMINAR MAÑANA Y SEGUIR AVANZANDO EN EL PROYECTO. QUE SE DEBE TERMINAR ANTES DEL 15 DE SEPTIEMBRE 2025. DANIEL TIENES QUE CENTRARTE Y DEJAR DE PONER TU INTERES EN OTRAS COSAS QUE NO TE VAN A AYUDAR. VAMOS YO CREO QUE TI
import {uiController} from './UI/uicontroller.js'
import { TaskManager } from './models/taskManager.js';


const fomrEl = document.querySelector('#formEl');
const inpuntEl = document.querySelector('#inputEl');
const listEl = document.querySelector('#listEl')


const modal = document.querySelector('#myModal')
const openModal = document.querySelector('#openModal');
const closeModal = document.querySelector('#closeModal');

openModal.addEventListener('click', function(){
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => { 
    modal.style.display = 'none';
})

modal.addEventListener('click', (event) => {
    if (event.target == modal) modal.style.display = 'none';
})


// Crear tarea
const tasks = new TaskManager()
const newUI  = new uiController(tasks, fomrEl, inpuntEl, listEl)
newUI.init()



