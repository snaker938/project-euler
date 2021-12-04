from itertools import count
total = 0

numbers = []

def fib():
    numbers.append(1)
    numbers.append(2)
    for i in count(0):
        if (numbers[i] + numbers[i + 1]) > 4000000:
            return
        numbers.append(numbers[i] + numbers[i+1])
    
    
fib()

numbersFiltered = filter(lambda number: number % 2==0, numbers)
for number in numbersFiltered:
    total = total + number

print(total)

# print(total)