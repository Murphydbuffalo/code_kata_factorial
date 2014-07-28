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
  var factors = []
  for(var i = 1; i <= number; i++){
    factors.push(i)
  }
  var result = factors.reduce(function(product, element){
    return product * element;
  }, 1);
  console.log(result);
}

nonRecursiveFactorial(5)
