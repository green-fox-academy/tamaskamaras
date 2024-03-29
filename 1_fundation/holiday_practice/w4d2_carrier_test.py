import unittest
from w4d2_carrier import *

class TestCarrier(unittest.TestCase):
    def setUp(self):
        self.f16 = F16()
        self.carrier = Carrier(60, 100)
    
    def test_damage(self):
        self.assertEqual(self.f16.fight(), 0)
    
    def test_refill(self):
        self.assertEqual(self.f16.refill(300), 292)
    
    def test_refill_ammo(self):
        self.f16.refill(300)
        self.assertEqual(self.f16.ammo, 8)

    def test_get_type(self):
        self.assertEqual(self.f16.get_type(), 'F16')
    
    def test_str(self):
        self.assertEqual(self.f16.__str__(), 'Type F16, Ammo: 0, Base damage: 30, All damage: 0')

    def test_all_damage(self):
        self.f16.refill(8)
        self.f16.fight()
        self.assertEqual(self.f16.__str__(), 'Type F16, Ammo: 0, Base damage: 30, All damage: 240')
    
    def test_add_aircraft(self):
        self.carrier.add_aircraft('F35')
        self.assertEqual(len(self.carrier.aircrafts), 1)
    
    def test_fill_1(self):
        self.carrier.add_aircraft('F35')
        self.carrier.fill()
        self.assertEqual(self.carrier.ammo_store, 48)

    def test_fill_2(self):
        self.carrier.add_aircraft('F35')
        self.carrier.fill()
        self.assertEqual(self.carrier.aircrafts[0].ammo, 12)

    def test_fill_multiple1(self):
        self.carrier.add_aircraft('F16')
        self.carrier.add_aircraft('F35')
        self.carrier.add_aircraft('F16')
        self.carrier.add_aircraft('F16')
        self.carrier.add_aircraft('F35')
        self.carrier.add_aircraft('F35')
        self.carrier.fill()
        self.assertEqual(self.carrier.ammo_store, 0)

    def test_fill_multiple2(self):
        self.carrier.add_aircraft('F16')
        self.carrier.add_aircraft('F35')
        self.carrier.add_aircraft('F16')
        self.carrier.add_aircraft('F16')
        self.carrier.add_aircraft('F35')
        self.carrier.add_aircraft('F35')
        self.carrier.fill()
        self.assertEqual(self.carrier.aircrafts[-1].ammo, 12)

if __name__ == '__main__':
    unittest.main()
