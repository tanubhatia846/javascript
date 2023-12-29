let score = 33
console.log( typeof score)

let age = '33'

let valueInNumber = Number(age) //conversion from string to number

console.log( typeof valueInNumber)

let a = "33abc" //will give string as its type 

// type convert a to number

let b = Number(a)

console.log(typeof b) // will give type as number

console.log(b)  //will give NaN as output

let c= undefined
let d=Number(c)
console.log(typeof d)
console.log(d)

//OUTPUTS 

// "33" => 33 (number)
// "33abc" => NaN (not a number)
// null to number => 0
// undefined to number => NaN
