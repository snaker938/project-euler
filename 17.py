import random

# string = string.replace(" ", "")
words = []

# for i in range(1, 6):
#     print(i)

def convertUnits(num):
    if num == 0:
        return ""
    if num == 1:
        return "one"
    elif num == 2:
        return "two"
    elif num == 3:
        return "three"
    elif num == 4:
        return "four"
    elif num == 5:
        return "five"
    elif num == 6:
        return "six"
    elif num == 7:
        return "seven"
    elif num == 8:
        return "eight"
    elif num == 9:
        return "nine"
    elif num == 10:
        return "ten"
    elif num == 11:
        return "eleven"
    elif num == 12:
        return "twelve"
    elif num == 13:
        return "thirteen"
    elif num == 14:
        return "fourteen"
    elif num == 15:
        return "fifteen"
    elif num == 16:
        return "sixteen"
    elif num == 17:
        return "seventeen"
    elif num == 18:
        return "eighteen"
    elif num == 19:
        return "nineteen"

def convertTens(num, units):
    if num == 20:
        return "twenty" + convertUnits(units)
    elif num == 30:
        return "thirty" + convertUnits(units)
    elif num == 40:
        return "forty" + convertUnits(units)
    elif num == 50:
        return "fifty" + convertUnits(units)
    elif num == 60:
        return "sixty" + convertUnits(units)
    elif num == 70:
        return "seventy" + convertUnits(units)
    elif num == 80:
        return "eighty" + convertUnits(units)
    elif num == 90:
        return "ninety" + convertUnits(units)
    elif units > 0:
        return convertUnits(num)
    else: return ""

def convertHundreds(num, tens, units):
    yes = ""
    if tens > 0 or units > 0:
        yes = "and"
    if tens >= 1:
        return str(convertUnits(num)) + "hundred" + yes + convertTens(tens, units)
    else:
        return str(convertUnits(num)) + "hundred" + yes + convertUnits(units)
    


def convertWord(num):
    # print(num)
    if len(num) == 4:
        words.append("onethousand")
        return
    if len(num) == 3:
        hundreds = int(num[0])
        tens = int(num[1])
        units = int(num[2])
        word = convertHundreds(hundreds, tens*10, units)
        words.append(word)
        # return convertWord(str(int(num) + 1))
        return
    elif len(num) == 2:
        if int(num) >= 20:
            tens = int(num[0])
            units = int(num[1])
            word = convertTens(tens*10, units)
            words.append(word)
            # return convertWord(str(int(num) + 1))
            return
        else:
            word = convertUnits(int(num))
            words.append(word)
            # return convertWord(str(int(num) + 1))
            return
    else:
        units = int(num[0])
        word = convertUnits(units)
        words.append(word)
        # return convertWord(str(int(num) + 1)) 
        return

    
for number in range(1, 1001):
    convertWord(str(number))


# print(words)

numLetters = 0

for number in words:
    print(number, len(number))
    # print(number, len(number))
    numLetters = numLetters + len(number)

# print(words)
# 21124
# print(21124 - numLetters)

   