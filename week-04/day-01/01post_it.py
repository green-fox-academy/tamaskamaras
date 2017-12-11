class PostIt:

    background_color = ''
    text = ''
    text_color = ''

post1 = PostIt()
post2 = PostIt()
post3 = PostIt()

post1.background_color = 'orange'
post1.text = 'Idea 1'
post1.text_color = 'blue'

post2.background_color = 'pink'
post2.text = 'Awesome'
post2.text_color = 'black'

post3.background_color = 'yellow'
post3.text = 'Superb!'
post3.text_color = 'green'

print(post1.background_color, post1.text, post1.text_color)
print(post2.background_color, post2.text, post2.text_color)
print(post3.background_color, post3.text, post3.text_color)
