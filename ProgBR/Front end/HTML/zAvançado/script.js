var image = document.getElementById('totoro')

image.addEventListener('click', function(){

    // image.src = './catbus.jpg' we have other way to do it below, basically the class' theme

    image.setAttribute('src', './catbus.jpg')

})

// setAttribute is use when you want to create a attribute that isn't on JS, there is a example below

var lista1 = document.getElementById('lista1')

var numero = parseInt(lista1.getAttribute('numero'))

let conteudo = ''

for (let i = 0; i < numero; i++){

    
    conteudo += '<li>' + i + '</li>'
}

lista1.innerHTML = conteudo

// Parte 2 teach a easier way to work with created attributes

var lista2 = document.getElementById('lista2')

var numero2 = parseInt(lista2.getAttribute('data-numero2'))

console.log(numero2)


/////////////////////////////////////////////////////////////////////////////////////////////////////// Video




























