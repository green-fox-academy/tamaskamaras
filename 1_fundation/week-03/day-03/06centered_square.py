# draw a green 10x10 square to the center of the canvas.

from tkinter import *

my_root = Tk()

my_canvas = Canvas(my_root, width = '300', height = '300')
my_canvas.pack()
my_box = my_canvas.create_rectangle(145, 145, 155, 155, outline = 'green')

my_root.mainloop()