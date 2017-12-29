import unittest
from w4d2_greenfox import Person

mark = Person('Mark', 46, 'male')

class TestText(unittest.TestCase):
    def test_string(self):
        self.assertEqual(mark.introduce(), 'Hi, I\'m Mark, a 46 year old male')

if __name__ == '__main__':
    unittest.main()
