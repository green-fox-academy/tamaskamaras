
from tkinter import *

my_root = Tk()

my_canvas = Canvas(my_root, width = '300', height = '300')
my_canvas.pack()

def purple_steps (iteration):
    size = 10
    for i in range(1, iteration + 1):
        box = my_canvas.create_rectangle(i * size, i * size, (i * size) + size, (i * size) + size, fill = 'purple')

purple_steps(10)

my_root.mainloop()