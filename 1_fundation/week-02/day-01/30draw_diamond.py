# Write a program that reads a number from the standard input, then draws a
# diamond like this:
#
#
#    *
#   ***
#  *****
# *******
#  *****
#   ***
#    *
#
# The diamond should have as many lines as the number was

a = int(input("Give me a number: "))

for i in range(a):
    print((" " * (a - i)) + ("*" * (i + i + 1)))
for i in range(a + 1):
    print(((" " * i) + ("*" * ((a * 2) - (i * 2)))) + "*")