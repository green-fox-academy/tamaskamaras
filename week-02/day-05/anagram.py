# def anagram(word1, word2):
#     if len(word1) != len(word2):
#         output = False
#         if output != False:
#             a = []
#             b = []
#             for i in range(len(word1)):
#                 a.append(word1[i])
#                 b.append(word2[i])
#             return a, b
#             print(a, b)
# word1 = str(input("Type a word: "))
# word2 = str(input("Type an anagram: "))
# print(anagram(word1, word2))



word1 = str(input("Type a word: "))
word2 = str(input("Type an anagram: "))
if len(word1) == len(word2):
    quantity = True
if quantity == True:
    a = []
    b = []
    temp = []
    for i in range(len(word1)):
        a.append(word1[i])
        b.append(word2[i])
    for x in a:
        for y in b:
            if x == y:
                temp.append(True)
                if len(temp) == len(a):
                    output = True
                else:
                    output = False

print(output)