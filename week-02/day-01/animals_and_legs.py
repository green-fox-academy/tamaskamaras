# Write a program that asks for two integers
# The first represents the number of chickens the farmer has
# The seconf represents the number of pigs the farmer has
# It should print how many legs all the animals have

chickens = int(input("How many chickens do you have? "))
pigs = int(input("How many pigs do you have? "))
print("Your animals has got", (chickens * 2) + (pigs * 4), "legs.")