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
















