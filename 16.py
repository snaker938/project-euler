tot = 0

for digit in str(2**1000):
    tot = tot + int(digit)

print(tot)