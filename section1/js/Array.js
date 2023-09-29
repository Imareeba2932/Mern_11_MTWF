const fruits = ['apple', 'banana', 'orange', 'grape', 'melon'];
console.log(fruits);

console.log("--------------Array Functions-----------------");
// 1. push
// 2. pop
// 3. shift
// 4. unshift
// 5. indexOf
// 6. slice
// 7. concat
// 8. forEach
// 9. map
// 10. filter

console.log(fruits[0]);
console.log(fruits[3]);
console.log(fruits.slice(1,3));

// adds an element at the end of an array
fruits.push('mango')
console.log(fruits);

// removes an element from the end of an array
fruits.pop()
console.log(fruits);

// removes an element from the beginning of an array
fruits.shift()
console.log(fruits);

// adds an element at the beginning of an array
fruits.unshift('mango')
console.log(fruits);

// Combines two or more array
const vegetables = ['potato', 'tomato', 'onion']
const newArray = fruits.concat(vegetables)
console.log(newArray);

const index = fruits.indexOf('tomato')
console.log(index);

// Executes a provided function once for each array element.
// const num = [1,2,3,4,5]
// num.forEach(function(num){
//     console.log(num*2)
// })

const num = [1,2,3,4,5];
num.forEach((num) => {
    console.log(num*2)
});

// Creates a new array with the results of calling a provided function on every element in the calling array.
const a=[3,5,4,6,3]
const double = a.map((a) => a*2);
console.log(double);

const b=[3,5,4,6,3]
const evenNum = b.filter((b) => b%2 == 0);
console.log(evenNum);

console.log("-------------------------");

let nums = [1,2,3,4,5];

for (let i=0; i<nums.length; i++){
    console.log(nums[i]**2);
}

console.log("-------------------------");

for (let x of nums){
    console.log(x**2);
}

console.log("-------------------------");

nums.forEach((x) => {
    console.log(x**2);
});

console.log("-------------------------");
let newArr = [];
for (let x of nums){
    newArr.push(x**2);
}
console.log(newArr);

// using map
let newArr2 = nums.map((x) => x**2);
console.log(newArr2);

console.log("------------Filter Function-------------");
let evenNums = [];
for (let x of nums){
    if (x%2 == 0){
        evenNums.push(x);
    }
}
console.log(evenNums);

// using filter
let evenNums2 = nums.filter((x) => x%2 == 0);
console.log(evenNums2);

let prices = [100, 2000, 2500, 400, 500, 600, 700, 800, 900, 1000];
const newPrices = prices.filter((price) => price > 1000 && price < 3000);
console.log(newPrices);

let colors = ['red', 'green', 'blue', 'yellow', 'orange', 'black', 'white'];
const newColors = colors.filter((color) => color.length > 4);
console.log(newColors);

f = ['Apple','Banana','Grapes','Orange','Banana']
console.log(f.slice(1,4))