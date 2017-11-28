# - Write a function called `sum` that sum all the numbers
#   until the given parameter


def sum():
    parameter = int(input("Give me a number: "))
    total = 0
    for i in range(parameter):
        total += (i + 1)
    print(total)
      
sum()