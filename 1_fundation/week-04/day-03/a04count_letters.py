class CountLetters():

    def count_letters(self, text):
        self.letter_set = {}
        self.text = text
        for letter in self.text:
            if letter not in self.letter_set:
                self.letter_set[letter] = 1
            else:
                self.letter_set[letter] += 1
        return self.letter_set
