import random

class Dice(object):

    def __init__(self):
        self.dice = [0, 0, 0, 0, 0, 0]

    def roll(self):
        for i in range(len(self.dice)):
            self.dice[i] = random.randint(1,6)
        return self.dice

    def get_current(self, index = None):
        if index != None:
            return self.dice[index]
        else:
            return self.dice

    def reroll(self, index = None):
        for i in range(len(self.dice)):
            if self.dice[i] == 6:
                self.dice[i] == 6
            else:
                while self.dice[i] != 6:
                    self.dice[i] = random.randint(1,6)
                    if self.dice[i] == 6:
                        self.dice[i] == 6

dice = Dice()
print(dice.get_current())
dice.roll()
print(dice.get_current())
dice.reroll()
print(dice.get_current())
