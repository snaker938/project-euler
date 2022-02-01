import math
# m = 10
# total = 0

# def sum(s, k):
#     # return (((m+2*k-2*s)*(m+2*k-2*s+1) - ((m+k-s)*(m+k-s+1))))/2
#     return (2 * m - 4 * s + 2 * k - (k - s - 1)) * (k - s)/2;

# def check(k, s):
#     # for n in range(1, m+1):
#     #     if (n*(k-s) == s):
#     #         return True
#     for n in range(1, m+1):
#         if n % (k-s) == 0:
#             return True

# for k in range(2, m+1):
#     for s in range(1, round(math.sqrt(k)+1)):
#         if (s*s <= k):
#             if check(k, s):
#                 total = total + sum(s, k)
#             # if k%s == 0:
#             #     total = total + sum(k-s, k)
#             #     if (check(k,s) and s*s !=k and s!=1):
#             #         total = total + sum(k-k/s, k)
 
 
 
# print(total)

m = 10
def sum(s, k):
    return (2 * m - 4 * s + 2 * k - (k - s - 1)) * (k - s)/2;


ans = 0;
for k in range(2, m+1):
    for s in range(1, round(math.sqrt(k)+1)):
        if (s*s <= k):
            if (k%s == 0):
                ans += sum(k-s, k)
                if (s!=1 and s**2!= k):
                    ans += sum(k-k/s, k)


        
print(ans)

# problem 97



# m = 10
# def sum(s, k):
#     return (2 * m - 4 * s + 2 * k - (k - s - 1)) * (k - s)/2;


# ans = 0;
# for k in range(2, m+1):
#     for s in range(1, round(math.sqrt(k)+1)):
#         if (s*s <= k):
#             if (k%s == 0):
#                 # ans += sum(k-s, k)
#                 print(k, s)
#                 if (s!=1 and s**2!= k):
#                     # ans += sum(k-k/s, k)
#                     # print(s, k)
#                     continue
        


        
# print(ans)