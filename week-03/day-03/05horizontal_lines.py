# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a 50 long horizontal line from that point.
# draw 3 lines with that function.

from tkinter import *

my_root = Tk()

my_canvas = Canvas(my_root, width = '300', height = '300')

def line_drawing (x, y):
    line = my_canvas.create_line(x, y, (x + 50), y)

line_drawing(178, 223)

my_canvas.pack()
my_root.mainloop()