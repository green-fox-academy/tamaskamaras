
from tkinter import *

my_root = Tk()

my_canvas = Canvas(my_root, width = '300', height = '300')
my_canvas.pack()

def steps_3d (iteration):
    size = 10
    start_x_y = 10
    end_x_y = start_x_y + size
    for i in range(iteration):
        box = my_canvas.create_rectangle(
            start_x_y,
            start_x_y,
            end_x_y,
            end_x_y,
            fill = 'purple'
            )
        start_x_y += size
        size += 10      
        end_x_y += size
            
steps_3d(6)

my_root.mainloop()
