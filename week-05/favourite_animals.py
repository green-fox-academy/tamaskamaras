import sys

def fav_animals():
    sum = ''
    if len(sys.argv) == 1:
        print('fav_animals [animal] [animal]')
    elif len(sys.argv) > 1:
        temp = open('favourites.txt', 'r')
        anims = temp.readlines()
        for anim in anims:
            sum += anim
        for item in (sys.argv[1:]):
            if item not in sum:
                with open('favourites.txt', 'a') as f:
                    f.write(item + '\n')
        temp.close()

fav_animals()
