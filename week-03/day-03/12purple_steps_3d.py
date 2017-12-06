
from tkinter import *

my_root = Tk()

my_canvas = Canvas(my_root, width = '300', height = '300')
my_canvas.pack()

def steps_3d (iteration):
    step = 10
    start_x = ''
    start_y = ''
    end_x = ''
    end_y = ''
    for i in range(1, iteration):
        box = my_canvas.create_rectangle(
            (i * step) + (i * step),
            (i * step) + (i * step),
            step + (i * step),
            step + (i * step),
            fill = 'purple')

steps_3d(7)

my_root.mainloop()