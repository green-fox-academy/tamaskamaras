
# Adds a and b, returns as result
def add(a, b):
    return a + b

# Returns the highest value from the three given params
def max_of_three(a, b, c):
    if a > b and a > c:
        return a
    if b > a and b > c:
        return b
    if c > a and c > b:
        return c

# Returns the median value of a list given as param
def median(pool):
    a = sorted(pool)
    return a[int((len(pool) - 1) / 2)]

# Returns true if the param is a vowel
def is_vovel(char):
    return char.lower() in 'aeiouéáőűöüóíú'

# Create a method that translates hungarian into the teve language
def translate(hungarian):
    teve = ''
    for i in range(len(hungarian)):
        if hungarian[i] in 'aáeéiíoóöőuúüű':
            teve += hungarian[i] + 'v' + hungarian[i]
        else:
            teve += hungarian[i]
    return teve
