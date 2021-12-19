from itertools import count

numbers = []
for number in count(2):
    numberString = str(number)
    numberDigits = []
    total = 0
    for digit in numberString:
        numberDigits.append(int(digit))
    for digit in numberDigits:
        total = digit**5 +total
    if total == number:
        numbers.append(number)
        print("Yes ", number)
    # else:
        # print("No ", number)