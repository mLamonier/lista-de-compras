function gerarDiaDaSemana(){
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

    return dataCompleta;
}

//necessario caso queira importar o arquivo inteiro
//isso quando é somente uma função dentro do arquivo js
export default gerarDiaDaSemana;