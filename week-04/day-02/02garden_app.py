class Garden(object):

    def __init__(self, color, water_amount = 0, water_absorbtion = 0):
        self.color = color
        self.water_amount = water_amount
        self.water_absorbtion = water_absorbtion

    def show(self):
        print('The {} Flower {}'.format(self.color, self.water_amount))

class Flowers(Garden):

    def __init__(self, color, water_amount = 0, water_absorbtion = 0.75):
        super().__init__(color, water_amount = 0, water_absorbtion = 0)
        self.water_absorbtion = water_absorbtion

class Trees(Garden):

    def __init__(self, color, water_amount = 0, water_absorbtion = 0.4):
        super().__init__(color, water_amount = 0, water_absorbtion = 0)
        self.water_absorbtion = water_absorbtion

flower1 = Flowers('yellow')
flower2 = Flowers('blue')
tree1 = Trees('purple')
tree1 = Trees('orange')

flower1.show()
