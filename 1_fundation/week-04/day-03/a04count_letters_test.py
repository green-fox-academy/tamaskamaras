import unittest
from a04count_letters import CountLetters

my_object = CountLetters()

class TestLetterCount(unittest.TestCase):
    
    def test_single_letters(self):
        self.assertEqual(my_object.count_letters('asdf'), {'a': 1, 's': 1, 'd': 1, 'f': 1})
    
    def test_multiple_same_letters(self):
        self.assertEqual(my_object.count_letters('aasd'), {'a': 2, 's': 1, 'd': 1})
    
    def test_empty_string(self):
        self.assertEqual(my_object.count_letters(''), {})

if __name__ == '__main__':
    unittest.main()
