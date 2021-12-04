
numbersPrime = []
factors = []


def prime(number):
    divisor = 2
    while number > 1:
        while number % divisor == 0:
            factors.append(divisor)
            number = number / divisor
        divisor = divisor + 1
        
     
    
      
prime(600851475143)


print(factors)



