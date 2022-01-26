import math

m = 10
sN = []
kN = []

def sum(s, k):
    return (2 * m - 4 * s + 2 * k - (k - s - 1)) * (k - s)/2;

for k in range(2, m+1):
    for s in range(1, 10): #round(math.sqrt(k)
        if (s*s <= k):
            if (k%s == 0):
                sN.append(k-s)
                kN.append(k)
                if(s % (k-s) == 0):
                    sN.append(k-k/s)
                    kN.append(k)
               

total = 0

for i in range(0, len(sN)):
    total = total + sum(sN[i], kN[i])
    
print(total)   
# print(sN, kN)