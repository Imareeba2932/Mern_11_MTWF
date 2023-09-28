function addNumbers(a,b){
    return a+b;
}
const sum = addNumbers(2,3);
console.log(sum)
function addNum(a,b){
    console.log(a+b)
}
addNum(2,3)


function greetUser(name){
    console.log("Hello " + name)
}
greetUser("John")

console.log("--------------Arrow Function-----------------")   
const double = (num) => num *2;
console.log(double(2))

const isEven = (num) => {
    if (num%2 == 0){
        return "Even";
    }
    else{
        return "Odd";
    }
};
console.log(isEven(3))