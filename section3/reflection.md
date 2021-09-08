## Section 3 Reflection

1. What are two points from the Growth Mindset article and/or video that either resonated with you, or were brand new to you?
Track your own progress rather than comparing yourself to others. Challenge yourself, practice and effort will result in improvement
and growth.

1. In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?
I do believe that anyone is capable of anything they are willing to work towards as long as they put in the effort to learn.
My mistakes have always helped me grow. The thing that I know I struggle with is not being afraid to ask questions. I tend to try
to learn things all on my own, so that's something I need to work on. I also like the idea of reflecting on my own progress when
I'm feeling defeated, because sometimes I hold myself to unrealistic standards.

1. Think of a web or mobile application you use regularly. Where is an example of a place that the developers probably use Arrays? Explain.
Arrays are essentially an ordered list that you can access using their index placement/number, or more precisely an indexed list of values held within one variable. That makes them perfect for holding lists of information/items, such as photo libraries, playlists, shopping lists or carts and many other collections of items. We can name a photo library or the array and then add images to that library.
For example :

```JAVASCRIPT
var myPhotos = ["image1", "image2", "image3"];
```

1. In your own words, explain what an Array method is.
An array method is a method that can only be used on arrays. These methods have specified effect on the array, such as adding new items/values or removing items/values from the array. Each array method contains specific instructions that javascript will follow and it will then manipulate the items/values in an array accordingly.

1. What is the purpose of a loop? When we would use a loop in conjunction with array vs. without?
Loops use iterations to run a set of tasks a given number of times, over and over again until the loop stops. This keeps developers from
having to repeat tasks manually.

We use loops in conjunction with arrays when we want to manipulate each item within an array in the same way. In such situations our loop generates the index numbers needed to utilize the items from our array, and runs them one by one in our code block until our condition is met and the loop stops. An example of this would be if we wanted to add a list/array of people's names to welcome messages one by one and then log them in our console.

Loops can also be used to manipulate strings and dictionaries as well. An example could be going through each letter of a string and capitalizing all of them.

1. If you had to teach a 5 year old about loops, how would you explain it? I would use the same example I used in our Mod 0 exercise about iterations, which was doing dishes. Basically we have a stack of dishes or rather an array that tells use which dishes are in our pile, we then run each dish, one by one, through our loop or dish washer until every dish is clean. For example, it might look like :
```javascript
var dishes = ["plate", "mug", "bowl", "spoon", "fork"];

for (var i = 0; i < dishes.length; i++) {
  console.log(i + " is now clean!");
}
```

1. What questions do you still have about Arrays and loops? Can you hold other kinds of things in arrays, such as files and then run them through a loop? 
