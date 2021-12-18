from itertools import count
total = 0

numbers = []

def fib():
    numbers.append(1)
    numbers.append(1)
    for i in count(0):
        if len(str(numbers[i] + numbers[i + 1])) >= 1000:
            print(i + 3)
            numbers.append(numbers[i] + numbers[i+1])
            return
        numbers.append(numbers[i] + numbers[i+1])
    
    
fib()

# print(numbers)

# print(numbers[-1])