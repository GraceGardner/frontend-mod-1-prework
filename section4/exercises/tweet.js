/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/


class Tweet {
  constructor(content, timeStamp) {
    this.author = "Grace";
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = 0;
    this.comments = [];
  }

  like() {
    this.numberOfLikes++;
  }

  comment(newComment) {
    this.comments.push(newComment);
  }

};

var tweet1 = new Tweet("Tweets up in here!", "Sept. 10 2021, 1:28PM");
tweet1.like();
tweet1.like();
tweet1.like();
tweet1.comment("heck yeah tweets!");
tweet1.comment("tweets are rad!");

console.log(tweet1);

var tweet2 = new Tweet("Turing is cool!", "Sept. 10 2021, 1:45PM");
tweet2.like();
tweet2.comment("heck yeah it is!");

console.log(tweet2);

var tweet3 = new Tweet("I love plants!", "Sept. 10 2021, 1:48PM");
tweet3.like();
tweet3.comment("Plants are so cool!");

console.log(tweet3);
