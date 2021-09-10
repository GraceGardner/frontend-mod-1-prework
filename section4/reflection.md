## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique? At first I really struggled with it. I have a tendency to get distracted very easily so sticking to the timer and giving something 100% of my full attention was very difficult. At first I got so into reading that I somehow skipped over two of the exercises and had to circle back to them. But after adjusting to it, I found it to be very helpful. When I'm studying or working I always forget to eat, drink or stand up, so by the time I finish I'm stiff, starving and dehydrated. This technique actually helped me get up, walk around, and take care of myself so that I could better focus on my studies outside of my break times.

1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)? I was actually able to complete things much faster than I had expected. It was very rewarding to see how much more I could accomplish in the same amount of time if I just give something my full attention and shut out distractions.

1. What is an Object, and how is it different from an Array in Javascript? An array holds an ordered list the is indexed and that index in then used to access the values within the array. An Object holds key-value pairs, where the key is used to access the value through dot notation.

1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class - An array would be best if we were only trying to store a list of their names in the form of strings.
  * List of states and their capitals - An Object would be best as each state would act as a key to find the specific captial or rather value belonging to that state.
  * List of things to pack for vacation - An array would be best for this as it seems to be a simple list of strings.
  * Names of all the Instagram accounts I follow - An array would be best for this, being it's a simple list that would be best held in a single variable.
  * List of student names and their cohort - An object would be best for this. We can use the student names and cohorts to create key-value pairs and can use the keys, which would be the student names, to find out which cohort they are in, which would be the value.
  * Ingredients and amount of each ingredient to bake a cake - An object would be best for this as we can store the ingredients as keys, with the amount of each ingredient as their value, and all of this can be held in the object cake.
  * All my favorite restaurants - An Array would be best for this. We can store a list of strings in a single variable.

1. In this section, we talked about a `transaction item object`. It has keys that represent different properties a bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?
Most social media accounts likely use an object to store key value pairs pertaining to each individual user. For example, the following class could be used to create iterations of new user accounts, which would the key value pairs included.

```javascript
class UserAccount {
  constructor(name, age, date, location, status, education, career) {
    this.name = name; /// value would be a string
    this.age = age; /// value would be a number
    this.birthday = date; /// value would be a string
    this.lives = location; /// value would be a string
    this.relationshipStatus = status; /// value would be a string
    this.education = education; /// value would be a string
    this.career = career; /// value would be a string
  }
}
```

1. What questions do you still have about classes and/or Objects? I think that the only this is how we might use them in a multiple file structure. Do we have a way to store these in one file and then access them in another? Or do we have to keep putting the classes in a new file to create each object? 
