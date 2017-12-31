import random

class Pirate(object):
    def __init__(self):
        self.state = 'Awake'
        self.drinks = 0
        self.parrot = 'Parrot'
    
    def drink_sum_rum(self):
        if self.state == 'Dead':
            return 'He\'s dead!'
        else:
            self.drinks += 1
            if self.drinks > 4:
                self.state = 'Passed out'
    
    def hows_it_going_mate(self):
        if self.state == 'Dead':
            return 'He\'s dead!'
        elif self.drinks <= 4:
            return 'Pour me anudder!'
        else:
            return 'Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?'
    
    def die(self):
        self.state = 'Dead'
    
    def brawl(self, enemy):
        if enemy.state != 'Dead':
            rand = random.randint(1, 3)
            if rand == 1:
                self.state = 'Dead'
            elif rand == 2:
                enemy.state = 'Dead'
            else:
                self.state = 'Dead'
                enemy.state = 'Dead'
        else:
            return 'Your enemy is already dead!'
