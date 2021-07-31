let seuVotoPara = document.querySelector('.d1-1 span')
let cargo = document.querySelector('.d1-2 span');
let geral = document.querySelector('.d1-4');
let direitaL = document.querySelector('.d1-right');
let digitos = document.querySelector('.d1-3');
let aviso = document.querySelector('.d2');

let etapaAtual = 0;
let numero = '';

function comecarEtapa() {
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    for(let i=0;i<etapa.numeros;i++) {
        if(i == 0) {
            numeroHtml += '<div class="digito pisca"></div>';
        } 
        else {
            numeroHtml += '<div class="digito"></div>'
            }
        }
    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo
    geral.innerHTML = '';
    aviso.style.display = 'none';
    direitaL.innerHTML = '';
    digitos.innerHTML = numeroHtml;
}
function atualiza() {
    
}

function clicou(n) {
   let digitoo = document.querySelector('.numero.pisca');
   if(digitoo !== null) {
       digitoo.innerHTML = n;
       numero = `${numero}${n}`;

       digitoo.classList.remove('pisca');
       if(digitoo.nextElementSibling !== null) {
       digitoo.nextElementSibling.classList.add('pisca')
    }else {
        atualiza();
    }
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