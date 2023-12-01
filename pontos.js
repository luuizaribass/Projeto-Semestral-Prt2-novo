function aparecer(){

const pontos = document.querySelector('.pontos');
const pontosConteudo = document.querySelector('.pontos-conteudo');
const pontosImg = document.querySelector('.pontos-img');


    if(pontosConteudo.style.display==="block"){
        pontosConteudo.style.display="none"
    } else {
        pontosConteudo.style.display="block"
    }
}