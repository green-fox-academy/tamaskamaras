
## 4. Question time! [4p]

### What is the difference between class variable and instance variable? [2p]

#### Your answer:
The class variable is always applied for every objects of every subclasses and the value of it is constant.
The instance variable can be unique for every object and it can be set either by parameters (when we instantiate an object) or by the constructor(s).
The class variable is specified above the constructor while the instance variable is below that.

### Write an example use case for both! [2p]
#### Static variable:

class Car(object):

    number_of_wheels = 4

    def __init__(self, type):
        self.type = type

car1 = Car('Ford')
car2 = Car('Toyota')
car3 = Car('Trabant')
print(car1.number_of_wheels)

#### Instance variable:

class Vehicle(object):
    def __init_ _(self, type, wheels):
        self.type = type
        self.wheels = wheels

vehicle1 = Vehicle('Car', 4)
vehicle2 = Vehicle('Bicycle', 2)
vehicle3 = Vehicle('Ship', 0)
