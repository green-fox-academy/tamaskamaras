
from tkinter import *

root = Tk()

size = 500

canvas = Canvas(root, width = size, height = size)
canvas.pack()

def draw(c, d):
    triangle = canvas.create_polygon(c, d, c - 10, d + 20, c + 10, d + 20, fill = 'white', outline = 'black')
    if c == 0 or d == 300:
        return 0
    else:
        return c + draw(c - 10, d + 20)

draw(250, 100)
draw(260, 120)
draw(270, 140)
draw(280, 160)
draw(290, 180)
draw(300, 200)
draw(310, 220)
draw(320, 240)
draw(330, 260)
draw(340, 280)
draw(350, 300)

root.mainloop()
