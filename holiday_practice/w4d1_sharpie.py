class Sharpie(object):

    def __init__(self, color, width):
        self.color = color
        self.width = float(width)
        self.ink_amount = float(100)

    def use(self):
        self.ink_amount -= 10

sharpie1 = Sharpie('red', 1.1)
sharpie1.use()
sharpie2 = Sharpie('yellow', 1.2)
