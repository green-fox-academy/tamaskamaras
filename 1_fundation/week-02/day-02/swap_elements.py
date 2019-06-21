# - Create a variable named `abc`
#   with the following content: `["first", "second", "third"]`
# - Swap the first and the third element of `abc`

abc = ["first", "second", "third"]

a = abc[0]
c = abc[-1]

abc[0] = c
abc[-1] = a

print(abc)