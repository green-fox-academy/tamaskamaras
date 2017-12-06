
from tkinter import *

my_root = Tk()

my_canvas = Canvas(my_root, width ='300', height = '300')
my_canvas.pack()

def checkerboard (iteration):
    size =  20
    for x in range(1, iteration + 1):    
        for i in range(1, iteration + 1):
            box = my_canvas.create_rectangle(
                i * size,
                x * size,
                (i * size) + size,
                2 * size
            )

checkerboard(5)

my_root.mainloop()