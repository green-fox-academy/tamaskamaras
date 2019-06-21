# Write a program that reads a number from the standard input, then draws a
# pyramid like this:
#
#
#    *
#   ***
#  *****
# *******
#
# The pyramid should have as many lines as the number was

a = int(input("Give me a number: "))

for i in range(a):
    print((" " * (a - i)) + ("*" * (i + i + 1)))