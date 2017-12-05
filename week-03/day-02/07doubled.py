# Create a method that decrypts the duplicated-chars.txt

def decrypt(file_name):
    duplicated = open(file_name, "r")
    dupli = duplicated.readlines()
    for line in dupli:
        newline = ""
        for i in range(len(line) - 1):
            if line[i] != line[i + 1]:
                newline += line[i]
        newline += "\n"
        simplified_chars = open("simplified_chars.txt", "a")
        simplified_chars.write(newline)
    duplicated.close()
    simplified_chars.close()

decrypt("duplicated-chars.txt")

###########################


# line = "TThhee  ZZeenn  ooff  PPyytthhoonn"
# new = ""

# for i in range(len(line) - 1):
#     if line[i] != line[i + 1]:
#         new += line[i]

# print(new)


# ##########################

# duplicatedchars = open("duplicated-chars.txt", "r")
# lines = duplicatedchars.readlines()
# print(lines)