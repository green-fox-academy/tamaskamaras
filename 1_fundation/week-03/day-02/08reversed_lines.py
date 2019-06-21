# Create a method that decrypts reversed-lines.txt

def decrypt(file_name):
    reverse = open(file_name, "r")
    rev = reverse.readlines()
    for line in rev:
        newline = ""
        for i in range(len(line) - 1, -1, -1):
            newline += line[i]
        newline += "\n"
        simple = open("simple_lines.txt", "a")
        simple.write(newline)
    reverse.close()
    simple.close()

decrypt("reversed-lines.txt")
