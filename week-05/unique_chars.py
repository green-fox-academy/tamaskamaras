# Create a function called `unique_characters` that takes a string as parameter
# and returns a list with the unique letters of the given string
# Create basic unit tests for it with at least 3 different test cases
# Should print out:
# ["n", "g", "r", "m"]

def unique_characters(text):
    uniques = []
    for char in text:
        temp = 0
        for i in range(len(text)):
            if char == text[i]:
                temp += 1
        if temp == 1:
            uniques.append(char)
    return uniques

print(unique_characters("anagram"))