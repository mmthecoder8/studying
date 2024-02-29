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


/////////////////////////////////////////////////////////////////////////////////////////////////// Video pt2
var video = document.getElementById('video')

var decrease = document.getElementById('decrease')
var rewind = document.getElementById('rewind')
var pause = document.getElementById('pause')
var play = document.getElementById('play')
var forward = document.getElementById('forward')
var increase = document.getElementById('increase')


decrease.addEventListener("click", function(){ video.playbackRate -= 0.1 })
rewind.addEventListener("click", function(){ video.currentTime -= 5 })
pause.addEventListener("click", function(){ video.play() })
play.addEventListener("click", function(){ video.pause() })
forward.addEventListener("click", function(){ video.currentTime += 5 })
increase.addEventListener("click", function(){ video.playbackRate += 0.1 })


/*This part is comment because CSS is doing the same thing
var controls = document.getElementById('controls')
controls.addEventListener('mouseout', function(){controls.style.opacity = 0})
controls.addEventListener('mouseover', function(){controls.style.opacity = 1})
*/


/////////////////////////////////////////////////////////////////////////////////////////////////// Audio

var a1 = document.getElementById('a1')
var a2 = document.getElementById('a2')

a1.volume = 0.05
a2.volume = 0.05

// I made this part because these audio are insanely loud

////////////////////////////////////////////////////////////////////////////////////////////// Animação com HTML

var square = document.getElementById('square')

var xInitial = 0
var yInitial = 0

function moveSquare(x, y){
    let posX = x + 'px'
    let posY = y + 'px'

    square.style.left = posX
    square.style.top = posY
}

setInterval(function(){
    moveSquare(moveSquare(xInitial++, yInitial++))
}, 30)



////////////////////////////////////////////////////////////////////////////////////////////// Canvas

///--------------------------------- Intro + Linhas

var c1 = document.getElementById('c1')

var c1C = c1.getContext('2d')

c1C.moveTo(0, 0)
c1C.lineTo(150, 150)
c1C.lineWidth = 5
c1C.strokeStyle = 'blue'
c1C.lineTo(0, 300)
c1C.lineTo(173, 200)
c1C.stroke()



///--------------------------------- Retângulo

var c2 = document.getElementById('c2')

var c2C = c2.getContext('2d')

c2C.rect(10, 10, 100, 200)

c2C.fillStyle = 'lightgreen'
//c2C.fillRect(10, 10, 100, 200)

c2C.strokeStyle = 'blue'
//c2C.strokeRect(10, 10, 100, 200)

c2C.lineWidth = 5

c2C.fill()
c2C.stroke()

c2C.clearRect(20, 90, 30, 30)



///--------------------------------- Inicio e Fim do caminho (Path)

var c3 = document.getElementById('c3')

var c3C = c3.getContext('2d')

c3C.beginPath()

c3C.lineWidth = 3
c3C.strokeStyle = 'red'
c3C.moveTo(10, 10)
c3C.lineTo(200, 200)
c3C.stroke()

c3C.beginPath() // comment this line to see a difference

c3C.lineWidth = 3
c3C.strokeStyle = 'blue'
c3C.moveTo(200, 10) // comment this line this the first beginPath() above to see other difference
c3C.lineTo(100, 260)
/*
You can to do different things with these commented lines
c3C.lineTo(170, 260)
c3C.fillStyle = 'beige'
c3C.fill()
c3C.closePath()
*/
c3C.stroke()



///--------------------------------- Circles

var c4 = document.getElementById('c4')

var c4C = c4.getContext('2d')

// Actually we are learning how to draw an arc, and circles are closed arcs


c4C.beginPath()
c4C.strokeStyle = 'blue'

//     (x,   y,   radius, start, end)
c4C.arc(150, 150,  100,    0,    2 * Math.PI)

c4C.stroke()



///--------------------------------- Animação

var c5 = document.getElementById('c5')

var c5C = c5.getContext('2d')


var circle = {
    x : 100,
    y : 150,
    radius : 100,

    start : 0,
    end : 0,
    //counterclockwise : true
}

function drawCircle(c){

// if you comment this rect there is a strange effect
    c5C.beginPath()
    c5C.rect(0, 0, 300, 300)
    c5C.fillStyle = 'lightseagreen'
    c5C.fill()


    c5C.beginPath()
    c5C.strokeStyle = 'red'
    c5C.fillStyle = 'gray'
    c5C.arc(c.x, c.y, c.radius, c.start, c.end, c.counterclockwise)
    c5C.lineWidth = 2
    c5C.fill()
    c5C.stroke()
}

setInterval(function(){
   
    if(circle.end < 2 * Math.PI) {
       circle.end += 0.3
       circle.x += 3
    }

    drawCircle(circle)
}, 100)



///--------------------------------- Imagens

var c6 = document.getElementById('c6')

var c6C = c6.getContext('2d')


// first way to load a image on canvasa
var mei = document.getElementById('mei')

c6C.drawImage(mei, 20, 20)

// second way to load a image on canvasa

let img = new Image()
img.src = "./mei.jpeg"

img.onload = drawImg

function drawImg(){
    c6C.drawImage(this, 200, 200)
} 