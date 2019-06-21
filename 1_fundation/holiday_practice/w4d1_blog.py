import a02blog_post

class Blog(object):
    def __init__(self):
        self.posts = []
    
    def add(self, post):
        self.posts.append(post)
    
    def delet(self, index):
        self.posts.pop(index)
    
    def update(self, index, post):
        self.posts[index] = post

blog = Blog()
blog.add(a02blog_post.blog1)
blog.add(a02blog_post.blog2)
blog.add(a02blog_post.blog3)

blog.update(1, a02blog_post.blog1)

for item in blog.posts:
    print(item)
