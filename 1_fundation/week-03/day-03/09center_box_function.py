# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# draw 3 squares with that function.

from tkinter import *

my_root = Tk()

my_canvas = Canvas(my_root, width = '300', height = '300')
my_canvas.pack()

def square_drawing (size):
    box = my_canvas.create_rectangle(150 - (size / 2), 150 - (size / 2), 150 + (size / 2), 150 + (size / 2))

square_drawing(250)
my_root.mainloop()