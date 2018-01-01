class Aircraft(object):
    def __init__(self, ammo, max_ammo, base_damage):
        self.ammo = ammo
        self.max_ammo = max_ammo
        self.base_damage = base_damage

    def fight(self):
        damage = self.ammo * self.base_damage
        self.ammo = 0
        return damage
    
    def refill(self, amount):
        remaining = amount - (self.max_ammo - self.ammo)
        self.ammo += amount - remaining
        return remaining

class F16(Aircraft):
    def __init__(self):
        super().__init__(0, 8, 30)

    def get_type(self):
        return 'F16'

class F35(Aircraft):
    def __init__(self):
        super().__init__(0, 12, 50)

    def get_type(self):
        return 'F35'
    