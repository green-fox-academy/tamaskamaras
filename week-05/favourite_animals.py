import sys

def fav_animals():
    sum = ''
    if len(sys.argv) == 1:
        print('fav_animals [animal] [animal]')
    elif len(sys.argv) > 1:
        temp = open('favourites.txt', 'r')
        anims = temp.readlines()
        for item in (sys.argv[1:]):
            pass
        for anim in anims:
            sum += anim
            if item not in sum:

                print(item)
            # print(sum)
            # print(anim)
                    # sum += 1
                    # if sum == 0:
                    #     with open('favourites.txt', 'a') as f:
                    #         f.write(item + '\n')
        temp.close()

fav_animals()
