# Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

def adder(n):
    if n == 0:
        return 0
    else:
        return n + adder(n - 1)

print(adder(5))