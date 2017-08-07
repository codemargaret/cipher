var sentence = prompt("Please enter a sentence.");
//alert(sentence);
console.log(sentence);


var firstLetter=sentence.charAt(0);
var lastLetter=sentence.charAt(sentence.length -1);
var firstAndLast=firstLetter.concat(lastLetter);
var capitalizedFirstAndLast=firstAndLast.toUpperCase();
//alert(capitalizedFirstAndLast);
