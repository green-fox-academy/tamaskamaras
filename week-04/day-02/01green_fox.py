class Person(object):

    def __init__(self, name = 'Jane Doe', age = 30, gender = 'female'):
        self.name = name
        self.age = age
        self.gender = gender
    
    def introduce(self):
        print('Hi, I\'m {} a {} years old {}'.format(self.name, self.age, self.gender))

    def get_goal(self):
        print('My goal is: Live for the moment!')
    
class Student(Person):
    
    def __init__(self, name = 'Jane Doe', age = 30, gender = 'female', previous_organization = 'The School of Life', skipped_days = 0):
        super().__init__(name, age, gender)
        self.previous_organization = previous_organization
        self.skipped_days = skipped_days

    def get_goal(self):
        print('Be a junior software developer.')
    
    def introduce(self):
        print('Hi, I\'m {} a {} years old {} from {} who skipped {} days'.format(self.name, self.age, self.gender, self.previous_organization, self.skipped_days))

    def skip_days(self, number_of_days):
        self.skipped_days += number_of_days

class Mentor(Person):

    def __init__(self, name = 'Jane Doe', age = 30, gender = 'female', level = 'intermediate'):
        super().__init__(name, age, gender)
        self.level = level
    
    def get_goal(self):
        print('Educate brilliant junior software developers.')

    def introduce(self):
        print('Hi, I\'m {} a {} years old {} {} mentor'.format(self.name, self.age, self.gender, self.level))

class Sponsor(Person):

    def __init__(self, name = 'Jane Doe', age = 30, gender = 'female', company = 'Google', hired_students = 0):
        super().__init__(name, age, gender)
        self.company = company
        self.hired_students = hired_students
    
    def introduce(self):
        print('Hi, I\'m {} a {} years old {} who represents {} and hired {} students'.format(self.name, self.age, self.gender, self.company, self.hired_students))

    def hire(self):
        self.hired_students += 1
    
    def get_goal(self):
        print('Hire brilliant junior software developers.')

class PallidaClass(object):

    def __init__(self, class_name, students = [], mentors = []):
        self.class_name = class_name
        self.students = students
        self.mentors = mentors
    
    def add_student(self, student):
        self.students.append(student)

    def add_mentor(self, mentor):
        self.mentors.append(mentor)
    
    def info(self):
        print('Pallida {} class has {} students and {} mentors'.format(self.class_name, len(self.students), len(self.mentors))) 

# person1 = Person()
# person1.introduce()
# person1.get_goal()

# student1 = Student()
# student1.introduce()
# student1.get_goal()

# mentor1 = Mentor()
# mentor1.introduce()
# mentor1.get_goal()

# sponsor1 = Sponsor()
# sponsor1.hire()
# sponsor1.introduce()
# sponsor1.get_goal()

# pallida1 = PallidaClass('Cool')
# pallida1.add_student(student1)
# pallida1.add_mentor(mentor1)
# pallida1.info()

people = []

mark = Person('Mark', 46, 'male')
people.append(mark)
jane = Person()
people.append(jane)
john = Student('John Doe', 20, 'male', 'BME')
people.append(john)
student = Student()
people.append(student)
gandhi = Mentor('Gandhi', 148, 'male', 'senior')
people.append(gandhi)
mentor = Mentor()
people.append(mentor)
sponsor = Sponsor()
elon = Sponsor('Elon Musk', 46, 'male', 'SpaceX')
people.append(elon)
student.skip_days(3)

for i in range(5):
    elon.hire()

for i in range(3):
    sponsor.hire()

for member in people:
    member.introduce()
    member.get_goal()

badass = PallidaClass('BADA55')
badass.add_student(student);
badass.add_student(john);
badass.add_mentor(mentor);
badass.add_mentor(gandhi);
badass.info();