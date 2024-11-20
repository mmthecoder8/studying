/*-------------------------------------------------------------------------------------- Strict mode*/
"use strict"
/*
This works without strict mode: 
x = 3
console.log(x)
But with strict mode you must declare the variable
*/
var x = 3
console.log(x)

/*-------------------------------------------------------------------------------------- This e Bind*/

function speakGeneric(){
    console.log(this.sound)
}

var dog = {
    sound: "au au",
    speak: speakGeneric
}

var cat = {
    sound: "miau",
    speak: speakGeneric
}

dog.speak()
cat.speak()
// speakGeneric()

let bindedFunction = speakGeneric.bind(dog)

bindedFunction()


/*-------------------------------------------------------------------------------------- Arrow Functions
you can create shorter functions but arrow functions don't understand well the "this" and the "bind"*/
console.log("From now on, we have Arrow Functions class")

let double = x => x * 2

console.log(double(2))
/* Just doing the thing but in the "normal" way

let double = function(x){
    return(x * 2)
}
or
function double(x){
    return(x * 2)

}
*/


/*-------------------------------------------------------------------------------------- Callback*/

var users = ["Callback"," Kaiky"," Gabriel"," Heitor"]

function insertUser (name){
    users.push(name)
}

function tellUsers(x){
    
    setTimeout(() => {
        let cb = document.getElementById("callback").innerHTML = x
        return cb
    }, 1000)
}

insertUser(" Bruno")

tellUsers(users)


/*-------------------------------------------------------------------------------------- Promises
Similar to callbacks, but better and doing a little bit more*/

var users2 = ["Promise"," Kaiky"," Gabriel"," Heitor"]

function insertUser2 (name){
    users2.push(name)
}

function tellUsers2(x){
    
    let promise = new Promise(function(resolve, reject){

        setTimeout(() => {
            let pm = document.getElementById("promise").innerHTML = x
            
            let error = false // change here to see the other msg

            if(!error){
                resolve()
                return pm
            }
            else{
                reject({msg: "Something went wrong"})
            }
            
        }, 1000)
    })
    return promise
}

insertUser2(" Vini")

tellUsers2(users2)
.catch((error)=>{
    tellUsers2(error.msg)
})


/*-------------------------------------------------------------------------------------- Async Await
Other way to use promises*/

var users3 = ["Async Await "," Kaiky"," Gabriel"," Heitor"]

function insertUser3 (name){
    users3.push(name)
}

function tellUsers3(x){
    
    let promise = new Promise(function(resolve, reject){

        setTimeout(() => {
            let aw = document.getElementById("asyncawait").innerHTML = x
            
            let error = false // change here to see the other msg

            if(!error){
                resolve()
                return aw
            }
            else{
                reject({msg: "Something went wrong"})
            }
            
        }, 1000)
    })
    return promise
}



async function execute(){

    await insertUser3(" Bryan")
    tellUsers3(users3)
}

execute()


/*-------------------------------------------------------------------------------------- Filter*/
console.log("From now on, we have Filter class")

function addPlayers(name, height){
    return{name, height}
}

var players = [
    addPlayers("Takeru", 1.75),
    addPlayers("Isaac", 1.98),
    addPlayers("Kosen", 1.78),
    addPlayers("Hanzai", 1.8)
]

console.log(players)


function higherThan179(player){
    return player.height > 1.79
}

var playersHigherThan179 = players.filter(higherThan179)

console.log(playersHigherThan179)


/*-------------------------------------------------------------------------------------- Map*/
console.log("From now on, we have Map class")

var players2 = [
    addPlayers("Zaki", 1.69),
    addPlayers("Takeshi", 1.81),
    addPlayers("Maya", 1.68),
    addPlayers("Miyaga", 1.85),
    addPlayers("Tori", 1.46)
]

function nameHeight(player){
    return player.name + " is " + player.height + " tall"
}

console.log(players2.map(nameHeight))


/*-------------------------------------------------------------------------------------- Valor vs Referência
An attribution by value creates a copy from a original element, any changes on the copy doesn't affect the
original.
An attribution by reference creates a "nickname" of the original element. Any changes on the copy/nickname affects
the original element. There are examples below
*/
console.log("From now on, we have Valor vs Referência class")

// by Value, it happens on "primitive" values, like strings, numbers and booleans

var a = 12 //you can change to see that happens the same thing: "string" or false/true

var b = a

b = 21 //you can change to see that happens the same thing: "gnirts" or true/false

console.log("A" + a, "B" + b)


// by reference, it happens on objects and arrays
// first a example with an array

var classA = ["Miguel", "Thayna", "Giovana"]

var classB = classA

classB.push("Esdras")

console.log(classA, classB)

// now a example with an object

function addPerson(name, age){
    return{name, age}
}

var randomPeople = [
    addPerson("Gisvanda", 70)
]

function person5YearsAhead(person){
    person.age += 5
    return person
}

console.log(randomPeople)
console.log(randomPeople.map(person5YearsAhead))



// How to create copies of arrays and objects

// first the examples with an array

var classC = ["Ester", "Natally", "Pietra"]

var classD = [...classC] // You can do the same thing with the line below
/// var classD = classC.slice()

classD.push("Felipe")

console.log(classC, classD)


// now the examples with an object

var studentA = {name: "Helen", age: "17"}

var studentB = {...studentA} // You can do the same thing with the line below
// var studentB = Object.assign({}, studentA)

studentB.name = "Olivera"

console.log(studentA, studentB)


/*-------------------------------------------------------------------------------------- Spread Operator
It is the "..." to create a copy of a object or array*/
console.log("From now on, we have Spread Operator class")


// You can merge/add information with Spread Operator

var person = {
    name: "Joseph",
    age: 34
}

var contact = {
    email: "joseph@email.com",
    phone: 12345678
}

var copy = {...person, city: "Calgary", ...contact,}
copy.name = "Alex"
copy.email = "alex@email.com"

console.log(person, copy)



/*------------------------------------------------------------------------ Desestruturando um objeto*/
console.log("From now on, we have Desestruturando um objeto class")

var athlete1 = {
    name: "Max",
    age: 21, 
    country: "Russia",
    statusActive: true
}

var athlete2 = {
    name: "Matias",
    age: 26, 
    country: "Argentina",
    statusActive: true
}

console.log(athlete1)
console.log(athlete2)


var {name} = athlete1

console.log(name)

var {age, country, ...others} = athlete2

console.log(age)
console.log(country)
console.log(others)

// I don't know how to translate "desestruturar" so, nessa aula também é ensinado a desestruturar arrays

var athletes = [athlete1, athlete2]

console.log(athletes)

var [Max, ...otherss] = athletes

console.log(Max)

console.log(otherss)


/*-------------------------------------------------------------------------------------- Reduce*/
console.log("From now on, we have Reduce class")

function addMember(nick, age){
    return {nick, age}
}

var karmine = [
    addMember("Shin", 21),
    addMember("Magnum", 22),
    addMember("marteen", 19),
    addMember("N4RRATE", 21),
    addMember("tomaszy", 18),
]

function averageAge(total, age){
    return total + Math.round(age.age / karmine.length)
}

console.log(karmine.reduce(averageAge, 0))

// Reduce doesn't have to end as number

function justAExample(total, nicks){
    return total + nicks.nick
}

console.log(karmine.reduce(justAExample, "something before, it could be blank"))

/*-------------------------------------------------------------------------------------- Desafio*/
console.log("From now on, we have Desafio class")

// recreating map

function mappedPlayers(){
    let mappedPlayers = []
    for(let player of players2){
        mappedPlayers.push(player.name + " is " + player.height + " tall")
    }
    return mappedPlayers
}

console.log(mappedPlayers())



// recreating reduce

function reducedKarmine(){
    let reducedKarmine = ""
    reducedKarmine = (
        Math.round(
            ((karmine[0].age) + (karmine[1].age) + (karmine[2].age) + (karmine[3].age)+ (karmine[4].age)) / 5
            )
        )
    return reducedKarmine
}

console.log(reducedKarmine())

/*-------------------------------------------------------------------------------------- Fetch
I've decided to study this better when I start to study node*/

/*-------------------------------------------------------------------------------------- try catch*/
console.log("From now on, we have try catch class")

var full = ""

try{
    // console.log(abc)

    if(full == ""){
        throw "Full can't be empty"
    }

}catch (err){

    console.log("Houve um erro", err)


}

console.log("This should appear even if there is a error")