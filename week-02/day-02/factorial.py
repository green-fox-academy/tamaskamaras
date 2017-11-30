# - Create a function called `factorio`
#   that returns it's input's factorial

# a = int(input("Give me a number: "))
# fact = 0

# def factorio(a):
#     for i in range(1, a):
#         fact += i
#         print(fact)
#     return i

# factorio(a)
# print(factorio(a))


##############################################

# a = int(input("Give me a number: "))
# fact = a

# for i in range(1, a):
#     fact *= i
# print(fact)

##############################################

a = int(input("Give me a number: "))

def factorio(a):
    fact = a
    for i in range(1, a):
        fact *= i
    return fact

factorio(a)
print(factorio(a))
