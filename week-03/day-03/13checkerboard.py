
from tkinter import *

my_root = Tk()

my_canvas = Canvas(my_root, width ='300', height = '300')
my_canvas.pack()

def checkerboard (iteration):
    size =  20
    for y in range(1, iteration + 1):    
        for i in range(1, iteration + 1):
            if (i + y) % 2 == 0:
                color = 'black'
                box = my_canvas.create_rectangle(
                    i * size,
                    y * size,
                    (i * size) + size,
                    (y * size) + size,
                    fill = color
                )

checkerboard(5)

my_root.mainloop()