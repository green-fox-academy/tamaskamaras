# Check if list contains all of the following elements: 4,8,12,16
# Create a function that accepts list_of_numbers as an input
# it should return "True" if it contains all, otherwise "False"

list_of_numbers = [2, 4, 6, 8, 10, 12, 14, 16]

input_numbers = [4, 8, 12, 16]

def match_checker(list_of_numbers):
    for num in input_numbers:
        for stack in list_of_numbers:
            if num == stack:
                result = True
            else:
                result = False
    return result

print(match_checker(list_of_numbers))