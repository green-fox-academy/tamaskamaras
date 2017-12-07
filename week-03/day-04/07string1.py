# Given a string, compute recursively (no loops) a new string where all the
# lowercase 'x' chars have been changed to 'y' chars.

def string1(text):
    if text == "":
        return ""
    elif text[0] == "x":
        return "y" + string1(text[1:])
    elif text[0] != "x":
        return text[0] + string1(text[1:])

text = "...x...x...x...x...x"

print(string1(text))


##############################

# text = "...x...x...x...x...x"

# def string1(text):
#     if text[n] == "x":
#         newtext += "y"
#     elif text[n] != "x":
#         newtext += text[n]
#     elif text[n] == "":
#         return 
#     else:
#         return string1(text[n + 1])

#     print(newtext)

# string1(text)