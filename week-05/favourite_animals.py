import sys

def fav_animals():
    if len(sys.argv) == 1:
        print('fav_animals [animal] [animal]')
    elif len(sys.argv) > 1:
        with open('favourites.txt', 'a') as f:
            f.write(sys.argv[-1] + '\n')

fav_animals()
