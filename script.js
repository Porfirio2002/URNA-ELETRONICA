let seuVotoPara = document.querySelector('d1-1 span')
let cargo = document.querySelector('d1-2 span');
let geral = document.querySelector('d1-4');
let direitaL = document.querySelector('d1-right');
let digitos = document.querySelector('d1-3');
let aviso = document.querySelector('d2');

let etapaAtual = 0;
let numero = '';

function comecarEtapa() {
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    for(let i=0;i<etapa.numeros;i++) {
        numeroHtml += '<div class="digito"></div>'
    }
    seuVotoPara
    

}
function atualiza() {

}

function clicou(n) {
   let digitoo = document.querySelector('.numero.pisca');
   if(digitoo !== null) {
       digitoo.innerHTML = n;
       numero = `${numero}${n}` ;
   }
}
function branco() {
    alert("Clicou em BRANCO!");
}
function corrige() {
    alert("Clicou em CORRIGE!");
}
function confirma () {
    alert("Clicou em CONFIRMA!");
}


comecarEtapa();