import unittest
from a01apple import Apple

apple_object = Apple()

class TestString(unittest.TestCase):
    
    def test_string_equal(self):
        self.assertEqual(apple_object.get_apple(), 'apple')

if __name__ == '__main__':
    unittest.main()