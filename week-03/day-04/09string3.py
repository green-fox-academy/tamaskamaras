# Given a string, compute recursively a new string where all the
# adjacent chars are now separated by a "*".
text ="asdfqertg"

def adjacent(text):
    if text == "":
        return ""
    else:
        return text[0] + "*" + adjacent(text[1:])

print(adjacent(text))