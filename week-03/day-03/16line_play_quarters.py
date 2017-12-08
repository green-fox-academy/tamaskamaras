from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def line_play(sv, sh, ev, eh):
    for v in range(sv, ev, 20):
        for h in range(sv, ev, 20):
            if v == sv:
                sx = v
                sy = h
                ex = h
                ey = ev - 20
            line = canvas.create_line(sx, sy, ex, ey, fill = 'purple')
            if h == sv:
                sx = ev - 20
                sy = v
                ex = v
                ey = sv
            line = canvas.create_line(sx, sy, ex, ey, fill = 'green')

line_play(0, 0, 320, 320)
line_play(300, 300, 620, 620)

root.mainloop()