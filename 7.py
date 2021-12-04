from itertools import count
import time, math

# factors = []
# s = time.time()
# for num in count(1):
#     if num > 1:
#         for i in range(2, num):
#             if (num % i) == 0:
#                 break
#         else:
#             factors.append(num)
#             if len(factors) == 10001:
#                 break
     
# print(time.time() -s)
# print(max(factors))

# My solution ^^



# Much better solution

s = time.time()
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
while N < 10001:
	if IsPrime(T):
		N+=1
	T+=2
 
 
print (T-2)
print (time.time() - s)


