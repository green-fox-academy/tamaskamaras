# draw four different size and color rectangles.

from tkinter import *

my_root = Tk()

my_canvas = Canvas(my_root, width = '300', height = '300')
my_canvas.pack()

box1 = my_canvas.create_rectangle(50, 50, 100, 100, fill = 'black')
box2 = my_canvas.create_rectangle(50, 120, 90, 150, fill = 'gray')
box3 = my_canvas.create_rectangle(150, 20, 250, 30, fill = 'pink')
box4 = my_canvas.create_rectangle(180, 60, 200, 290, fill = 'brown')

my_root.mainloop()