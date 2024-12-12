const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.textContent = thisYear


// Advanced JavaScript Crash Course

// Advanced Consepts

// Nested Function's Scoop
// Closures
// Currying
// This Keyword
// Prototypes
// Prototypal Inheritence
// class
// Iteralbes and Iterators
// Generators

// Nested Function's Scoop

// let a = 'lionel'
//  function Outer() {
//      let b = 'Paccy'
//      function Inner() {
//          let c = 'Manzi'
        // console.log(a,b,c)
    //  }
    // Inner()
//  }
 // Outer()

// NB: the nested function inner() is first called then the outer() then the global scoop is fianlly called too

// CLOSURES

// function outer() {
    //     let counter = 0
    //     function inner() {
    //         counter++
    //         console.log(counter)
    //     }
    //     inner()
    // }
    // outer()
    // outer()
// function outer() {
//     let counter = 0
//     function inner() {
//         counter++
//         console.log(counter)
//         }
//     return inner
// }
// const Fn = outer()
//Fn()
//Fn()

// NB: With Closures an inner() has access to variables in the outer() scoop even after the function has finished execution that's why we get 2 when we call the Fn() for the second time


// FUNCTION CURRYING

function sum (a,b,c) {
    return a + b + c
}
// console.log(sum(2,3,5))

// sum(2,3,5) to sum(2)(3)(5)

function curry (Fn) {
   return function (a) {
    return function (b) {
        return function (c) {
            return Fn(a,b,c)
        }
    }
   }
}
const curriedSum = curry(sum)
console.log(curriedSum(2)(3)(5))

const add2 = curriedSum(2)
const add3 = add2(3)
const add5 = add3(5)
console.log(add5)


// THIS KEYWORD