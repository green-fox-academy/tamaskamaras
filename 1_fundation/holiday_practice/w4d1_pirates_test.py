import unittest
from w4d1_pirates import *

class TestPirates(unittest.TestCase):

    def setUp(self):
        self.object = Pirate('Pirate1')
        self.enemy_pirate = Pirate('Pirate2')
        self.ship1 = Ship()
        self.ship2 = Ship()

    def test_drinks(self):
        self.object.drink_sum_rum()
        self.assertEqual(self.object.drinks, 1)

    def test_5_drinks(self):
        self.object.drink_sum_rum()
        self.object.drink_sum_rum()
        self.object.drink_sum_rum()
        self.object.drink_sum_rum()
        self.object.drink_sum_rum()
        self.assertEqual(self.object.drinks, 5)
    
    def test_ask(self):
        self.assertEqual(self.object.hows_it_going_mate(), 'Pour me anudder!')

    def test_passed_out(self):
        self.object.drink_sum_rum()
        self.object.drink_sum_rum()
        self.object.drink_sum_rum()
        self.object.drink_sum_rum()
        self.object.drink_sum_rum()
        self.assertEqual(self.object.state, 'Passed out')

    def test_hows_going(self):
        self.object.drink_sum_rum()
        self.object.drink_sum_rum()
        self.object.drink_sum_rum()
        self.object.drink_sum_rum()
        self.object.drink_sum_rum()
        self.assertEqual(self.object.hows_it_going_mate(), 'Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?')
    
    def test_dead(self):
        self.object.state = 'Dead'
        self.assertEqual(self.object.drink_sum_rum(), 'He\'s dead!')
    
    def test_die(self):
        self.object.die()
        self.assertEqual(self.object.state, 'Dead')
    
    # def test_brawl_self(self):
    #     self.object.brawl(self.enemy_pirate)
    #     self.assertEqual(self.object.state, 'Awake')

    # def test_brawl_enemy(self):
    #     self.object.brawl(self.enemy_pirate)
    #     self.assertEqual(self.enemy_pirate.state, 'Dead')
    
if __name__ == '__main__':
    unittest.main()
