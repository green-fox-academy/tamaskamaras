class Animal():

    def __init__(self, name):
        self.name = name
        self.hunger = 50
        self.thirst = 50
    
    def eat(self):
        self.hunger -= 1
    
    def drink(self):
        self.thirst -= 1
    
    def play(self):
        self.hunger += 1
        self.thirst += 1

    def __str__(self):
        return ('{}\'s hungar: {}, thirst: {}.'.format(self.name, self.hunger, self.thirst))

animal1 = Animal('Bloki')
animal1.eat()
animal1.drink()

animal1.play()
animal1.play()

print(animal1)
