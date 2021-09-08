Array Methods

`pop` : .pop removes the last item from an array.

Example:
```JAVASCRIPT
var myStuff = ['computer', 'keyboard', 'mousepad'];
var removeLast = myStuff.pop();
```
If we were to log this array to our console, we would now see that 'mousepad' is
no longer in our array.

`push` : .push adds a new item to the end of an array.

Example:
```JAVASCRIPT
var addLast = myStuff.push('phone');
```
If we were to log this in our console, we would see that our length has changed from 2 to 3 items
and 'phone'  is now at the end of our array in index position 2

`shift` : .shift is the opposite of .pop and removes the first item from an array.

Example:
```JAVASCRIPT
var removeFirst = myStuff.shift();
```
If we were to log our array in our console, we would now see that 'computer' is no longer
in our array and our length is now 2

`unshift` : .unshift is the opposite of the .push method and adds a new item to the front of an
array in index position 0

Example:
```JAVASCRIPT
var addFirst = myStuff.unshift('mug');
```
If we were to log our array in our console, we would see that 'mug' has been added to the front
of our array.
