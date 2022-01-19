from itertools import count

grid = []

gridSize = 999


def createGrid(number):
    current = 0
    for i in range (0, number): 
        new = []  
        for j in range (0, number):
            current = current + 0
            new.append(current) 
        grid.append(new)

createGrid(gridSize)

def calculateNumberOfPaths(gridSize):
    paths = [[0 for i in range(gridSize + 1)] for j in range(gridSize + 1)]
    paths[gridSize][gridSize] = 1
    queue = [(gridSize, gridSize)]
    
    while queue:
        current = queue.pop(0)
        if current[0] - 1 >= 0:
            if (current[0] - 1, current[1]) not in queue:
                queue.append((current[0] - 1, current[1]))
            paths[current[0] - 1][current[1]] += paths[current[0]][current[1]]

        if current[1] - 1 >= 0:
            if (current[0], current[1] - 1) not in queue:
                queue.append((current[0], current[1] - 1))
            paths[current[0]][current[1] - 1] += paths[current[0]][current[1]]
    for row in paths:
        print(row)
    return paths[0][0]


print(calculateNumberOfPaths(gridSize))


# for row in grid:
#     print(row)
 
