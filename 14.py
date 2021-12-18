sequence = []
currentMaxLength = 0
currentMaxSequence = []
currentMaxSequenceNumber = 0

def getSequence(number):
    sequence.append(number)
    if number == 1:
        return number
    if number % 2 == 0:
        return getSequence(number / 2)
    else:
        return getSequence((3 * number) + 1)



for i in range(1, 1000001):
    print(i)
    getSequence(i)
    if len(sequence) > currentMaxLength:
        currentMaxLength = len(sequence)
        currentMaxSequence = sequence
        currentMaxSequenceNumber = i
    sequence = []
    
print(currentMaxSequenceNumber)
    
    