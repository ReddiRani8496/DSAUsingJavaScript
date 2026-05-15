let person = {
  name: "Rani",
  age: 22,
  city: "Hyderabad",
};

console.log(person);

//Method 2: Using new Object()

let car = new Object();

car.brand = "Toyota";
car.model = "Camry";

console.log(car);

console.log(car["brand"]);
console.log(car["model"]);

// add new values to object
let obj = {};
obj.name = "Rani";
obj.age = 25;
console.log(obj);

// print keys
for (let key in obj) {
  console.log(key);
}

// print values
for (let key in obj) {
  console.log(obj[key]);
}

// print only values using Object.values
console.log(Object.values(obj));


console.log(person.hasOwnProperty("age"));
console.log(person.hasOwnProperty("city"));