class Pirate(object):
    def __init__(self):
        self.state = 'Awake'
        self.drinks = 0
    
    def drink_sum_rum(self):
        self.drinks += 1
    
    def hows_it_going_mate(self):
        if self.drinks <= 4:
            return print('Pour me anudder!')
        else:
            self.state = 'Passed out'
            return print('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?')
