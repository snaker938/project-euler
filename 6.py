totalOfSquares = 0
total = 0
for number in range (1, 101):
    totalOfSquares = totalOfSquares + number**2
    total = total + number

print(total**2 - totalOfSquares, total**2, totalOfSquares)

    