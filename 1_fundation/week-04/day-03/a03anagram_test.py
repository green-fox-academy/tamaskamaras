import unittest
from a03anagram import Anagram

my_anagram = Anagram()

class TestAnagram(unittest.TestCase):

    def test_equal_amount(self):
        self.assertEqual(my_anagram.anagram('listen', 'silent'), True)

    def test_different_length(self):
        self.assertEqual(my_anagram.anagram('listenn', 'listen'), False)

    def test_identical_text(self):
        self.assertEqual(my_anagram.anagram('listen', 'listen'), True)

if __name__ == '__main__':
    unittest.main()