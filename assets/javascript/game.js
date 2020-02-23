


document.onkeyup = function(event) {
var pepper = ["JALAPENO", "HABANERO","BELL","POBLANO","TOBASCO"]
var randy = Math.floor(Math.random()*5);
var current = pepper[randy];
var wordLength =current.length;
// console.log(current);
var letters = current.split('');
var guesses = 10;

if (current = "JALAPENO"){

    document.querySelector("#worddiv").textContent = "_";
    
}
}
