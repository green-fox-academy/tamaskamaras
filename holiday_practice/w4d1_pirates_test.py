import unittest
from w4d1_pirates import Pirate


class TestPirates(unittest.TestCase):

    def setUp(self):
        self.object = Pirate()

    def test_drinks(self):
        self.object.drink_sum_rum()
        self.assertEqual(self.object.drinks, 1)

if __name__ == '__main__':
    unittest.main()
