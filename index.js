function theBeatlesPlay (musicians, instruments) {
  var array = [];
  
  for (var i = 0; i < musicians.length; i++) {
   var message = `${musicians[i]} plays ${instruments[i]}`;
   array.push(message);
  }
  
  return array;
}

function johnLennonFacts (factArray){
  var array = [];
  let index = 0;
  while (index < factArray.length){
    var message = `${factArray[index]}!!!`;
    array.push(message);
    index++
  }
  return array; 
}

/*
function iLoveTheBeatles (number){
  var array = []; 
  do{
    var message = "I love the Beatles!".repeat(parseInt(number)+1)
    array.push(message)
    return array
    }
    while (parseInt(number) < 15);
}

function iLoveTheBeatles(number) {
  return "I love the Beatles"
}
var array = []
do {
  return ('I love the Beatles')
} while (number < 15 && iLoveTheBeatles);
return array;
}
*/

function iLoveTheBeatles(number) {
  let array = [];
  console.log(number)
  return array;
}