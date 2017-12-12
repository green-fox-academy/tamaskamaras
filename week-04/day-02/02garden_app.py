class Garden(object):

    def __init__(self, color, water_amount = 0, water_absorbtion = 0):
        self.color = color
        self.water_amount = water_amount
        self.water_absorbtion = water_absorbtion

class Flowers(Garden):

    def __init__(self, color, water_amount = 0, water_absorbtion = 0.75):
        super().__init__(color, water_amount = 0, water_absorbtion = 0)
        self.water_absorbtion = water_absorbtion

    def show(self):
        if self.water_amount < 5:
            print('The {} Flower needs water'.format(self.color))
        else:
            print('The {} Flower doesnt need water'.format(self.color))

class Trees(Garden):

    def __init__(self, color, water_amount = 0, water_absorbtion = 0.4):
        super().__init__(color, water_amount = 0, water_absorbtion = 0)
        self.water_absorbtion = water_absorbtion
    
    def show(self):
        if self.water_amount < 10:
            print('The {} Tree needs water'.format(self.color))
        else:
            print('The {} Tree doesnt need water'.format(self.color))  

flower1 = Flowers('yellow')
flower2 = Flowers('blue')
tree1 = Trees('purple')
tree2 = Trees('orange')

flower1.show()
flower2.show()
tree1.show()
tree2.show()
