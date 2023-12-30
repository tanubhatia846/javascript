"use strict";  //treat all JS code as newer version
// alert( 3 + 3 )  //we are using nodejs, not browser
let name = "tanu"
let age = 22
let isloggedin = false



// null => standalone value

let state //undefined
let stat = null //null value(empty)

console.log(typeof null) //answer = object
console.log(typeof undefined) // answer = undefined

//################# INTERVIEW REALTED #############

 // Primitive = String, Boolean, Number, Null, Undefined, Symbol, BigInt


 //Reference ( non primitive) = array, objects, functions

 const id = Symbol('123')

 const id_t = Symbol('123')

 console.log(id)  //  Symbol(123)
 console.log(id_t)   //   Symbol(123)

 console.log(id == id_t)   // false


 // the datatype of all non-primitive data types are always object


 