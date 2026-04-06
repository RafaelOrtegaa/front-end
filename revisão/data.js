let dataAtual = new Date();
let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth() + 1;
let dia = dataAtual.getDate();
let hora = dataAtual.getHours();
let minutos = dataAtual.getMinutes();
let segundos = dataAtual.getSeconds();


let formatador = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'short'

});

console.log(formatador.format(dataAtual));

console.log(`${dia < 10 ? `0${dia}` : dia}/${mes < 10 ? `0${mes}` : mes}/${ano} ${hora < 10 ? `0${hora}` : hora}:${minutos < 10 ? `0${minutos}` : minutos}:${segundos < 10 ? `0${segundos}` : segundos}`);