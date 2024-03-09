/*------------------------------------------------------------------------------------------------- Strict mode*/
"use strict"
/*
This works without strict mode: 
x = 3
console.log(x)
But with strict mode you must declare the variable
*/
var x = 3
console.log(x)

/*-------------------------------------------------------------------------------------------------This e Bind*/

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

/*--------------------------------------------------------------------------------------------Arrow Functions
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


/*-------------------------------------------------------------------------------------------------Callback*/

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

/*-------------------------------------------------------------------------------------------------Promises
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
    console.log(error.msg)
})
















































