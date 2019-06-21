class Anagram():

    def anagram(self, text1, text2):
        if len(text1) != len(text2):
            return False
        a = sorted(text1)
        b = sorted(text2)
        for letter1 in a:
            for letter2 in b:
                if letter1 == letter2:
                    return True
                else:
                    return False