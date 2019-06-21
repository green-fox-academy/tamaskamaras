
from tkinter import *

def draw(size):

    root = Tk()
    canvas = Canvas(root, width = size, height = size)
    canvas.pack()
    lsize = size // 2

    for i in range(0, lsize + 10, 10):
        line = canvas.create_line(i, lsize, lsize, lsize - i, fill = 'green')
        line = canvas.create_line(lsize, i, i + lsize, lsize, fill = 'green')
        line = canvas.create_line(i, lsize, lsize, i + lsize, fill = 'green')
        line = canvas.create_line(lsize, i + lsize, size - i, lsize, fill = 'green')        
        
    root.mainloop()

draw(int(input('Type the size of the window (min. 100): ')))
