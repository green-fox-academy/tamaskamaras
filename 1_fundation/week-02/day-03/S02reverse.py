# Create a function called 'reverse_string' which takes a string as a parameter
# The function reverses it and returns with the reversed string


reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI"

k = len(reversed)
result = ""

for i in reversed:
    result += reversed[k - 1]
    k -= 1
reversed = result
print(reversed)
    