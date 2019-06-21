from random import *

def guess_my_number(rang):
    lives = 10
    x = randint(1, rang)
    for i in range(1, (lives + 1)):
        guess = int(input("Type a guess: "))
        if guess > x:
            print("Too high. You have", (lives - i), "lives left.")
        elif guess < x:
            print("Too low. You have", (lives - i), "lives left.")
        else:
            print("You won!")
            return guess

    print(x)
rang = int(input("Type the max range: "))
guess_my_number(rang)