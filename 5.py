from itertools import count

def check(num):
    for i in range(1, 21):
        if num % i != 0:
            return False
    return True

for num in count(1):
    if check(num):
        print(num)
        break


# Not efficient! A better way would be to get the prime factorisation of each number from 1 to 20 and multiply the largest powers