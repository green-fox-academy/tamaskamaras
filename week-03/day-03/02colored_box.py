# draw a box that has different colored lines on each edge.

from tkinter import *

my_root = Tk()

my_canvas = Canvas(my_root, width = '300', height = '300')
my_line1 = my_canvas.create_line(50, 50, 100, 50, fill = 'red')
my_line2 = my_canvas.create_line(100, 50, 100, 100, fill = 'yellow')
my_line3 = my_canvas.create_line(100, 100, 50, 100, fill = 'green')
my_line4 = my_canvas.create_line(50, 100, 50, 50, fill = 'blue')
my_canvas.pack()
my_root.mainloop()