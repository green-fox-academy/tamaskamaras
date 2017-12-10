
from tkinter import *

root = Tk()

size = 500

canvas = Canvas(root, width = size, height = size)
canvas.pack()

# c = size // 2
# d = size // 5

def draw(c, d):
    triangle = canvas.create_polygon(c, d, c - 10, d + 20, c + 10, d + 20, fill = 'white', outline = 'black')
    if c == 0 or d == 400:
        return 0
    else:
        return c + draw(c - 10, d + 20)


draw(250, 100)

root.mainloop()
