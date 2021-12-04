import math
primes = []
total = 0

import math
primes = [2]

def IsPrime( n ):
    if n == 2:
        return 1
    elif n % 2 == 0:
        return 0
  
    i = 3
    range = int( math.sqrt(n) ) + 1
    while( i < range ):
        if( n % i == 0):
            return 0
        i += 1
    return 1

N,T = 1,3
while N < 2000001:
    if IsPrime(T):
        primes.append(T)
    N+=1
    T+=2
 

numbersFiltered = filter(lambda number: number <= 2000000, primes)
for number in numbersFiltered:
    total = total + number
# print (T-2)
print(total)