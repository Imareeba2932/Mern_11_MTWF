// Looping Statements
// 1. for loop
// 2. while loop

for (let i=1; i<=10; i++){
    console.log(i)
}

console.log("-------------------------------")

let a = "";
for (let i=1; i<=10; i++){
    a = a + i + " "
}
console.log(a)

console.log("--------------WHILE LOOP-----------------")

// Initialize
let count = 0;
while (count <= 5){
    console.log("count :" + count)
    count++;
}

console.log("--------------FOR IN LOOP-----------------")
const car = {
    "brand" : "BMW",
    "model" : "X5",
    "year" : 2019
};
console.log("Car Information");
for(let x in car){
    console.log(x + " : " + car[x]);
}

console.log("--------------FOR OF LOOP-----------------")

const colors = ["red", "green", "blue", "yellow"];
for (let x of colors.slice(1,3)){
    console.log(x);
}