def factorial(number)
  if number >= 0
    number <= 1 ? 1 : number * factorial(number - 1)
  else
    puts 'Please enter an integer 0 or greater :^) .'
  end
end

def non_recursive_factorial(number)
  if number >= 0
    factors = []
    value = 1
    number.times do 
      factors.push(value)
      value += 1
    end
    number <= 1 ? 1 : factors.reduce(1) { |product, num| product * num }
  else
    puts 'Please enter an integer 0 or greater :^) .'
  end
end
