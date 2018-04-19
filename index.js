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

function iLoveTheBeatles (number){
  var array = []; 
  var numberNumber = parseInt(number)
  do{
    var message = "I love the Beatles!".repeat(numberNumber)
    array.push(message)
    return array
    }
    while (numberNumber) < 15);
    
}

