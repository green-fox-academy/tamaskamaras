
########################################

# class Domino(object):
#     def __init__(self, value_a, value_b):
#         self.values = [value_a, value_b]

#     def __repr__(self):
#         return '[{}, {}]'.format(self.values[0], self.values[1])

#####################################

from domino import Domino

def initialize_dominoes():
    dominoes = []
    dominoes.append(Domino(5, 2))
    dominoes.append(Domino(4, 6))
    dominoes.append(Domino(1, 5))
    dominoes.append(Domino(6, 7))
    dominoes.append(Domino(2 ,4))
    dominoes.append(Domino(7, 1))
    return dominoes

dominoes = initialize_dominoes()
# You have the list of Dominoes
# Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides
# eg: [2, 4], [4, 3], [3, 5] ...

snake = []
temp = []

for i in range(len(dominoes)):
    for j in range(len(dominoes)):
        if dominoes[i].values[0] < dominoes[j].values[0]:
            temp = dominoes[i]
            dominoes[i] = dominoes[j]
            dominoes[j] = temp
            

        # if dominoes[i].values[1] == dominoes[j].values[0]:
        #     snake.append(dominoes[i])
        #     snake.append(dominoes[j])

    # print(dominoes[i].values[0])

print(dominoes)
# print(snake)