var factorial = function(number){
  if(number >= 0){
    number <= 1 ? 1 : number * factorial(number - 1);
  }
  else{
    console.log('Please enter an integer 0 or greater.');
  }
}

factorial(-5)

var nonRecursiveFactorial = function(number){
  
}
