# create a square drawing function that takes 2 parameters:
# the x and y coordinates of the square's top left corner
# and draws a 50x50 square from that point.
# draw 3 squares with that function.

from tkinter import *

my_root = Tk()

my_canvas = Canvas(my_root, width = '300', height = '300')
my_canvas.pack()

def square_drawing (x, y):
    box = my_canvas.create_rectangle(x, y, (x + 50), (y + 50))

square_drawing(40, 180)

my_root.mainloop()