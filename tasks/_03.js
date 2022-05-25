// 1. Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
  name2: "David Ray1y",
  sclass6: "VI",
  rollno3: 125,
  j5: 224,
  j2: 241,
};
//Sample Output: name,sclass,rollno

let properties = (obj) => Object.keys(obj);
let propertiesOfStudent = (obj) => {
  for (let key in obj) console.log(key);
};
/* console.log(properties(student)); // Array
propertiesOfStudent(student); // String */

//==============================================
//==============================================

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

/* let deleteProperty = (obj) => {
  console.log(obj);
  delete obj.rollno;
  console.log(obj);
}; */
// deleteProperty(student);

//==============================================
//==============================================

// 3. Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
let count = 0;

let getLenght = (obj) => {
  for (let key in obj) if (obj.hasOwnProperty(key)) count++;
  return count;
};
// console.log(getLenght(student));

//==============================================
//==============================================

//! From video

//! 1 Address object - a fucntion takes an object and shows all keys with values of the object

const address = {
  country: "Turkey",
  street: "Fatih",
  home: 8,
  isModern: true,
};
const getValueAndKeys = (obj) => {
  for (let key in obj) console.log(`${key}: ${obj[key]}`);
};
// getValueAndKeys(address);

//!2 Create 2 function one of them constructor and second is factory

const factoryFunc = (country, street, home, isModern) => ({
  country,
  street,
  home,
  isModern,
});

// console.log(factoryFunc("Turkey", "Sofiya", 5, false));

const ConstructorFunc = function (country, street, home, isModern) {
  this.country = country;
  this.street = street;
  this.home = home;
  this.isModern = isModern;
};

let obj = new ConstructorFunc("Uzbekistan", "Al-Buxori", 5, true);
// console.log(obj);
