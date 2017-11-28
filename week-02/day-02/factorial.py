# - Create a function called `factorio`
#   that returns it's input's factorial


def factorio():
    fact = int(input("Give me a number: "))
    for i in range(1, fact):
        return(i)

factorio()