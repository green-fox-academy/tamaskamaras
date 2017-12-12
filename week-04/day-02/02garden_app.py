class Garden(object):

    def __init__(self, color, water_amount = 0, water_absorbtion = 0):
        self.color = color
        self.water_amount = water_amount
        self.water_absorbtion = water_absorbtion

    def watering(self, plants, unit):
        self.water_amount += (unit / plants) * self.water_absorbtion
    
class Flowers(Garden):

    def __init__(self, color, water_amount = 0, water_absorbtion = 0.75):
        super().__init__(color, water_amount = 0, water_absorbtion = 0)
        self.water_absorbtion = water_absorbtion

    def show(self):
        if self.water_amount < 5:
            print('The {} Flower needs water'.format(self.color))
        else:
            print('The {} Flower doesn\'t need water'.format(self.color))

    def current_water(self):
        return self.water_amount

class Trees(Garden):

    def __init__(self, color, water_amount = 0, water_absorbtion = 0.4):
        super().__init__(color, water_amount = 0, water_absorbtion = 0)
        self.water_absorbtion = water_absorbtion
    
    def show(self):
        if self.water_amount < 10:
            print('The {} Tree needs water'.format(self.color))
        else:
            print('The {} Tree doesn\'t need water'.format(self.color))
    
    def current_water(self):
        return self.water_amount

flower1 = Flowers('yellow')
flower2 = Flowers('blue')
tree1 = Trees('purple')
tree2 = Trees('orange')

flower1.show()
flower2.show()
tree1.show()
tree2.show()

plants = 0
if flower1.current_water() < 5:
    plants += 1
if flower2.current_water() < 5:
    plants += 1
if tree1.current_water() < 10:
    plants += 1
if tree2.current_water() < 10:
    plants += 1

print('\nWatering with 40')

flower1.watering(plants, 40)
flower2.watering(plants, 40)
tree1.watering(plants, 40)
tree2.watering(plants, 40)

flower1.show()
flower2.show()
tree1.show()
tree2.show()

plants = 0
if flower1.current_water() < 5:
    plants += 1
if flower2.current_water() < 5:
    plants += 1
if tree1.current_water() < 10:
    plants += 1
if tree2.current_water() < 10:
    plants += 1

print('\nWatering with 70')

flower1.watering(plants, 70)
flower2.watering(plants, 70)
tree1.watering(plants, 70)
tree2.watering(plants, 70)

flower1.show()
flower2.show()
tree1.show()
tree2.show()
