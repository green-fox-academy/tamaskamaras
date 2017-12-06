# draw the canvas' diagonals in green.

from tkinter import *

my_root = Tk()

my_canvas = Canvas(my_root, width = '300', height = '300')
my_diagonal = my_canvas.create_line(0, 0, 300, 300, fill = 'green')
my_diagonal = my_canvas.create_line(0, 300, 300, 0, fill = 'green')
my_canvas.pack()

my_root.mainloop()