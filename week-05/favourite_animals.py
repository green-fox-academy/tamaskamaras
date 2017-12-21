import sys

def fav_animals():
    if len(sys.argv) == 1:
        print('fav_animals [animal] [animal]')
    elif len(sys.argv) > 1:
        for item in (sys.argv[1:]):
            # print(item)
            with open('favourites.txt', 'a') as f:
                f.write(item + '\n')

fav_animals()
