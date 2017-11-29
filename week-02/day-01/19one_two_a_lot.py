# Write a program that reads a number from the standard input,
# If the number is zero or smaller it should print: Not enough
# If the number is one it should print: One
# If the number is two it should print: Two
# If the number is more than two it should print: A lot

a = float(input())

if a == 0 or a < 0:
    print("Not enough")
elif a == 1:
    print("One")
elif a == 2:
    print("Two")
elif a > 2:
    print("A lot")