from a06animal import Animal

animal1 = Animal('Goat')
animal2 = Animal('Chicken')
animal3 = Animal('Cow')
animal4 = Animal('Turtle')
animal5 = Animal('Turkey')

animal2.eat()
animal4.eat()
animal4.eat()

class Farm(object):

    def __init__(self):
        self.animals = [animal1, animal2, animal3, animal4, animal5]
        self.capacity = 8
    
    def breed(self):
        if len(self.animals) < self.capacity:
            new_animal = Animal('New animal')
            self.animals.append(new_animal)

    def slaughter(self):
        min_hunger = self.animals[0].hunger
        index = 0
        for i in range(len(self.animals)):
            if self.animals[i].hunger < min_hunger:
                index = i
        self.animals.pop(index)    

farm = Farm()
farm.breed()
farm.slaughter()
