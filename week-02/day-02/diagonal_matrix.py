# - Create (dynamically) a two dimensional list
#   with the following matrix. Use a loop!
#
#   1 0 0 0
#   0 1 0 0
#   0 0 1 0
#   0 0 0 1
#
# - Print this two dimensional list to the output

for i in range(4):
    row = [0, 0, 0, 0]
    for a in range(4):
        if i == a:
            row[a] = 1
        else:
            row[a] = 0
    print(row)
        