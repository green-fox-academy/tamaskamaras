from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def line_play(s, e):
    for v in range(s, e, 20):
        for h in range(s, e, 20):
            if v == s:
                sx = s
                sy = h
                ex = h
                ey = e - 20
            line = canvas.create_line(sx, sy, ex, ey, fill = 'purple')
            if h == s:
                sx = e - 20
                sy = v
                ex = v
                ey = s
            line = canvas.create_line(sx, sy, ex, ey, fill = 'green')

line_play(0, 320)
line_play(300, 620)
# line_play(320, 320)

root.mainloop()