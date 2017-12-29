class Student(object):

    def learn(self):
        pass
    
    def question(self, teacher):
        teacher.answer()

class Teacher(object):

    def answer(self):
        pass

    def teach(self, student):
        student.learn()
