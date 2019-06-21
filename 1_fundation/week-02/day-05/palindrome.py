text = "dog goat dad duck doodle never"

def search_palindrome(text):
    palindrome = ""
    for i in range(len(text) - 4):
        if text[i] == text[i + 2]:
            palindrome += text[i]
            palindrome += text[i + 1]
            palindrome += text[i + 2]
            palindrome += ", "
        if text[i] == text[i + 4] and text[i + 1] == text[i + 3]:
            palindrome += text[i]
            palindrome += text[i + 1]
            palindrome += text[i + 2]
            palindrome += text[i + 3]
            palindrome += text[i + 4]
            palindrome += ", "
    return palindrome

    print(palindrome)
print(search_palindrome(text))