# create a square drawing function that takes 2 parameters:
# the square size, and the fill color,
# and draws a square of that size and color to the center of the canvas.
# create a loop that fills the canvas with rainbow colored squares.

from tkinter import *

my_root = Tk()

my_canvas = Canvas(my_root, width = '300', height = '300')
my_canvas.pack()

def square_drawing (size, color):
    rainbow = ['red', 'yellow', 'pink', 'green', 'purple', 'orange', 'blue']
    basis = 150 - (size / 2)
    unit = basis / 7
    for i in range(6):
        box = my_canvas.create_rectangle(0 + (i * unit), 0 + (i * unit), 300 - (i * unit), 300 - (i * unit), fill = rainbow[i])

square_drawing(5, 'black')
my_root.mainloop()



    # box 300 distance - 0
    # box 260 distance - 1 size
    # box 220 distance - 2 size
    # box 180 distance - 3 size
    # box 140 distance - 4 size
    # box 100 distance - 5 size
    # box 60  size