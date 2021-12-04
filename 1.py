allFactors = []
for i in range (1, 1000):
    if (i % 3 == 0):
        allFactors.append(i)
    elif (i % 5 == 0):
        allFactors.append(i)

total = 0
for number in allFactors:
    total = total + number
    
print(total)