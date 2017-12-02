# Create a function that takes a list of numbers as a parameter
# Returns a list of numbers where every number in the list occurs only once
# Example:
# input: [1, 11, 34, 11, 52, 61, 1, 34]
# output: [1, 11, 34, 52, 61]

input = [1, 11, 34, 11, 52, 61, 1, 34]

for i in range(len(input) - 1):
    for n in input:
        for x in range(len(input) - 1):
            if n == input[i + (x + 1)]:
                input[i + (x + 1)] = []
print(input)
