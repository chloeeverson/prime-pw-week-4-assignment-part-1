console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
//should return hello world when hello() function is called
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, for example 'Hello, Jo!'
function helloName( name ) {
  let greeting = `Hello, ${name}!`;
  return greeting;
}
//should greet any name that I call below
// Remember to call the function to test
console.log('test for greeting chloe, should be Hello, Chloe!:' , helloName('Chloe'));
console.log('test for greeting brianna, should be Hello, Brianna!:' , helloName('Brianna'));


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber , secondNumber ) {
  let answer = firstNumber + secondNumber;
  // return firstNumber + secondNumber;
  return answer;
}
//function should add the first number and second number called , then return the answer of that addition.

console.log('test for sum of two numbers 66 + 30, should be 96:' , addNumbers(66, 30));
console.log('test for sum of two numbers -53 + 9, should be -44:' , addNumbers(-53, 9));
console.log('test for sum of two numbers 8 + 8, should be 16:' , addNumbers(8, 8));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3){
  let answer = num1 * num2 * num3;
  return answer;
}
//function should multiple three seperate numbers that are called and return the multiplied answer

console.log('test- multiplying three numbers 2, 10, & 5, answer should be 100:' , multiplyThree(2,10,5));
console.log('test- multiplying three numbers 9, 19, & 29, answer should be 4959:' , multiplyThree(9,19,29));
console.log('test- multiplying three numbers -8, 20, & 20, answer should be -3200:' , multiplyThree(-8,20,20));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }
}
//function will return true if the number called is true, it will return false if the number is negative.
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive value 3 - should say true', isPositive(3) );
console.log( 'isPositive value 0 - should say false', isPositive(0) );
console.log( 'isPositive value -3 - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

let emptyArray = []
let lastItemArray22 = [12, 4,7, 22]
let lastItemArrayBingo = ['chess' , 'monopoly' , 'bingo']

function getLast( array) {
  if (array) {
    let lastItem = array[array.length -1];
    return lastItem;
  }
}
//Should show last value item in whatever array is called, or undefined if array is empty

console.log('test - last item empty array, should be undefined:' , getLast(emptyArray));
console.log('test - last item lastItemArray22, should be 22:' , getLast(lastItemArray22));
console.log('test - last item lastItemArrayBing, should be bingo:' , getLast(lastItemArrayBingo));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
let array25 = [13, 7, 6, 25, 9]
let arrayBirthday = ['cake' , 'balloons' , 'card']

function find( value, array ){
  if (array) {
    for (let i = 0; i<array.length; i++ ){
      if (array[i] === value) {
        return true;
      }
    }
  }
  return false;
}
//if call a value and array - if that value is found inside array called then the console should return true. If not, false.

console.log('test - is value 25 found in array25? (Expect true)' , find(25, array25));
console.log('test - is value balloons found in arrayBirthday? (Expect true)' , find('balloons', arrayBirthday));
console.log('test - is value candles found in arrayBirthday? (Expect false)' , find('candles', arrayBirthday));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
