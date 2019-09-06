let blogPost = {
  title: 'Bodybuilding Secrets by Krantesh Singh',
  body: 'In this post I will tell you about my secrets of body building',
  author: 'Krantesh Singh',
  comments: [
    {
      author: 'Rahul',
      commentMessage: 'Thanks for this amazing post'
    },
    {
      author: 'Ravi',
      commentMessage: 'amazing post thanks krantesh'
    }
  ],
  islive: true
};

console.log(blogPost);

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.commentMessage = [];
  this.islive = false;
}

let firstPost = new Post('a', 'b', 'd');

console.log(firstPost);
