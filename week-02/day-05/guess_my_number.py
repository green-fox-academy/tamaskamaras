from random import *

lives = 10
rang = int(input("Type the max range: "))
x = randint(1, rang)
for i in range(1, lives):
    guess = int(input("Type a guess: "))
    if guess > x:
        print("Too high")
    elif guess < x:
        print("Too low")
    else:
        print("You won")

print(x)