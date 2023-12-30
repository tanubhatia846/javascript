//two type of memories are there in javascript
//  1...stack memory  ( primitive )
//  2...heap memory   ( non-primitive )

// in stack memory we use copy of any variable or data type
// in heap memory we use reference of the data type


/////////   HEAP EXAMPLE
let userone={
    email : "tanu@google.com",
    rollno : 59
}

let usertwo = userone /// if we cahange anything in any of the user it will reflect in another user     Because    here they are sharing reference with each other not copy

userone.email="anjali@google.com"

console.log(userone.email) // will print anjali@google.com
console.log(usertwo.email)  // will print anjali@google.com