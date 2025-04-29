//EXPORTAÇÃO PADRÃO
//importação do arquivo js inteiro (é necessário export default nomeFunção no arquivo)
//o nome do import pode ser qualquer um, não precisa ser necessariamente o mesmo da function
import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

const inputItem = document.getElementById('input-item');
let contador = 0;

export function criarItemDaLista(){ //comando export serve para poder importar ela no index.js
    if(inputItem.value === ''){
        alert('Por favor, insira um item!');
        return;
    }

    const itemDaLista = document.createElement('li');

    const containerItemDaLista = document.createElement('div');
    containerItemDaLista.classList.add('lista-item-container');

    const inputCheckBox = document.createElement('input');
    inputCheckBox.type = 'checkbox';
    inputCheckBox.id = 'checkbox-' + contador++;

    const nomeItem = document.createElement('p');
    nomeItem.innerText = inputItem.value;

    inputCheckBox.addEventListener('click', function() {
        if(inputCheckBox.checked){
            nomeItem.style.textDecoration = 'line-through';
        } else {
            nomeItem.style.textDecoration = 'none';
        }
    });

    containerItemDaLista.appendChild(inputCheckBox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);

    const dataCompleta = gerarDiaDaSemana();
    
    const itemData = document.createElement('p');
    itemData.classList.add('texto-data');
    itemData.innerText = dataCompleta;
    
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}