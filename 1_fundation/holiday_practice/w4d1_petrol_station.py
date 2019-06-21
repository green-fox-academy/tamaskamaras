class Station(object):

    def __init__(self, gas_amount):
        self.gas_amount = gas_amount
    
    def refill(self, car):
        if car.gas_amount < car.capacity:
            car.gas_amount += car.capacity
            self.gas_amount -= car.capacity 

class Car(object):

    def __init__(self, gas_amount = 0, capacity = 100):
        self.gas_amount = gas_amount
        self.capacity = capacity

car = Car()

station = Station(1000)
station.refill(car)
