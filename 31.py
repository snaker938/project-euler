import random
from itertools import combinations, count

num1 = 0
num2 = 0
num5 = 0
num10 = 0
num20 = 0
num50 = 0
num100 = 0
num200 = 0

sequences = []


numTot = 0


# for i in count(0):
#     num1 = random.randint(0, 200)
#     num2 = random.randint(0, 100)
#     num5 = random.randint(0, 40)
#     num10 = random.randint(0, 20)
#     num20 = random.randint(0, 10)
#     num50 = random.randint(0, 4)
#     num100 = random.randint(0, 2)
#     num200 = random.randint(0, 1)
#     sequenceTemp = [num1, num2, num5, num10, num20, num50, num100, num200]
    
#     total = num1 + num2*2 + num5*5 + num10*10 + num20*20 + num50*50 + num100*100 + num200*200
    
#     if total == 200 and sequenceTemp not in sequences:
#         sequences.append([num1, num2, num5, num10, num20, num50, num100, num200])
#         numTot = numTot + 1
#         print(numTot)
#     elif sequenceTemp in sequences:
#         print("Already in", sequences, sequenceTemp)

for num1 in range(0, 201):
    for num2 in range(0, 101):
        for num5 in range(0, 41):
            for num10 in range(0, 21):
                for num20 in range(0, 11):
                    for num50 in range(0, 5):
                        for num100 in range(0, 3):
                            for num200 in range(0, 2):
                                total = num1 + num2*2 + num5*5 + num10*10 + num20*20 + num50*50 + num100*100 + num200*200
    
                                if total == 200:
                                    sequences.append([num1, num2, num5, num10, num20, num50, num100, num200])
                                    numTot = numTot + 1
                                    print(numTot)
                                
    # print(num1)