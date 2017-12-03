from random import *

lives = 10
rang = int(input("Type the max range: "))
x = randint(1, rang)
for i in range(1, (lives + 1)):
    guess = int(input("Type a guess: "))
    if guess > x:
        print("Too high. You have", (lives - i), "lives left.")
    elif guess < x:
        print("Too low. You have", (lives - i), "lives left.")
    else:
        print("You won!")

print(x)