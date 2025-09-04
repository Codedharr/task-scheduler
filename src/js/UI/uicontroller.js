
    export function creartarea(texto) {
        const tareaDiv = document.createElement('div')
        const tareaText = document.createElement('p')
        tareaText.textContent = texto


        tareaText.addEventListener('click', () => {
            tareaText.classList.toggle('tachada')
        })

        const eliminarBtn = document.createElement('button')
        eliminarBtn.textContent = 'x'; 
        eliminarBtn.addEventListener('click', () => this.eliminar());
        
        tareaDiv.appendChild(eliminarBtn)
        tareaDiv.appendChild(tareaText)
        tareaDiv.classList.add('task')
        
        document.querySelector('#tasks').appendChild(tareaDiv)
    }
