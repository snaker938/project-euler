
numbersPrime = []
factors = []


def prime(number):
    divisor = 2
    while number > 1:
        while number % divisor == 0:
            factors.append(divisor)
            number = number / divisor
        divisor = divisor + 1
        
     
    
      
prime(3843784)


print(factors)



