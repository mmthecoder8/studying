console.log("Satisfação")

var a

var b

b = a
a = "a"

console.log(a)
console.log(b)

////////////////////////////////////////////////////////////////////////////////////////////////// Tipos de dados
console.log("a partir daqui é a aula tipos de dados")

/* 
Boolean
Null
Undefined
Number
String
*/

var boolean // true or false
var Null = null
var Undefined
var number
var string

boolean = true
number = 123
string = "123 de texto"


console.log(boolean)
console.log(Null)
console.log(Undefined)
console.log(number)
console.log(string)


///////////////////////////////////////////////////////////////////////////////////////// Operações aritméticas
console.log("a partir daqui é a aula Operações aritméticas")


/*
+ Adição
- subtração
* multiplicação
/ divisão
% módulo      | vai devolver o que "sobrar" de uma divisão, não existe número quebrado
++ incremento
-- decremento
*/

a = 10
b = 16

console.log(a + b)

console.log(a - b)

console.log(a * b)

console.log(a / b)

// exemplos de módulos
   
console.log(b % a)

console.log(a % b)  // não dá pra dividir, então ele só devolve os 10

var c = 30
console.log(c % a ) // 3 pra cada, então ele devolve nada

// exemplos de incremento e decremento

a++
console.log(a)
// Ambos podem ficar na frente e atrás do número, funciona igual 
--b
console.log(b)

// Tem hora que importa , assim como nos exemplos abaixo. Lembre que a partir daqui: a = 11 e b = 15

c = --a
console.log(c)

c = b++
console.log(c)

/////////////////////////////// Atribuições, basicamente uma aula mostrando algumas formas de fazer a mesma coisa

/* Pode testar descomentar pra testar e ver que são iguais, os ":" representa igual nestes exemplos

Parte A    Parte B    C     D
"x + 1 =" : "x += 1" : x++ : ++x

"x - 2 =" : "x -= 2"

e só pra esclarecer, a parte C e D só existe com os sinais de "+" e "-" e você pode substituir os sinais das 
partes A e B com qualquer um dos outros já aprensentados "*","/" e "%"
 
Existe: "*=", "/=" e "%="
*/

///////////////////////////////////////////////////////////////////////////////////////// Operadores comparativos
console.log("a partir daqui é a aula Operadores comparativos")

/*
== igual a 
=== valor igual e igual (igual em valor e em tipo)
!= não é igual a
!== não igual ou não igual
> maior que
< menor que
>= menor que ou igual a
<= maior que ou igual a
*/

// Lembrando q number = 123

string = "123"
var number2 = 124

console.log(number == string)

console.log(number === string)

console.log(number != string)

console.log(number !== string)

console.log(number < number2)

console.log(number > string)

console.log(number <= string)

console.log(number >= number2)


//////////////////////////////////////////////////////////////////////////////////////////// Operadores lógicos
console.log("a partir daqui é a aula Operadores lógicos")

/* 
&& = e (se pelo menos um valor for falso, ele retorna false)
|| = ou
! = inverter boolean
*/

var idade = 19

var maior20 = idade > 20
var menor30 = idade < 30

var entre = maior20 && menor30

console.log(idade)

console.log("Maior que 20", maior20)

console.log("Menor que 30", menor30)

console.log("Entre 20 e 30", entre)


idade = 9

var maior65 = idade >= 65
var menor10 = idade <= 10

var gratuidade = maior65 || menor10

console.log(idade)

console.log("Maior que 65", maior65)

console.log("Menor que 10", menor10)

console.log("Tem gratuidade", gratuidade)


console.log(!true)


////////////////////////////////////////////////////////////////////////////// Transformando Strings em Números
console.log("a partir daqui é a aula Transformando Strings em Números")


var five = "5.5"

var three = "3"

console.log(five)
console.log(parseInt(three))

console.log(three + five)

console.log(parseInt(three) + parseFloat(five))

// parseInt() e parseFloat() funciona fora do console.log(), só coloquei ele dentro pra simplificar o código

// Int para números inteiros e Float para quebrados


//////////////////////////////////////////////////////////////////////////////////////////////// Alert e Prompt
/* está comentado para não ter que responder toda vez que atualizar a página 
var age = parseInt(prompt("Digite sua idade"))

var dobro = age + age

alert("O dobro de " + age + " é " + dobro)
*/

/////////////////////////////////////////////////////////////////////////////////////////////// Condicionais - IF
console.log("a partir daqui é a aula Condicionais - IF")

console.log("Somente pessoas menores de 18 anos, entre 35 e 40 anos e idosos recebem meia")

var ageif = 34

if (ageif < 18 || ageif >=35 && ageif <=40 || ageif >59)
    console.log("tem meia")
else if(ageif == 34) {
    console.log("não tem")
    console.log("volte ano que vem")
}
else
console.log("não tem")

// Quando o q deve ser devolvido tiver mais de uma linha de codigo, deve-se agrupar a resposta entre {}


//////////////////////////////////////////////////////////////////////// Operador Ternário (pode substituir o if)
console.log("a partir daqui é a aula Operador Ternário")

var ageOT = 18

console.log("este usuário pode comprar bebida?")

// "?" se for verdade e ":" se nn for

console.log(ageOT >= 18 ? "Pode" : "nn pode")


/////////////////////////////////////////////////////////////////////////////////////////// Condicionais - Switch
console.log("a partir daqui é a aula Condicionais - Switch")

var nota = -7

var conceito


console.log(nota)

if (nota > 10)
    conceito = "Sua nota foi acima do aceitável então houve um erro"
else if(nota >=8)
    conceito = "Excelente"
else if (nota < 8 && nota >= 6)
    conceito = "Bom"
else if (nota < 0)
    conceito = "Sua nota foi abaixa do aceitável então houve um erro"
else 
    conceito = "Ruim"

    console.log(conceito)

    /*Descomente a linha abaixo e veja a mensagem de erro 
    conceito = "" */

//lembre q precisa de ":" no final de cada case e do default
switch (conceito){

    case "Sua nota foi acima do aceitável então houve um erro":
        console.log("Confira sua nota com o professor")
        break
    case "Excelente":
        console.log("Parabéns pelo seu desempenho, você passou")
        break // tira esse break para lembrar a diff, é importante coloca-lo entre os case e o default
    case "Bom":
        console.log("você passou mas ainda pode melhorar")
        break
    case "Ruim":
        console.log("Estude mais")
        break
        case "Sua nota foi abaixa do aceitável então houve um erro":
            console.log("Confira sua nota com o professor")
            break
        // coloque um número abaixo de 0 para ver o erro
    default:
        console.log("Houve um erro")
}

//////////////////////////////////////////////////////////////////////////////////////// Repetição - FOR e WHILE
console.log("a partir daqui é a aula Repetição - FOR e WHILE")

var six = 6

for (var i = 0; i < six; i++){

    console.log("Executando o for pela " + i + " Vez")
}

while (six < 10){
    console.log("Executando o while pela " + six)
    six++;
}

var ka = Math.random() * 100

console.log(Math.random() * 100 + " número aleatório do Math.random() sozinho") 
// Math.random() gera um numero aleatorio entre 0 e 1

while (ka < 50){

    console.log(ka)
    ka = Math.random() * 100
}

////////////////////////////////////////////////////////////////////////////////////////////////////////// Arrays
console.log("a partir daqui é a aula Arrays")

// Array pode receber praticamente tudo como valor: strings, numeros, booleans, variaveis, objetos e outros

// Esse código e console vai ter muita coisa porque eu fiz a mesma coisa várias vezes, da pior forma para a melhor

var aluno1 = "Ana"
var aluno2 = "Carlos"
var aluno3 = "Helena"
var aluno4 = "Kaiky"

console.log(aluno1)
console.log(aluno2)
console.log(aluno3)
console.log(aluno4)

/* tem duas formas de criar uma array, a forma menos prática está comentada, descomente e vai funcionar também. 
Deve-se lembrar q a Array começa contando do 0
*/
console.log("LISTA FEITA DE FORMA DIFERENTE ABAIXO 1")

// var alunos = new Array("Ana", "Carlos", "Helena", "Kaiky")

var alunos = ["Ana", "Carlos", "Helena", "Kaiky"]

console.log(alunos[0])
console.log(alunos[1])
console.log(alunos[2])
console.log(alunos[3])

console.log("LISTA FEITA DE FORMA DIFERENTE ABAIXO 2")


for (var k = 0 ; k < alunos.length; k++) {
    console.log(alunos[k])
}   

console.log("LISTA FEITA DE FORMA DIFERENTE ABAIXO 3")


for (var j in alunos) { // "in" pega o index (a posição dos elementos, deixe apenas o j para perceber a diferença)
    console.log(alunos[j])
}   

console.log("LISTA FEITA DE FORMA DIFERENTE ABAIXO 4")

for (var aluno of alunos) { // "of" pega o elemento de fato
    console.log(aluno)
}  


/////////////////////////////////////////////////////////////////////////////////////////////////////// Funções
console.log("a partir daqui é as duas aulas sobre Funções")

function media(n1, n2){ 
    var media = (n1 + n2)/2
    console.log(media)
}


media(10, 5)

// parte 2

var saudacao = function (){ 
    // quando se cria uma var e se insere uma função naquela var, a função recebe o nome da var

    return("Olá Mundo")
}

// uma função pode ser uma variável, fazendo acontecer algumas coisas diferentes como no exemplo abaixo

console.log(saudacao)

// Uma variável pode receber uma função. Lembre que para executar uma função é obrigatório os ()

var s = saudacao

console.log(s())


// Existe essa outra forma mais simples para criar funções
var arrowfunction = (n1, n2) => {
    var nota1 = n1
    var nota2 = n2

    var soma = (nota1 + nota2)
    console.log(soma)
}

arrowfunction(4, 5)

////////////////////////////////////////////////////////////////////////////////// Juntando tudo até aqui
console.log("a partir daqui é a aula Juntando tudo até aqui")

var jNomes = ["Ana", "Bianca", "Carla"]

var jNotasA = [1, 7, 9]

var jNotasB = [10, 5, 7]

function jMedia (n1, n2){
    return(n1 + n2)/2
}

function jPassou(jMedia){

    if(jMedia >= 6) 
        return("Aprovado")
    else
        return("Reprovado")
}

for(var jIndex in jNomes){

    var jNota1 = jNotasA[jIndex]
    var jNota2 = jNotasB[jIndex]
    var jM = jMedia(jNota1, jNota2)


    console.log(jNomes[jIndex] + " -", + jNota1 + " -", jNota2 + " -", jM + " -", jPassou(jM))
}


////////////////////////////////////////////////////////////////////////////////////////////////////// Objetos 

//////////////////////// Propriedades

//////////////////////// Métodos

//////////////////////// Construtores

//////////////////////// Resumo
