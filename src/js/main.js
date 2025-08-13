// Modal
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




// Crear una tarea
const boton = document.querySelector('#boton_crear');
boton.addEventListener('click', function (event){
    event.preventDefault();
    const texto = document.querySelector('#texto').value
    const nuevaTarea = new Nuevatarea(texto)
    modal.style.display = 'none';
    nuevaTarea.crear()
})

class Nuevatarea {
    constructor (texto) {
        this.texto = texto
        this.elemento = null;
    }

    crear() {
        const tareaDiv = document.createElement('div')
        const tareaText = document.createElement('p')
        tareaText.textContent = this.texto

        const eliminarBtn = document.createElement('button')
        eliminarBtn.textContent = 'x'; 
        eliminarBtn.addEventListener('click', () => this.eliminar());

        tareaDiv.appendChild(tareaText)
        tareaDiv.classList.add('task')

        this.elemento = tareaDiv 
        document.querySelector('#tasks').appendChild(tareaDiv)
        document.querySelector('#tasks').appendChild(eliminarBtn)
    }

    eliminar() {
        if(this.elemento) {
            this.elemento.remove()
        }
    }

    actualizar() { 
        
    }
}