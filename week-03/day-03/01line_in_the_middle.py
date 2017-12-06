# draw a red horizontal line to the canvas' middle.
# draw a green vertical line to the canvas' middle.

from tkinter import *

basic = Tk()
my_canvas = Canvas(basic, width = "300", height = "300")
my_canvas.pack()

my_line = my_canvas.create_line(0, 150, 300, 150, fill = "red")
my_line2 = my_canvas.create_line(150, 0, 150, 300, fill = "green")

basic.mainloop()