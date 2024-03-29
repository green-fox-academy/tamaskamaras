# We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
# (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
# have 3 ears, because they each have a raised foot. Recursively return the
# number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

def alien_bunnies(n):
    if n == 0:
        return n
    elif n % 2 == 0:
        return 3 + alien_bunnies(n - 1)
    elif n % 2 != 0:
        return 2 + alien_bunnies(n - 1)        

print(alien_bunnies(10))