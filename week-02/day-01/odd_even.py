# Write a program that reads a number from the standard input,
# Than prints "Odd" if the number is odd, or "Even" if it is even.

number = int(input())

number %= 2

if number == 0:
    print("Even")
elif number > 0:
    print("Odd")