## Section 1 Reflection

1. How did the SuperLearner Article resonate with you? What from this list do you already do?

I have always been a goal motivated learner who views learning as a process.
Mistakes will be made and I do my best to see them as learning opportunities.
Sharing knowledge with others and helping classmates with things they might be struggling with has always been one of my favorite ways to reinforce information that I have learned.

Want to start doing or do more of? Is there anything not on this list, that you would add to it?

I have never been an avid reader, so I am hoping to remedy that while at Turing. I think that scheduling in time to do additional research and reading on relevant topics will hopefully help with this. Taking breaks is also something I struggle with. I have a very hard time leaving a problem and coming back to it, instead I just want to pound my way through it which might not be the best solution. Hopefully implementing pom breaks will help me with this.

2. What are the data types you learned about in this section? In your own words, define each.

String : A string is a collection of characters that are wrapped in either single or double quotes (both the first and last quotation type must match). Strings are often used to say something.

Example :

```javascript
var stringName = "String text.";
```

Booleans : Booleans are a type of data to which the value assigned is either true of false. The variable value of true or false must always be in lowercase and the variable name is often almost phrased like a question.

Example :

```JavaScript
var isSleepy = true;
```

Numbers : Can include negative numbers, floats and integers. Characters are limited to a dash, period and numbers. Will only be typed out as the number itself, no additional characters are added to the syntax. Normally used for calculations.

Example:

```JavaScript
var number = 5;
```

3. How would you log the string `"Hello World!"` to the console?

```javascript
var hello = "Hello World!";

console.log(hello);
```

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?
Comments are simply said text within a code file that will not run. This can be used within code to either disable lines of code, annotate code and leave messages for our future selves or other developers. We can use comments to leave detailed information about what code does. The code itself will explain how it does what it does, but comments/annotation can save us time and increase efficiency. There are two ways to leave comments in a JS file.

Option 1. Start a line with /// . This option is great for short comments. If we move the comment to the next line, we will have to once again type in /// to comment out the text.

Option 2. You can wrap a message with /* comment example */. This option is great for if you have long comments to leave and don't want to type in /// for each line.

The /// is most common however, because we can simply type out our desired text, highlight it and use the command back slash short cut to comment out what we would like to in one go.


5. In your own words, what is a variable? How would you explain it to a 5 year old? A variable is kind of like a container that holds information for us. We put a name on the container so that we know what we want to put in the container (this is when we give it a variable name), then we put something in the container (assign it a value). For example, if we have a variable called cookieJar and we put some cookies in that jar, it would look like:

```JavaScript
var cookieJar = "cookies";
```
Then later on we can pull the value or cookies out of the jar to retrieve them later. Which might look like:

```JavaScript
console.log(cookieJar);
```

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?
```JavaScript
var name = "Sam Smith";
/// a name variable would hold a string
var age = 25;
/// an age variable would hold a number
var membership = true;
/// if a website has a paid membership that allows extra access or
/// special offers/features, they might use a boolean to say if
/// the user has a membership or not.
```
7. In your own words, explain what concatenation is.
Concatenation is used to combine multiple variables with different data types into a string using type coercion to convert everything into a string so that it can all be combined together. The syntax is as follows

```JavaScript
var favoriteFood = "pizza";
var iLike = "I like " + favoriteFood + " !";
```

8. Think of a site or app you use frequently. Where do you think the developers used concatention?
Any website that holds a user's name, likely uses concatenation to add that name to their user page. Some webpages will hello, followed by the user's name. I believe that this would be a perfect place to use concatenation.

example:
```JavaScript
var name = "Sam";
var greeting = "Hello " + name + "!";
```

9. What questions do you still have about the work we've done so far? (not having a question is not an option) I currently understand how we would use these, but I am curious about how we present them on an actually webpage. Right now we know how to log things in our console/terminal, but how do we get this information on a user's page? How do we take this information and then present it? 
