# Open a file called "my-file1.txt"
# Write your name in it as a single line
# If the program is unable to write the file,
# then it should print an error message like: "Unable to write file: my-file.txt"

try:
    openfile = open("my-file1.txt", "r")
    openfile.write("Tamas Kamaras")
    openfile.close()
except:
    print("Unable to write file: my-file1.txt")