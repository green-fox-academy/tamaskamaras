# Write a function that copies a file to an other
# It should take the filenames as parameters
# It should return a boolean that shows if the copy was successful

def copy_file(filename1, filename2):
    try:
        copy = open(filename1, "r")
        file2 = open(filename2, "w")
        file2.write(copy.read())
        copy.close()
        file2.close()
        return True
    except:
        return False

filename1 = "C:/Users/K/Desktop/greenfox/tamaskamaras/week-03/day-02/my-file.txt"
filename2 = "C:/Users/K/Desktop/greenfox/tamaskamaras/week-03/day-02/my-file1.txt"

print(copy_file(filename1, filename2))