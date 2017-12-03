from random import *

rang = int(input("Type the max range: "))
x = randint(1, rang)
guess = int(input("Type a guess: "))
if guess > x:
    print("Too high")
elif guess < x:
    print("Too low")
else:
    print("You won")

print(x)