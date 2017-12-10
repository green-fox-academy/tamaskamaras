
from tkinter import *

root = Tk()

size = 500

canvas = Canvas(root, width = size, height = size)
canvas.pack()

def multidraw(x, y):
    def draw(c, d):
        triangle = canvas.create_polygon(
            c, d,
            c - 10, d + 20,
            c + 10, d + 20,
            fill = 'white', outline = 'black')
        if c == 0 or d == 300:
            return 0
        else:
            return c + draw(c - 10, d + 20)

    draw(250 + x, 100 + y)
    if x == 0 or y == 200:
        return 0
    else:
        return multidraw(x + 10, y + 20)

multidraw(10, 20)

root.mainloop()
