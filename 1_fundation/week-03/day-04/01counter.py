# Write a recursive function that takes one parameter: n and counts down from n.

def countdown(n):
    if n == 1:
        return 1
    else:
        print(n - 1)
        return countdown(n - 1)

(countdown(10))