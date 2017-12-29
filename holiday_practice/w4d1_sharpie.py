class Sharpie(object):

    def __init__(self, color, width):
        self.color = color
        self.width = float(width)
        self.ink_amount = float(100)

    def use(self):
        self.ink_amount -= 10

sharpie = Sharpie('red', 1.1)
sharpie.use()
