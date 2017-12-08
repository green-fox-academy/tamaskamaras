from tkinter import *

my_root = Tk()

canvas = Canvas(my_root, width = '300', height = '300')
canvas.pack()

def draw(a):
    line = canvas.create_line(a, 0, 150, 150)
    line = canvas.create_line(300, a, 150, 150)
    line = canvas.create_line(a, 300, 150, 150)
    line = canvas.create_line(0, a, 150, 150)
    if a == 300:
        return a
    else:
        return a + draw(a + 20)

draw(0)

my_root.mainloop()
