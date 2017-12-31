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
        self.captain = Captain('Captain')
        self.pirates.append(self.captain)
        for i in range(1, random.randint(2, 20)):
            name = 'Pirate' + str(i)
            pirate = Pirate(name)
            self.pirates.append(pirate)

    def calc_score(self):
        return len(self.pirates) - self.captain.drinks

    def battle(self, enemy_ship):
        self.enemy = enemy_ship
        if self.calc_score() > self.enemy.calc_score():
            self.result = True 
            i = random.randint(1, len(self.enemy.pirates) - 1)
            del self.enemy.pirates[i:]
            return True
        self.result = False
        i = random.randint(1, len(self.pirates) - 1)
        del self.pirates[i:]
        return False
    
    def party(self):
        if self.result:
            for pirate in self.pirates:
                for i in range(1, random.randint(1, len(self.pirates))):
                    pirate.drink_sum_rum()
        else:
          for pirate in self.enemy.pirates:
                for i in range(1, random.randint(1, len(self.enemy.pirates))):
                    pirate.drink_sum_rum()
  
    def __str__(self):
        sum = 0
        for indiv in self.pirates:
            if indiv.state == 'Awake':
                sum += 1
        return (
            'Captain is ' + self.captain.state.lower() + ' and consumed ' + str(self.captain.drinks) + ' rum.\n'
            'There are ' + str(sum) + ' live pirates on board.'
        )

ship1 = Ship()
ship1.fill_ship()

ship2 = Ship()
ship2.fill_ship()

ship2.battle(ship1)

ship2.party()
