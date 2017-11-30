# - Create a variable named `aj`
#   with the following content: `[3, 4, 5, 6, 7]`
# - Reverse the order of the elements in `aj`
# - Print the elements of the reversed `aj`

aj = [3, 4, 5, 6, 7]

ajx = []

for i in range(len(aj) - 1, -1, -1):
    ajx.append(aj[i])

aj = ajx

print(ajx)