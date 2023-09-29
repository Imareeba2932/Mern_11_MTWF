// Conditions Statement
// 1. if (to check single condition)
// 2. if-else (to check two conditions)
// 3. if-else-if (to check multiple conditions)
// 4. Ternary Operator (to check single condition)

let age = 20;
if (age >= 18) {
    console.log("You are an adult")
}

console.log("-------------------------------")

let temp = 45;
if (temp > 30){
    console.log("It's too hot outside.")
} else{
    console.log("It's not too hot outside.")
}

console.log("-------------------------------")

let marks = 80;
if (marks >=90){
    console.log("A+")
} else if (marks>=80) {
    console.log("A")
} else if (marks>=70) {
    console.log("B")
} else {
    console.log("Fail")
}

console.log("-------------------------------")

let a = 20;
let result = (a >= 18) ? "You are elligible to vote." : "You are not elligible to vote."
console.log(result)