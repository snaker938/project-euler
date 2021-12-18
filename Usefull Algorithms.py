# Get factors: https://stackoverflow.com/questions/6800193/what-is-the-most-efficient-way-of-finding-all-the-factors-of-a-number-in-python

# def factors(n):    
#     return set(reduce(list.__add__, 
#                 ([i, n//i] for i in range(1, int(n**0.5) + 1) if n % i == 0)))





# Check prime: https://www.rookieslab.com/posts/fastest-way-to-check-if-a-number-is-prime-or-not#python-implementation---osqrtn

# def is_prime(n):
#     """
#     Assumes that n is a positive natural number
#     """
#     # We know 1 is not a prime number
#     if n == 1:
#         return False

#     i = 2
#     # This will loop from 2 to int(sqrt(x))
#     while i*i <= n:
#         # Check if i divides x without leaving a remainder
#         if n % i == 0:
#             # This means that n has a factor in between 2 and sqrt(n)
#             # So it is not a prime number
#             return False
#         i += 1
#     # If we did not find any factor in the above loop,
#     # then n is a prime number
#     return True


# Create 2d Grid:
# def createGrid(number):
#     return [[0 for i in range(number)] for j in range(number)]
# grid = createGrid(4)


#create 2d grid with specific values:
# def createGrid(number):
#     for i in range (0, number):                               
#         new = []                 
#         for j in range (0, number):
#             current = current + 1       
#             new.append(current)            
#         grid.append(new)


# 