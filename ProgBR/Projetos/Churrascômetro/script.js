var a = document.getElementById('a')
var hmdb = document.getElementById('hmdb')
var c = document.getElementById('c')
var d = document.getElementById('d')

var s = document.getElementById('submit')

var op1 = document.getElementById('output1')
var op2 = document.getElementById('output2')
var op3 = document.getElementById('output3')




function beef(){
    return((a.value * 500 + c.value * 250) * d.value / 1000)

}

function soda(){
    return((a.value * 400 + c.value * 300) * d.value / 1000)

}

function beer(){
    return(Math.ceil( hmdb.value * 500 * d.value / 350))
}


function total(){
    op1.innerHTML = "You will need " + beef() + "kg of beef"
    op2.innerHTML = "You will need " + beer() + " beer cans"
    op3.innerHTML = "You will need " + soda() + "L of soda"
}


s.onclick = total