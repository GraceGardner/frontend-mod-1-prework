/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become its best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
14 - uses a conditional to evaluate if the value of doorChoice is strictly equal to 1
15 - if the condition above returns true the assignment of bearClothing = "hat" is executed
16 - else or rather if the original conditional is not met
17 - bearClothing will be assigned the string value of "scarf"

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing is the variable that is assigned a new value.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
Our if statement will only give bearClothing the value of "hat" if the value of doorChoice is exactly
equal to 1, therefore any other doorChoice , including 3, will result in the value 0f bearClothing set
by else which is the value of "scarf".

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
27 - uses a conditional to evaluate if the value of bearChoice to a strictly equal to 1
28 - if the condition above is met, this code will execute and log "You offer the bear your bearClothing and the
bear shows you a secret passage out!"
29 - else if the previous condition was not met, this line uses a conditional to evaluate if the value of
bearChoice is strictly equal to 2
30 - if the condition above is met, this code will execute and log "You tell the bear the bearClothing is too small
and it starts to cry!"
31 - else if the two previous conditions were not met, this line uses a conditional to evaluate if the value
of bearChoice is strictly equal to 3.
32 - if the condition above is met, this line of code will execute and log "You run as fast as you can into the
next room. It's full of snakes!"
33 - else, given that no previous conditionals are met this line executes the following line of code
34 - logs "You stay with the bear and become its best friend!"
35 - closes curly braces
*** note that where I typed bearClothing would be instead the value but would depend on previous conditionals***

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
log "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
log "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
"You stay with the bear and become its best friend!"
*/
