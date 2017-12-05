# Create a method that decrypts reversed-order.txt

def decrypt(file_name):
    source_file = open(file_name, "r")
    source = source_file.readlines()
    result = ""
    for i in range(len(source) - 1, -1, -1):
        result += source[i]
    res = open("result_order.txt", "a")
    res.write(result)
    source_file.close()
    res.close()

decrypt("reversed-order.txt")
