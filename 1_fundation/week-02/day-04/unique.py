# Create a function that takes a list of numbers as a parameter
# Returns a list of numbers where every number in the list occurs only once
# Example:
# input: [1, 11, 34, 11, 52, 61, 1, 34]
# output: [1, 11, 34, 52, 61]


def unique(input):
    output = []
    for number in input:
        if number not in output:
            output.append(number)
    return output

input = [1, 11, 34, 11, 52, 61, 1, 34]

print(unique(input))