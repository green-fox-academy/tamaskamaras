import w4d1_sharpie

class SharpieSet(object):
    def __init__(self):
        self.sharpies = []
    
    def count_usable(self, sharpie):
        if sharpie.ink_amount > 0:
            self.sharpies.append(sharpie)
    
    def remove_trash(self):
        for i in range(len(self.sharpies)):
            if self.sharpies[i].ink_amount == 0:
                self.sharpies[i] = []

set = SharpieSet()
set.count_usable(w4d1_sharpie.sharpie1)
set.count_usable(w4d1_sharpie.sharpie2)

w4d1_sharpie.sharpie1.use()
w4d1_sharpie.sharpie1.use()
w4d1_sharpie.sharpie1.use()
w4d1_sharpie.sharpie1.use()
w4d1_sharpie.sharpie1.use()
w4d1_sharpie.sharpie1.use()
w4d1_sharpie.sharpie1.use()
w4d1_sharpie.sharpie1.use()
w4d1_sharpie.sharpie1.use()

set.remove_trash()
