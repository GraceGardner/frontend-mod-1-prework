## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

I have always been afraid to ask questions in classes because I don't want to be a disruption, but the more I have been thinking about it, I think that extends to a lot of areas of my life. I don't want to interrupt something someone else might be doing, so I tend to only ask questions after I have exhausted all of my other options. In 'Your Questions are Dumb; Ask Them Anyway' the author speaks of struggling for hours to find a solution that took her boss 2 minutes to provide her once she asked. That one really resinated with me, because I do tend to keep questions to myself and go down rabbit holes. It seems that everyone agrees that spending 20-30 minutes searching for a solution and then going for help is reasonable. I'm going to do my best to apply that rule to my studies in Turing.

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

I actually really enjoyed having some of the supports pulled in this section. It forced me to do some deep diving and to really commit important things, like using node to run a file, to memory.

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A conditional statement uses comparison operators to evaluate if a condition is met. If the condition is met, the block of code that follows is executed. In other words, they tell a program what to do under certain circumstances.

Life conditional
```JavaScript
var wakeUp = true;

if (wakeUp === true) {
  console.log("Good Morning!");
} else {
  console.log("zzzzzzzzz");
};
```
web application
```JavaScript
var paid = false;

if (paid === false) {
  console.log("Please update your payment");
} else {
  console.log("Payment received")
}
```


1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.
We can add additional conditions to an `if` statement by using `else if` and `else`. Our program will go through condition by condition until it meets a condition, then it will execute the following code block. For both `if` and `else if` we set conditions to be met, whereas
`else` is what we tell a program to do if none of the previous conditions were met.


1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code? For this we will use a logical operator. If we want to check that TWO conditions are met we will use the Logical AND && which only evaluates as true if both operands are true. If we want to check if one of two conditions are met we will us the Logical OR || which only evaluates as false if both operands are false.

1. What questions do you still have about `if` statements and/or functions? I was actually wondering if there are alternatives or cleaner ways of writing code than simply listing a bunch of `if` and `else if` statements? 
