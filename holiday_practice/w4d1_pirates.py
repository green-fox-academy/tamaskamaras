import random

class Pirate(object):
    def __init__(self):
        self.state = 'Awake'
        self.drinks = 0
    
    def drink_sum_rum(self):
        if self.state == 'Dead':
            return print('He\'s dead!')
        else:
            self.drinks += 1
    
    def hows_it_going_mate(self):
        if self.state == 'Dead':
            return print('He\'s dead!')
        elif self.drinks <= 4:
            return print('Pour me anudder!')
        else:
            self.state = 'Passed out'
            return print('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?')
    
    def die(self):
        self.state = 'Dead'
    
    def brawl(self, enemy):
        if enemy.state != 'Dead':
            if randint(1, 3) == 1:
                self.state = 'Dead'
            elif randint(1, 3) == 2:
                enemy.state = 'Dead'
            else:
                self.state = 'Dead'
                enemy.state = 'Dead'

pirate1 = Pirate()
pirate2 = Pirate()
