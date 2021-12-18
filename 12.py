from functools import reduce
from itertools import count

def factors(n):    
    return set(reduce(list.__add__, 
                ([i, n//i] for i in range(1, int(n**0.5) + 1) if n % i == 0)))

number = 1

currentMaxFactors = 0


for i in count(2):
    number = number + i
    factorsOfNumber = factors(number)
    if len(factorsOfNumber) > currentMaxFactors:
        currentMaxFactors = len(factorsOfNumber)
        print(currentMaxFactors)
        
    if len(factorsOfNumber) >= 500:
        break
    

print(number)