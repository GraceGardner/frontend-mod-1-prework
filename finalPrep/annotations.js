// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// Declares the function buildABear with five parameters
function buildABear(name, age, fur, clothes, specialPower) {
  // declares a variable greeting assigned a string value that interpolates with the name veriable.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // declares the demographics variable assigned an array value that maps two parameters
  var demographics = [name, age];
  // declares the powerSaying variable assigned a string that uses concatenation and maps the specialPower parameter
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // declares builtBear object
  var builtBear = {
    // key value pair that maps to demographics variable
    basicInfo: demographics,
    // key value pair that maps to clothes parameter
    clothes: clothes,
    // key value pair that maps to fur parameter
    exterior: fur,
    // static key value pair with a number value
    cost: 49.99,
    // key assigned an array value that holds a stirng and maps to the powerSaying and greeting variables
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // static key value pair with a boolean value
    isCuddly: true,
  };
// the return statement return value of the builtBear object
  return builtBear
}
// creates an instance of the builtBear function with five arguements
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// creates another instance of the builtBear function with five arguements
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// declares a function called fizzBuzz that takes three parameters
function fizzBuzz(num1, num2, range) {
  //declares a for loop that starts with i value of 0, as long as i is less than
  //or equal to the value of range, our increment expression will increase i value by 1.
  for (var i = 0; i <= range; i++) {
    //declares if statement conditional if i divided by num1 is strictly equal to 0 Logical AND
    // i divided by num2 is strictly equal to 0 then execute the following code block
    if (i % num1 === 0 && i % num2 === 0) {
      // will log 'fizzbuzz' to console
      console.log('fizzbuzz');
      // if our previous condition was not met and i divided by num1 is strictly equal to 0 then
      // execute the following code block
    } else if (i % num1 === 0) {
      // will log 'fizz' to console
      console.log('fizz');
      // if neither of the previous conditions were met and i divided by num2 is strictly equal to 0
      // then execute the following code
    } else if (i % num2 === 0) {
      // will log 'buzz' to console
      console.log('buzz');
      // if none of the previous conditions were met, will execute code block
    } else {
      // will log the value of i to console
      console.log(i);
    }
  }
}
// creates instance of fizzBuzz function
fizzBuzz(3, 5, 100);
// creates a second instance of fizzBuzz function 
fizzbuzz(5, 8, 400);
