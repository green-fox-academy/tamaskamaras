# Create a method that decrypts the duplicated-chars.txt

def decrypt(file_name):
    duplicated = open(file_name, "r")
    dupli = duplicated.readlines()
    for line in dupli:
        newline = ""
        for i in range(len(line) - 1):
            if i % 2 != 0:
                newline += line[i]
        newline += "\n"
        simplified_chars = open("simplified_chars.txt", "a")
        simplified_chars.write(newline)
    duplicated.close()
    simplified_chars.close()

decrypt("duplicated-chars.txt")
