class BlogPost(object):

    def __init__(self):
        self.author_name = ''
        self.title = ''
        self.text = ''
        self.publication_date = ''

# blog1 = BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet', '2000.05.04.')

blog1 = BlogPost()

blog1.author_name = 'John Doe'
blog1.title = 'Lorem Ipsum'
blog1.text = 'Lorem ipsum dolor sit amet'
blog1.publication_date = '2000.05.04.'

print(blog1.author_name, blog1.title, blog1.text, blog1.publication_date)
