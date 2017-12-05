# Create a method that decrypts the duplicated-chars.txt

# def decrypt(file_name):
#     duplicated-chars = open("duplicated-chars.txt", "r")
#     lines = duplicated-chars.readlines()
#     for line in lines:
#         for i in range(len(line)


############################


line = "TThhee  ZZeenn  ooff  PPyytthhoonn"
new = ""

for i in range(len(line) - 1):
    if line[i] != line[i + 1]:
        new += line[i]

print(new)
