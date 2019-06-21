import unittest
from a05fibonacci import Fibonacci

my_object = Fibonacci()

class TestFibonacci(unittest.TestCase):
    
    def test_single_digit_numbers(self):
        self.assertEqual(my_object.fibonacci(7), 13)
    
    def test_null_parameter(self):
        self.assertEqual(my_object.fibonacci(0), 0)
    
    def test_empty_parameter(self):
        self.assertEqual(my_object.fibonacci(), 0)

if __name__ == '__main__':
    unittest.main()
