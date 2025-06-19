 //Problem 1:
const  isAdult=age=>age >= 18  ? "You are good to go!" : "Sorry! You must be 18 or older!"
console.log(isAdult(17)) // Output: "Sorry! You must be 18 or older!"
console.log(isAdult(18)) // Output: "You are good to go!"
console.log(isAdult(19)) // Output: "You are good to go!"
//Problem 2:
const itsRaining = param=>param === "raining" ? "Get your rain jacket!" : "No rain on today's forecast!"
console.log(itsRaining("raining")) // Output: "Get your rain jacket!"
console.log(itsRaining("not raining")) // Output: "No rain on today's forecast!"
//Problem 3:
const  evenNumber=numb=>(numb % 2 === 0) ? "That's an even number!" : "That's an odd number!"
console.log(evenNumber(2)) // Output: "That's an even number!"
console.log(evenNumber(7)) // Output: "that's an odd number!"
//Problem 4:
const compareNumbers =(numb1,numb2)=>numb1>numb2  ? `${numb1} is more than ${numb2}!` : `${numb1} is less than ${numb2}!` 
console.log(compareNumbers(10,5))// Output: "10 is more than 5!"
console.log(compareNumbers(5,10))// Output: "5 is less than 10!"  


