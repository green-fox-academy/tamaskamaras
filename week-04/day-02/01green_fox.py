class Person(object):

    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender
    
    def introduce(self):
        print('Hi, I\'m {} a {} years old {}'.format(
            self.name, self.age, self.gender
            ))

    def get_goal(self):
        print('My goal is: Live for the moment!')
    
class Student(Person):
    
    def __init__(self, name, age, gender, previous_organization, skipped_days):
        super().__init__(name, age, gender)
        self.previous_organization = previous_organization
        self.skipped_days = skipped_days

    def get_goal(self):
        print('Be a junior software developer.')
    
    def introduce(self):
        print('Hi, I\'m {} a {} years old {} from {} who skipped {} days'.format(self.name, self.age, self.gender, self.previous_organization, self.skipped_days))

class Mentor(Person):

    def __init__(self, name, age, gender, level):
        super().__init__(name, age, gender)
        self.level = level
    
    def get_goal(self):
        print('Educate brilliant junior software developers.')

    def introduce(self):
        print('Hi, I\'m {} a {} years old {} {} mentor'.format(self.name, self.age, self.gender, self.level))

class Sponsor(Person):

    def __init__(self, name, age, gender, company, hired_students):
        super().__init__(name, age, gender)
        self.company = company
        self.hired_students = hired_students
    
    def introduce(self):
        print('Hi, I\'m {} a {} years old {} who represents {} and hired {} students'.format(self.name, self.age, self.gender, self.company, self.hired_students))

    def hire(self):
        self.hired_students += 1
    
    def get_goal(self):
        print('Hire brilliant junior software developers.')

class PallidaClass():

    def __init__(self, class_name):
        self.class_name = class_name
        self.students = []
        self.mentors = []
    
    def add_student(self, student):
        self.students.append(student)

    def add_mentor(self, mentor):
        self.mentors.append(mentor)
    
    def info(self):
        print('Pallida {} class has {} students and {} mentors'.format(self.class_name, len(self.students), len(self.mentors))) 

person1 = Person('Jane Doe', 30, 'female')
person1.introduce()
person1.get_goal()

student1 = Student('Jane Doe', 30, 'female', 'The School of Life', 0)
student1.introduce()
student1.get_goal()

mentor1 = Mentor('Jane Doe', 30, 'female', 'intermediate')
mentor1.introduce()
mentor1.get_goal()

sponsor1 = Sponsor('Jane Doe', 30, 'female', 'Google', 0)
sponsor1.hire()
sponsor1.introduce()
sponsor1.get_goal()

pallida1 = PallidaClass('Cool')
pallida1.add_student(student1)
pallida1.add_mentor(mentor1)
pallida1.info()
