# Write a program that reads a number from the standard input, then draws a
# square like this:
#
#
# %%%%%
# %   %
# %   %
# %   %
# %   %
# %%%%%
#
# The square should have as many lines as the number was

a = int(input("Give me a number: "))

for i in range(1, a + 1):
    if i == 1:
        print("%" * a)
    elif i == a:
        print("%" * a)
    else:
        print("%" + ((a - 2) * " ") + "%")