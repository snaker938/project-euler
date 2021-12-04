allPalidromes = []

def checkPalidrome(number):
    originalNum = f"{number}"
    reversedNum = "".join(reversed(originalNum))
    if originalNum == reversedNum:
        allPalidromes.append(number)

for firstNum in range (100, 1000):
    for secondNum in range (100, 1000):
        checkPalidrome(firstNum* secondNum)



print(max(allPalidromes))