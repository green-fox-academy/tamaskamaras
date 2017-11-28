# - Create a function called `printer`
#   which prints the input parameters
#   (can have multiple number of arguments)

# args = int(input())

def printer(*args):
    for i in args:
        print(i)

printer(args)