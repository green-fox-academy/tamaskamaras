import unittest
import unique_chars

class TestUnique(unittest.TestCase):

    def test_multi_unique(self):
        self.assertEqual(unique_chars.unique_characters('anagram'), ["n", "g", "r", "m"])
    
    def test_single_unique(self):
        self.assertEqual(unique_chars.unique_characters('anaaaaa'), ['n'])
    
    def test_many_multi_chars(self):
        self.assertEqual(unique_chars.unique_characters('anagramm'), ["n", "g", "r"])

if __name__ == '__main__':
    unittest.main()
