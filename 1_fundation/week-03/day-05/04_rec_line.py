
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

draw(500, 50)

def vertical(a, b):
    line = canvas.create_line(b, 225, a, 500)
    if a == -2000 or b == 500:
        return 0
    else:
        return a - vertical(a - 50, b - 10)

vertical(1200, 490)

root.mainloop()
