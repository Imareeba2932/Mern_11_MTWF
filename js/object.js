const student = {
    name : "Raju",
    email : "raju@gmail.com",
    password : "123",
    mobile : 1234567890,
}
console.log(student);

console.log(student.name);
console.log(student.email);
console.log(student["password"]);

// replace value
student.password = "abrakadabra";
console.log(student.password);

// adding new key value pair
student.address = "Bangalore";
console.log(student);

console.log("--------------");

const smartphones = {
    "brand" : "Apple",
    "model" : "iPhone 11",
    "price" : 60000,
    "color" : ["red", "white", "blue", "black"],
};
console.log(smartphones);
console.log(smartphones.color[1]);
smartphones.color[2] = "skyblue";
console.log(smartphones);

console.log("--------------");

const phones = [
    {brand : "Apple", model : "iPhone 11", price : 60000, color : ["red", "white", "blue", "black"]},
    {brand : "Samsung", model : "Galaxy S10", price : 50000, color : ["red", "white", "blue", "black"]},
    {brand : "OnePlus", model : "7T", price : 35000, color : ["red", "white", "blue", "black"]},
    {brand : "Google", model : "Pixel 4", price : 80000, color : ["red", "white", "blue", "black"]},
];
console.log(phones[1].model);
console.log(phones[2].color[2]);

phones[2].model = "8T";
console.log(phones);