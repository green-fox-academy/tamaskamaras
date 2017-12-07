# Given base and n that are both 1 or more, compute recursively (no loops)
# the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

def powerN(b, n):
    if n == 1:
        return b
    else:
        return b * powerN(b, n - 1)

print(powerN(5, 4))