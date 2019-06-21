
from tkinter import *

root = Tk()

size = 500
canvas = Canvas(root, width = size, height = size)
canvas.pack()

def draw(a, b):
    c = size // 2
    box = canvas.create_rectangle(
        c - a / 2,
        c - a / 2,
        c + a / 2,
        c + a / 2
    )
    if a == 0:
        return 0
    else:
        return a - draw(a - b, b)

draw(300, 50)

root.mainloop()