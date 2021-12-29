import math
from functools import reduce

totalAmicableNumbers = 0
total = 0


def checkAmicable(n): 
    factors = set(reduce(list.__add__, 
                ([i, n//i] for i in range(1, int(n**0.5) + 1) if n % i == 0)))
    # print(factors)
    sumOfFactors = 0
    for number in factors:
        sumOfFactors = sumOfFactors + number
    if sumOfFactors == n:
        return False
    else:
        checkFactors(sumOfFactors, n)
    
def checkFactors(n, previousNumber):
    global total
    global totalAmicableNumbers
    factors = set(reduce(list.__add__, 
                ([i, n//i] for i in range(1, int(n**0.5) + 1) if n % i == 0)))
    
    sumOfFactors = 0
    for number in factors:
        sumOfFactors = sumOfFactors + number
    if sumOfFactors == n:
        return False
    if sumOfFactors == n:
        totalAmicableNumbers += 1
        total = total + n
    else:
        return

for i in range(1, 3):
    checkAmicable(i)

print(totalAmicableNumbers)


    


