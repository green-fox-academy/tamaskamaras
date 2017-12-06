# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# fill the canvas with lines from the edges, every 20 px, to the center.

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def center_line ():
    for a in range(0, 300, 20):
        for b in range(0, 300, 20):
            if a == 0:
                x = a
                y = b
            if a > 0:
                x = a
                y = 0
            line = canvas.create_line(
                x,
                y,
                150,
                150
            )

center_line()

root.mainloop()