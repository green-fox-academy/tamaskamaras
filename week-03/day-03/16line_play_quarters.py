
from tkinter import *


def draw(size):

    root = Tk()
    canvas = Canvas(root, width = size, height = size)
    canvas.pack()
    lsize = size // 2

    for i in range(0, lsize, 10):
        line = canvas.create_line(0, i, i, lsize, fill = 'green')
        line = canvas.create_line(i, 0, lsize, i, fill = 'purple')
        line = canvas.create_line(lsize, i, i + lsize, lsize, fill = 'green')
        line = canvas.create_line(i + lsize, 0, size, i, fill = 'purple')
        line = canvas.create_line(0, i + lsize, i, size, fill = 'green')
        line = canvas.create_line(i, lsize, lsize, i + lsize, fill = 'purple')
        line = canvas.create_line(lsize, i + lsize, i + lsize, size, fill = 'green')
        line = canvas.create_line(i + lsize, lsize, size, i + lsize, fill = 'purple')
        
    root.mainloop()

draw(600)
