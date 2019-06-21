import unittest
import a06extend

class TestExtend(unittest.TestCase):
    def setUp(self):
        pass

    def test_add_2_and_3_is_5(self):
        self.assertEqual(a06extend.add(2, 3), 5)

    def test_add_4_and_1_is_5(self):
        self.assertEqual(a06extend.add(4, 1), 5)
    
    def test_add_1_and_1_is_2(self):
        self.assertEqual(a06extend.add(1, 1), 2)

    def test_max_of_three_first(self):
        self.assertEqual(a06extend.max_of_three(5, 4, 3), 5)

    def test_max_of_three_third(self):
        self.assertEqual(a06extend.max_of_three(3, 4, 5), 5)
    
    def test_max_of_three_second(self):
        self.assertEqual(a06extend.max_of_three(3, 5, 4), 5)

    def test_median_four(self):
        self.assertEqual(a06extend.median([7,5,3,5]), 5)

    def test_median_five(self):
        self.assertEqual(a06extend.median([1,2,3,4,5]), 3)
    
    def test_median_extrems(self):
        self.assertEqual(a06extend.median([9, 9, 1, 1, 5]), 5)

    def test_is_vovel_a(self):
        self.assertTrue(a06extend.is_vovel('a'))

    def test_is_vovel_u(self):
        self.assertTrue(a06extend.is_vovel('u'))
    
    def test_is_vovel(self):
        self.assertTrue(a06extend.is_vovel('ú'))

    def test_translate_bemutatkozik(self):
        self.assertEqual(a06extend.translate('bemutatkozik'), 'bevemuvutavatkovozivik')

    def test_translate_kolbice(self):
        self.assertEqual(a06extend.translate('kolbice'), 'kovolbiviceve')
    
    def test_translate_alma(self):
        self.assertEqual(a06extend.translate('alma'), 'avalmava')

if __name__ == '__main__':
    unittest.main()