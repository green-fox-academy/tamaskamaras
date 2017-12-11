class Person():

    def __init__(self, name, age, gender):
        self.name = name,
        self.age = int(age),
        self.gender = gender
    
    def introduce(self):
        print('Hi, I\'m {} a {} years old {}'.format(self.name, self.age, self.gender))

    def get_goal(self):
        print('My goal is: Live for the moment!')
    
    def __str__(self):
        return ('{}{}{}'.format(self.name, self.age, self.gender))

class Student():

    def __init__(self, name, age, gender, org, days):
        self.name = name,
        self.age = int(age),
        self.gender = gender,
        self.previous_organization = org,
        self.skipped_days = days,
    
    def introduce(self):
        print('Hi, I\'m {} a {} years old {} from {}, who skipped {} days from the course already.'.format(self.name, self.age, self.gender, self.previous_organization, self.skipped_days))

    def get_goal(self):
        print('Be a junior software developer.')

    def skip_days(number_of_days):
        self.skipped_days += number_of_days
    
    def __str__(self):
        return ('{}{}{}{}'.format(self.name, self.age, self.gender, self.previous_organization))

class Mentor():

    def __init__(self, name, age, gender, level):
        self.name = name,
        self.age = int(age),
        self.gender = gender
        self.level = level
    
    def introduce(self):
        print('Hi, I\'m {} a {} years old {} {} mentor.'.format(self.name, self.age, self.gender, self.level))

    def get_goal(self):
        print('Educate brilliant junior software developers.')

class Sponsor():

    def __init__(self, name, age, gender, company, hired_students = 0):
        self.name = name,
        self.age = int(age),
        self.gender = gender,
        self.company = company,
        self.hired_students = hired_students
    
    def introduce(self):
        print('Hi, I\'m {} a {} years old {} who represents {} and hired {} students so far.'.format(self.name, self.age, self.gender, self.company, self.hired_students))

    def get_goal(self):
        print('Hire brilliant junior software developers.')
    
    def hire(self):
        self.hired_students += 1

person1 = Person('Jane Doe', 30, 'female')
person1.introduce()
person1.get_goal()

student1 = Student('Jane Doe', 30, 'female', 'The School of Life', 0)
student1.introduce()

mentor1 = Mentor('Jane Doe', 30, 'female', 'intermediate')
mentor1.introduce()

sponsor1 = Sponsor('Jane Doe', 30, 'female', 'Google')
sponsor1.introduce()

people = []

mark = Person('Mark', 46, 'male')
people.append(mark)
john = Student('John Doe', 20, 'male', 'BME', 0)
people.append(john)
gandhi = Mentor('Gandhi', 148, 'male', 'senior')
people.append(gandhi)
elon = Sponsor('Elon Musk', 46, 'male', 'SpaceX')

for i in range(5):
    elon.hire()

for member in people:
    member.introduce()
    member.get_goal()
