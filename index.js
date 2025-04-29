//EXPORTAÇÃO NOMEADA
//importação de somente uma function dentro do arquivo js
import { criarItemDaLista } from "./scripts/criarItemDaLista.js";

//EXPORTAÇÃO PADRÃO
import verificarListaVazia from "./scripts/verificarListaVazia.js";

const botaoAdicionar = document.getElementById('adicionar-item');
const listaDeCompras = document.getElementById('lista-de-compras');

botaoAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault(); //impede que a tag button recarregue a página, perdendo os valores dos input
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
});


verificarListaVazia(listaDeCompras);