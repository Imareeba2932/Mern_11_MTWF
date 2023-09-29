// Types of Variables
// 1. var
// 2. let
// 3. const

console.log("Areeba")
console.log("Shakeel")

let age=25;
console.log(age)

age=45;
console.log("Now I'm",age,"years old.")

// const dob=45;
// console.log(dob)

// dob=35;
// console.log(dob)

let firstName="Rahul"
let lastName="Singh"
let fullName = firstName + " " + lastName
console.log("Full Name :", fullName)

var a = "World"

{
    var a = "Hello!"
    console.log(a)
}

console.log(a)

const basicSalary = 50000;
const hra = 0.1 * basicSalary;
const da = 0.05 * basicSalary;
const grossSalary = basicSalary + hra + da;
console.log("Gross Salary :", grossSalary);