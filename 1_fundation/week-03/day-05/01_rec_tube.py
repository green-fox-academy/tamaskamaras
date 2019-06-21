
from tkinter import *

root = Tk()

size = 500
canvas = Canvas(root, width = size, height = size)
canvas.pack()

def draw(a):
    box = canvas.create_rectangle(a / 3, a / 3, a + a / 3, a + a / 3)
    if a == 0:
        return 0
    else:
        return a - draw(a - 20)

draw(300)

root.mainloop()