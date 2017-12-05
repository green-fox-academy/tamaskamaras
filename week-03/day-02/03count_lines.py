# Write a function that takes a filename as string,
# then returns the number of lines the file contains.
# It should return zero if it can't open the file, and
# should not raise any error.

def count_lines(filename):
    try:
        sum = 0
        lines = open(filename, "r")
        for line in lines:
            sum += 1
        return sum
    except FileNotFoundError:
        return 0
        
print(count_lines("my-file.txt"))
