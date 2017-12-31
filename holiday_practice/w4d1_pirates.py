import random

class Pirate(object):
    def __init__(self, name):
        self.name = name
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

class Captain(Pirate):
    pass

class Ship(object):
    def __init__(self):
        self.pirates = []

    def fill_ship(self):
        captain = Captain('Captain')
        self.pirates.append(captain)
        for i in range(1, random.randint(2, 20)):
            name = 'Pirate' + str(i)
            pirate = Pirate(name)
            self.pirates.append(pirate)

ship = Ship()
ship.fill_ship()


# for item in ship.pirates:
#     print(item.name)

