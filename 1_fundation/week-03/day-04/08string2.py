# Given a string, compute recursively a new string where all the 'x' chars have been removed.

text = "123x123x123x123"

def remove(text):
    if text == "":
        return ""
    elif text[0] == "x":
        return "" + remove(text[1:])
    elif text[0] != "x":
        return text[0] + remove(text[1:])

print(remove(text))