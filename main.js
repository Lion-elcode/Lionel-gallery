// LOG A STATEMENT USING console.log()
// console.log('hello wolrd form main.js shit')
// console.log('it is lionel again we are learning javaScript in the terminal')
// console.log('this is going to be fun and soo cool again')

// STORING VARIABLS
//  let name = 'lionel'
//  console.log(name)
//  const age = 20
//  console.log(age)

//    Data Types

//    primitive DataTypes

//    string dataTypes
//   const firstName = 'paccy'
//   const language = "javaScript"
//   const location = `home`
//    numbers dataTypes
//   const Age = 22
//  const Pi = 3.14
//  const total = 0
// Boolean dataTypes
//  const isPrimaryNumber = true
//  const isNewUser = false
// undefined dataTypes
//  let result
// console.log(result)

// null datatype
//  let res = null
//  const data = null

// BigInt type
// Symbol type

// Non primitive DataTypes

// Objects
//  const person = {
//      firstName : 'Cyubahiro',
//      lastName : 'Lionel',
//      age : 20
//  }
// console.log(person.firstName)

// Arrays
//  const OddNumbers = [1,3,5,7,9,11]
// console.log(OddNumbers[0])

//  let a = 5
//  a = 'lionel'
//  a = true

// console.log(a)

// OPERATORS

// Assignment Operators eg: =
// Arithmetic Operators eg: +,-,*,/,%,++,--
// Comparison Operators eg: <,>,<=,>=,==,===,!=,!==
// Logical operators eg: &&,||,!
// String Operators eg: +,:
// Other Operators

//  let x = 10 
//  let y = 5

// console.log(x+y)
// console.log(x-y)
// console.log(x*y)
// console.log(x/y)
// console.log(x%y)
// console.log(++x)
// console.log(--y)

// console.log(x === y)
// console.log(x == y)
// console.log(x != y)
// console.log(x !== y)
// console.log(x < y)
// console.log(x > y)
// console.log(x <= y)
// console.log(x >= y)

//  const isValidNumber = x > 8 && 8 > y  check if all statement is true
// console.log(isValidNumber)

//  const isValidNo = x > 20 || 8 > y  check if either statement is true 
// console.log(isValidNo)

//  const isValid = true  negates the value
// console.log(!isValid)

//    sting operators

//    console.log('Ndahiro ' + 'Pacific')

//   const isEven = 10 % 2 === 0 ? 'The Number Is Even' : 'The Number Is Odd'
//    console.log(isEven)

//    TYPE CONVERSION

//    Their are two types of conversions : Implicit Conversin, Explicit Conversion
 
//    IMPLICIT CONVERSION
// this is when JavaScript Automatically converts the DataTypes

// console.log(8 + '3')
// console.log(true + '3')
// console.log('bruce '  + 'wayne')
// console.log('bruce '  - 'wayne')
//  console.log('10' - '15')
//  console.log('10' * '15')
//  console.log('10' / '5')
//  console.log('3' - true)true = 1
//  console.log('3' - false)false = 0
//  console.log('3'- null)null = 0
//  console.log(3 + undefined)
// EXPLICIT CONVERSION
//  this is when you manually convert the DataTypes yourself

//  we use some global methord

// console.log(Number(true))
// console.log(parseInt('4'))
// console.log(parseFloat('3.14'))
// console.log(String(500))
// console.log((500).toString())however it will not work on null and undifined
// console.log(Boolean(10)) (null, undifined, '', 0, NaN)= false || every thing else is true
// console.log(Boolean('   '))
// console.log(Boolean(''))
// console.log(Boolean(undefined))


// EQUALITY


//  const var1 = 10
//  const var2 ='10'
// console.log(var1 == var2)
// console.log(var1 === var2)



// CONDITIONAL STATEMENTS

// if , else, else if, switch

//  const num = 10

//  if (num < 0) {
//      console.log('Number is Negative')
//  } else if (num > 0) {
//      console.log('Number is Positive')
//  } else {
//      console.log('Number is Zero')
//  }
    
//  const color = 'yellow'
//  switch (color) {
//      case 'red':
//          console.log('The color is Red')
//          break;

//      case 'blue':
//          console.log('The color is Blue')
//          break;

//      case 'green':
//          console.log('The color is Green')
//          break;

//      default:
//          console.log('Not a valid color')
//          break;
//  }


// LOOPING CODE

// for loop , while loop , Do..while loop , for..of loop
//  FOR LOOP

//  for (let i = 1; i <= 5; i++) {
//       console.log('this is Number ' + i)
//  }

// WHILE LOOP

//  let iteration = 1;
//  while (iteration <= 5) {
//       console.log('And this is Number ' + iteration)
//      iteration++
//  }

// DO WHILE LOOP

//  let i = 1
//  do {
//       console.log('This is Number ' + i)
//      i++
//  } while (i <= 5);


// FOR OF LOOP

//  const numArry = [1,2,3,4,5]
//  for (const num of numArry) {
//      console.log('This is Number ' + num)
//  }

// FUNCTIONS
// JavaScript Functions are block of codes designed to performe a particular task

//  function greet(userName) {
//      console.log('Good Morning ' + userName)
//  }

//  function Add (a,b) {
//      return a + b
//  }

// another way to write a function

// const ArrowSum = (a,b) => {
//     return a + b
// }

// or 
//  const ArrowSum = (a,b) => a + b

//  const sum = ArrowSum(10,15)
// console.log(sum)


// SCOOP
// basically determines the accessibility and visibility of variables

//  ex: block scoop
// if (true) {
//     const myName = 'Lionel'
//     console.log(myName)    it can only be accessed with in the block not outside
// }
// console.log(myName) call myName outside here it automatically cause an error

//  ex: Function Scoop
// function testFn() {
//     const myName = 'CYUBAHIRO'
//     console.log(myName)  it can only be accessed with in the function statement not outside 
//  } 
// testFn()
// console.log(myName) call myName outside here it automatically cause an error

//  ex: Global Scoop

// const myNum = 'I am '+22+'years old'
// const myName = 'SuperMan'
// if (true) {
//     const myName = 'Pacific'
//       console.log(myName)
//       console.log(myNum)
//  }

// function coolFn() {
//     const myName = 'NDAHIRO'
//     console.log(myName)
//     console.log(myNum)
// }
// coolFn()
// a Global Scoop (myNum) can be accessible in the block or the function
// a Globally declared variable can not overwrite the block 0r function scooped variables


