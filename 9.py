c = 0
cS = 0
for a in range (1, 500):
    for b in range (a + 1, 1000):
       cS = a**2 + b**2
       c = cS **0.5
       if (a + b + c == 1000):
           print(a * b * c)
