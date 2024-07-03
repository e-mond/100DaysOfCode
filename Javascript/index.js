document.write("Succesfully Linked")

// Strings: srround by single or double quotes
console.log("This is a string")

//Integres: either positve a negative numbers
console.log(45)
console.log(-8)

//Floats: numbers with decimals in them
console.log(99.9)

//Boolean: a true or false statements
console.log(true)
console.log(false)

// Variables
let name = "Kofi";
console.log(name)

var age = 46;
console.log(age)

const country = "United States";
console.log(country)

//Reassigning variables
name = "Debby";
console.log(name)

age = 9;
console.log(age)

//Const means constant value and the cant be changed    

//Opeators
let pens = 15
let books = 20
 
//Addtional arthemict opeations
console.log(pens + books)

//Divional arthemict opeations
let Cars = 10
let Drivers =  5
console.log( Cars / Drivers)

// Multipart arthemict opeations
let oranges = 10
let cups =  5   
console.log(oranges * cups)

// Modlues opeations 
let Books = 20
let  Pens = 5 
console.log(Books % Pens )

// Post and  Pre Incremeant
let Bags = 50
let Shoes = 12

console.log(++Shoes)
console.log(Bags++)
// Comparison Operators

// Equal
let numberOfChickens = 20;
let numberOfEggs = 20;
console.log(numberOfChickens === numberOfEggs); // true because both values are equal

// Not Equal
let cats = 10;
let dogs = 15;
console.log(cats != dogs); // true because 10 is not equal to 15

// Identical (Strict Equality)
let horses = 40;
let riders = 20;
console.log(horses === riders); // false because 40 is not equal to 20

// Greater Than
let a = 15;
let b = 10;
console.log(a > b); // true because 15 is greater than 10

// Not Identical (Strict Inequality)
let c = 5;
let d = '5';
console.log(c !== d); // true because 5 is not identical to '5' (different types)

// Less Than
let e = 8;
let f = 12;
console.log(e < f); // true because 8 is less than 12

// Greater Than Again for Consistency
let g = 15;
let h = 10;
console.log(g > h); // true because 15 is greater than 10

// Less Than or Equal To
let i = 7;
let j = 7;
console.log(i <= j); // true because 7 is equal to 7

// Greater Than or Equal To
let k = 9;
let l = 8;
console.log(k >= l); // true because 9 is greater than 8


// Logical Operators
let isRaining = true;
let hasUmbrella = false;

// Logical AND
console.log(isRaining && hasUmbrella); // false because both conditions are not true

let isWeekend = true;
let isHoliday = true;

// Logical OR
console.log(isWeekend || isHoliday); // true because at least one condition is true

let isTired = true;

// Logical NOT
console.log(!isTired); // false because NOT true is false

// Combined Logical Operators
let age = 25;
let hasLicense = true;

let canDrive = (age >= 18) && hasLicense;
console.log(canDrive); // true because age is greater than or equal to 18 and hasLicense is true

// String Operators
let firstName = "Andre";
let lastName = "Williams";

// Concatenation
let fullName = firstName + " " + lastName;
console.log(fullName); // "Andre Williams"

// Template Literals
let fullNameTemplate = `${firstName} ${lastName}`;
console.log(fullNameTemplate); // "Andre Williams"

// Adding Variables into String
let greeting = `Hello, my name is ${firstName} ${lastName}.`;
console.log(greeting); // "Hello, my name is Andre Williams ."

// Multiline String using Template Literals
let multilineString = `Hello, ${firstName}.
How are you today?`;
console.log(multilineString);
// Output:
// Hello, Andre.
// How are you today?
