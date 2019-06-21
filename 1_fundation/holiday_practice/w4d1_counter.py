class Counter(object):

    def __init__(self, number = int(0)):
        self.number = number
        self.initial = number
    
    def add(self, addendum = 1):
        self.number += addendum
    
    def get(self):
        return self.number
    
    def reset(self):
        self.number = self.initial
