# Join the two lists by matching one girl with one boy in the order list
# Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

girls = ["Eve", "Ashley", "Bözsi", "Kat", "Jane"]
boys = ["Joe", "Fred", "Béla", "Todd", "Neef", "Jeff"]
order = []

def matchmaking(g, b):
    order = g
    x = 0
    for i in b:
        order.insert(x, i)
        x += 2
    return(order)

print(matchmaking(girls, boys))