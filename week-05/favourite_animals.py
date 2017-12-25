import sys

def fav_animals():
    sum = ''
    if len(sys.argv) == 1:
        print('fav_animals [animal] [animal]')
    elif len(sys.argv) > 1:
        anims = read_file()
        for anim in anims:
            sum += anim
        for item in (sys.argv[1:]):
            if item not in sum:
                with open('favourites.txt', 'a') as f:
                    f.write(item + '\n')

def read_file():
    with open('favourites.txt') as temp:
        return temp.readlines()

fav_animals()
