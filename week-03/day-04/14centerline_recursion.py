from tkinter import *

my_root = Tk()

canvas = Canvas(my_root, width = '300', height = '300')
canvas.pack()

def draw_up(x):
    line = canvas.create_line(x, 0, 150, 150)
    if x == 300:
        return x
    else:
        return x + draw_up(x + 20)

draw_up(0)

def draw_right(y):
    line = canvas.create_line(300, y, 150, 150)
    if y == 300:
        return y
    else:
        return y + draw_right(y + 20)

draw_right(0)

def draw_down(x):
    line = canvas.create_line(x, 300, 150, 150)
    if x == 300:
        return x
    else:
        return x + draw_down(x + 20)

draw_down(0)

def draw_left(y):
    line = canvas.create_line(0, y, 150, 150)
    if y == 300:
        return y
    else:
        return y + draw_left(y + 20)

draw_left(0)

my_root.mainloop()
