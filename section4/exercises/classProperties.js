/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any properties at this time!!

// Prompt 1: Dog
class Dog {
  constructor() {

  }
}

var dog1 = new Dog();
console.log(dog1);

var dog2 = new Dog();
console.log(dog2);

// Prompt 2: Snack
class Snacks {
  constructor() {

  }
}

var snack1 = new Snacks();
console.log(snack1);

var snack2 = new Snacks();
console.log(snack2);

// Prompt 3: Shirt
class Shirt {
  constructor() {

  }
}

var shirt1 = new Shirt();
console.log(shirt1);

var shirt2 = new Shirt();
console.log(shirt2);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class Doggo {
  constructor() {
    this.color = "black";
    this.age = 1;
    this.isHappy = true;
  }
}

var doggo1 = new Doggo();
console.log(doggo1);

// Prompt 2: Snack
class Chips {
  constructor() {
    this.type = "corn";
    this.isSalty = true;
    this.isCrunchy = true;
  }
}

var chips1 = new Chips();
console.log(chips1);

// Prompt 3: Shirt
class TShirt {
  constructor() {
    this.size = "medium";
    this.color = "black";
    this.isClean = true;
  }
}

var tshirt1 = new TShirt();
console.log(tshirt1);
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Pooch {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }
}

var pooch1 = new Pooch("Coco", "brown", 3);
console.log(pooch1);

var pooch2 = new Pooch("Koda", "black", 2);
console.log(pooch2);

// Prompt 2: Snack
class FavoriteSnacks {
  constructor(type, healthy, ranking) {
    this.type = type;
    this.isHealthy = healthy;
    this.ranking = ranking;
  }
}

var walkers = new FavoriteSnacks("shortbread cookies", false, "third place");
console.log(walkers);

var honeyCrisp = new FavoriteSnacks("apples", true, "first place");
console.log(honeyCrisp);

// Prompt 3: Shirt
class BandShirt {
  constructor(band, fromShow, color) {
    this.band = band;
    this.fromShow = fromShow;
    this.color = color;
  }
}

var metallica = new BandShirt("Metallica", true, "black");
console.log(metallica);

var rollingStones = new BandShirt("The Rolling Stones", false, "black");
console.log(rollingStones);
