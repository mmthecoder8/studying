///////////////////////////////////////////////////////////////////////////// Acessando elementos HTML com JS

let h1s = document.getElementsByTagName("h1")

console.log(h1s)

let paragrafos = document.getElementsByClassName("paragrafo")

console.log(paragrafos)

let p1 = document.getElementById("p1")

console.log(p1)

//////////////////////////////////////////////////////////////////////////////////////// Modificando elementos

// p1.innerHTML = "<h3>Novo conteúdo com innerHTML</h3>"

// p1.innerText = "<h3>Novo conteúdo com innerText</h3>"

// p1.textContent = "<h3>Novo conteúdo com textContent</h3>"

// Muda pouca coisa entre o innerText e o textContent, veja no o html e o console para ver uma diferença

console.log(p1.innerText)

console.log(p1.textContent)

// o textContent mostra tudo que tem no HTML, o innerText mostra o que tem na tela só


// é possível mudar a class de um elemento também, como no exemplo abaixo

p1.className = "" // por causa dessa mudança, o paragráfo1 ficou preto

p1.style = "background-color: lightblue"

let meuAt = p1.getAttribute("meuAt")

console.log(meuAt)

p1.setAttribute("meuAt", "Outro valor do meu atributo")

console.log(p1)


p1.setAttribute("novoAt", "Novo atributo")

console.log(p1)


///////////////////////////////////////////////////////////////////////////////////////////////////////// Eventos 
/////////////////////////////////////// Parte 1

function h2click (){

    console.log("função h2click foi acionada")
}

function h3hide() { 
    let h3A = document.getElementById("h3A")
    h3A.style.display = "none"
}
// Existe um monte de eventos, lembre de pesquisar sobre para aprender mais sobre eles


/////////////////////////////////////// Parte 2

/////////////////////////////////////// Parte 3

function loaded() {
    let h3B = document.getElementById("abacate")

    h3B.addEventListener("mouseover", praUva)
    h3B.addEventListener("mouseout", voltarAbacate)
}


function praUva (){
    this.innerHTML = "Uva"
}

function voltarAbacate (){
    this.innerHTML = "Abacate"
}

///////////////////////////////////////////////////////////////////////////////////////// Elementos pai e filhos 

 // indo de pai para filho

console.log(document.body.children[10].children[0])


let d = document.getElementById('d')
console.log(d.children[1])

// de filho para pai

let t = document.getElementById('t')
console.log(t.parentElement)

////// indo pro irmão (foi uma lógica que eu percebi que dá pra fazer, provavelmente não é útil nem anotar kk)
console.log(t.parentElement.children[1])



///////////////////////////////////////////////////////////////////////////////////////// Biblioteca Math

// tem um monte de métodos, pesquise mais sobre para achar algo que te ajude :)
// Aqui eu só coloquei alguns que eu achei mais úteis

console.log(Math.PI)

console.log(Math.round(Math.random() * 10))

console.log(Math.floor(0.99))

console.log(Math.ceil(0.01))

////////////////////////////////////////////////////////////////////////////////////////////////////////// JSON
// basicamente um conversor de strings para objeto e vice-versa

let a = {
    nome: "Miguel",
    idade: 16
}

let b = JSON.stringify(a)

console.log(a)
console.log(b)

// quando se converte uma string para objeto usando o JSON tem umas frescurinhas, perceba a diff entre a2 e a3

let a2 = '{"nome": "Rafaela", "idade": 17}'
let a3 = '{"nome: Rafaela, idade": 17}'

let b2 = JSON.parse(a2)
let b3 = JSON.parse(a3)

// fiz nessa ordem de propósito
console.log(a2)
console.log(b2)
console.log(b3)
console.log(a3)


console.log(a2.nome)
console.log(b2.nome)
console.log(b3.nome)



//////////////////////////////////////////////////////////////////////// Local Storage - Persistência de dados
/* Isso aqui é os cookies basicamente (o Miguel de 23/02/2024 interpretou assim), 
ele armazena dados em "formato" de string que ficaram salvos no seu pc e que podem ser acessados depois*/

// O primeiro argumento do setItem é uma chave e a segunda é um valor: localStorage.setItem("chave", "valor") 

localStorage.setItem("nome", "Miguel")


let n = localStorage.getItem("nome")

console.log(n)


n = localStorage.removeItem("nome")

console.log(n)



////////////////////////////////////////////////////////////////////////////////////////////// Timer e Intervalo
// timeout vai fazer a mesma coisa que o interval, a diferença é que o timeout só vai fazer uma vez

var numero = 0

var interval


function atualizarTexto(){
    let h = document.getElementById("h")
    h.innerHTML = " " + numero
    numero++
}

function contando(){
    interval = setInterval(atualizarTexto, 1000)
}

function parar(){
    clearInterval(interval)
}







