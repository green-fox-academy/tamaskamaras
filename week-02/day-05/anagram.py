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
    output = True
if output == True:
    a = []
    b = []
    for i in range(len(word1)):
        a.append(word1[i])
        b.append(word2[i])

    print(a, b)