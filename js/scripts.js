var sentence = prompt("Please enter a sentence.");

function joinAndUppercase(a,b) {
  return a.concat(b).toUpperCase();
};

function reverse(ab) {
  return ab.charAt(1).concat(ab.charAt(0));
}

function joinUppercaseAndReverse(a,b) {
  var capitalizedFirstAndLast = joinAndUppercase(a,b);
  return reverse(capitalizedFirstAndLast);
}

var firstLetter = sentence.charAt(0);
var lastLetter = sentence.charAt(sentence.length -1);
alert(joinUppercaseAndReverse(firstLetter,lastLetter));
