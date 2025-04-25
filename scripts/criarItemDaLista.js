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

    let diaDaSemana = new Date().toLocaleDateString('pt-br', {
        weekday: 'long'
    });
    diaDaSemana = diaDaSemana[0].toUpperCase() + diaDaSemana.substring(1);
    const data = new Date().toLocaleDateString('pt-br');
    const hora = new Date().toLocaleTimeString('pt-br', {
        hour: 'numeric',
        minute: 'numeric'
    });
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;
    
    const itemData = document.createElement('p');
    itemData.classList.add('texto-data');
    itemData.innerText = dataCompleta;
    
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}