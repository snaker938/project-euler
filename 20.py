from math import factorial

number = str(factorial(100))

sumo = 0
for digit in number:
    sumo = sumo + int(digit)
    
print(sumo)
