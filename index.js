import { criarItemDaLista } from "./scripts/criarItemDaLista.js";

const botaoAdicionar = document.getElementById('adicionar-item');
const listaDeCompras = document.getElementById('lista-de-compras');

botaoAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault(); //impede que a tag button recarregue a página, perdendo os valores dos input
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia();
});

const mensagemListaVazia = document.querySelector('.mensagem-lista-vazia');

function verificarListaVazia(){
    const itensDaLista = listaDeCompras.querySelectorAll('li'); //querySelectorAll retorna um array
    if (itensDaLista.length === 0){
        mensagemListaVazia.style.display = 'block';
    } else {
        mensagemListaVazia.style.display = 'none';
    }
}

verificarListaVazia();