# create a function that takes a number,
# divides ten with it,
# and prints the result.
# it should print "fail" if the parameter is 0

def divide(number):
    try:
        return 10 / number
    except ZeroDivisionError:
        print("You can't divide by zero!")

print(divide(int(input("Type a number: "))))