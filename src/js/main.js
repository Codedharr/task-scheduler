

const boton = document.querySelector('#boton_crear');
boton.addEventListener('click', function (event){
    event.preventDefault();
    const texto = document.querySelector('#texto').value
    console.log(texto)
    const nuevaTarea = new Nuevatarea(texto)
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
        eliminarBtn.textContent = 'X'; 
        eliminarBtn.addEventListener('click', () => this.eliminar());

        tareaDiv.appendChild(tareaText)
        tareaDiv.appendChild(eliminarBtn)

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