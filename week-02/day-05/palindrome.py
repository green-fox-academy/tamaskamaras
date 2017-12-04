text = "dog goat dad duck doodle never"

def search_palindrome(text):
    palindrome = ""
    for i in range(len(text) - 2):
        if text[i] == text[i + 2]:
            palindrome += text[i]
            palindrome += text[i + 1]
            palindrome += text[i + 2]
            palindrome += ", "
    return palindrome

    print(palindrome)
print(search_palindrome("dog goat dad duck doodle never"))