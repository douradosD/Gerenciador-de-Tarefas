//primeiro 

const button = document.querySelector('.add-task-btn')
const input = document.querySelector('.input-task')
const inputEtiqueta = document.querySelector('.input-description-2')


const listaCompleta = document.querySelector('.list-tasks')



 // segundo
let minhaListaDeItens = []


// terceiro
function adicionarNovaTarefa(){

        minhaListaDeItens.push({
                tarefa: valorTarefa,
                etiqueta: valorEtiqueta
                })


       mostrarTarefa()
        }


        function mostrarTarefa() {

        

                let novaLi = ''

                minhaListaDeItens.forEach((tarefa, posicao ) => {

                novaLi = novaLi +  ` 
                
                <div id="task-style" >
                <li class="task">
                
                <h2 id="title-end">${tarefa}</h2>

                
                  <div id="flex-section">
                <div id="flex">
                <div>
                <p class="end">${etiqueta}</p>
                </div>
                <p class="data">Criado em: 21/08/2024</p>
                <button   class="concluir" onclick="itemConcluido(${posicao})">Concluir</button>
                
                
                </li> 
                </div>
                </div>
              
                
                `
                

              


                })

                listaCompleta.innerHTML = novaLi


             
        
               
        }

        

      


       

        function itemConcluido (posicao) {

              minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida


              

                mostrarTarefa()
               
                
                
        }
        




//quarto
button.addEventListener('click', adicionarNovaTarefa )