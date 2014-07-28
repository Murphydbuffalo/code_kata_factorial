def factorial(number)
  if number >= 0
    number <= 1 ? 1 : number * factorial(number - 1)
  else
    puts 'Please enter an integer 0 or greater :^) .'
  end
end
