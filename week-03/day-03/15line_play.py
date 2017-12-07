from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def line_play():
    for v in range(0, 320, 20):
        for h in range(0, 320, 20):
            if v == 0:
                sx = 0
                sy = h
                ex = h
                ey = 300
            line = canvas.create_line(sx, sy, ex, ey, fill = 'purple')
            if h == 0:
                sx = 300
                sy = v
                ex = v
                ey = 0
            line = canvas.create_line(sx, sy, ex, ey, fill = 'green')

line_play()

root.mainloop()