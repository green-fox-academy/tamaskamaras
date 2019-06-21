import unittest
from a02sum import SumClass

my_sum = SumClass()

class TestSum(unittest.TestCase):

    def test_sum_of_elements(self):
        self.assertEqual(my_sum.sum_method([21, 43, 2, 92, 8, 17]), 183)
    
    def test_empty_list(self):
        self.assertEqual(my_sum.sum_method([]), 0)
    
    def test_one_element(self):
        self.assertEqual(my_sum.sum_method([5]), 5)
    
    def test_multiple_elements(self):
        self.assertEqual(my_sum.sum_method([1, 1, 1]), 3)
    
    def test_null_element(self):
        self.assertEqual(my_sum.sum_method([0]), 0)

if __name__ == '__main__':
    unittest.main()