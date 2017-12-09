
from tkinter import *

root = Tk()

size = 500
canvas = Canvas(root, width = size, height = size)
canvas.pack()

def draw(a, b):
    line = canvas.create_line(0, a, size, a)
    if a == 0 or b == 0:
        return 0
    else:
        return a - draw(a - b, b - 5)

draw(400, 40)

def vertical(a, b):
    line = canvas.create_line(a, 400, b, 220)
    if a == 0 or b == 500:
        return 0
    else:
        return a - vertical(a - 50, b - 10)

vertical(500, 250)

root.mainloop()