class Aircraft(object):
    def __init__(self, ammo, max_ammo, base_damage, type, all_damage):
        self.ammo = ammo
        self.max_ammo = max_ammo
        self.base_damage = base_damage
        self.type = type
        self.all_damage = all_damage

    def fight(self):
        damage = self.ammo * self.base_damage
        self.ammo = 0
        self.all_damage += damage
        return damage
    
    def refill(self, amount):
        remaining = amount - (self.max_ammo - self.ammo)
        self.ammo += amount - remaining
        return remaining

    def get_type(self):
        return self.type
    
    def __str__(self):
        return 'Type ' + self.type + ', Ammo: ' + str(self.ammo) + ', Base damage: ' + str(self.base_damage) + ', All damage: ' + str(self.all_damage)

class F16(Aircraft):
    def __init__(self):
        super().__init__(0, 8, 30, 'F16', 0)

class F35(Aircraft):
    def __init__(self):
        super().__init__(0, 12, 50, 'F35', 0)
