let tela = document.querySelector("#tela-de-pintura");/*é um comando no JS para buscar um elemento dentro do seu HTML utilizando as mesmas regras de seleção usamos o CSS*/
let corAzul = document.querySelector("#pincel-azul");
let corVermelho = document.querySelector("#pincel-vermelho");
let corAmarelo = document.querySelector("#pincel-amarelo");
let corVerde = document.querySelector("#pincel-verde");
let corRoxo = document.querySelector("#pincel-roxo");
let corRosa = document.querySelector("#pincel-rosa");
let corLaranja = document.querySelector("#pincel-laranja");
let corPreto = document.querySelector("#pincel-preto");
let corMar = document.querySelector("#pincel-mar");
let corVioleta = document.querySelector("#pincel-violeta");

corAzul.addEventListener("click", azul);
corVermelho.addEventListener("click", vermelho);
corAmarelo.addEventListener("click", amarelo);
corVerde.addEventListener("click", verde);
corRoxo.addEventListener("click", roxo);
corRosa.addEventListener("click", rosa);
corLaranja.addEventListener("click", laranja);
corPreto.addEventListener("click", preto);
corMar.addEventListener("click", mar);
corVioleta.addEventListener("click", violeta);
let nomeCor = document.querySelector("h3");

function azul(){
    tela.style.background = "blue";
    nomeCor.innerHTML = "Azul"; /*é uma propriedade de elementos HTML no JS usada para ler e alterar todo o conteudo de uma tag*/
    
}

function vermelho(){
    tela.style.background = "red";
    nomeCor.innerHTML = "Vermelho"; /*é uma propriedade de elementos HTML no JS usada para ler e alterar todo o conteudo de uma tag*/
    
}

function amarelo(){
    tela.style.background = "yellow";
    nomeCor.innerHTML = "Amarelo"; /*é uma propriedade de elementos HTML no JS usada para ler e alterar todo o conteudo de uma tag*/
    
}

function verde(){
    tela.style.background = "green";
    nomeCor.innerHTML = "Verde"; /*é uma propriedade de elementos HTML no JS usada para ler e alterar todo o conteudo de uma tag*/
    
}

function roxo(){
    tela.style.background = "purple";
    nomeCor.innerHTML = "Roxo"; /*é uma propriedade de elementos HTML no JS usada para ler e alterar todo o conteudo de uma tag*/
    
}

function rosa(){
    tela.style.background = "pink";
    nomeCor.innerHTML = "Rosa"; /*é uma propriedade de elementos HTML no JS usada para ler e alterar todo o conteudo de uma tag*/
    
}

function laranja(){
    tela.style.background = "orange";
    nomeCor.innerHTML = "Laranja"; /*é uma propriedade de elementos HTML no JS usada para ler e alterar todo o conteudo de uma tag*/
    
}

function preto(){
    tela.style.background = "black";
    nomeCor.innerHTML = "Preto"; /*é uma propriedade de elementos HTML no JS usada para ler e alterar todo o conteudo de uma tag*/
    
}

function mar(){
    tela.style.background = "aquamarine";
    nomeCor.innerHTML = "Verde-Agua"; /*é uma propriedade de elementos HTML no JS usada para ler e alterar todo o conteudo de uma tag*/
    
}

function violeta(){
    tela.style.background = "violet";
    nomeCor.innerHTML = "Violeta"; /*é uma propriedade de elementos HTML no JS usada para ler e alterar todo o conteudo de uma tag*/
    
}
