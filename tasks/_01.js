// 1. Write a JavaScript program that accept two integers and display the larger.

const getLarger = function (num1 = 2, num2 = 5) {
  if (typeof num1 !== "number" || typeof num2 !== "number")
    return "Please enter number";
  else if (num1 > num2) return num1;
  return num2;
};
// console.log(getLarger("Islom", 5));
// console.log(getLarger(5, 10)); // 10
// console.log(getLarger(11, 5)); // 11

// ================================================
// ================================================

// 2. Write a JavaScript conditional statement to find the sign of product of three numbers.
// Display an alert box with the specified sign.

const findSignOfNumber = function (num1, num2, num3) {
  if (num1 > 0 && num2 > 0 && num3 > 0) {
    return `The sign is => +`;
  } else if (num1 < 0 && num2 < 0 && num3 < 0) {
    return `The sign is => -`;
  } else if (num1 > 0 && num2 < 0 && num3 < 0) {
    return `The sign is => -`;
  } else if (num1 < 0 && num2 > 0 && num3 < 0) {
    return `The sign is => -`;
  }
  return `The sign is => -`;
};
// console.log(findSignOfNumber(5, 6, 7)); // +
// console.log(findSignOfNumber(-5, -6, -7)); // -
// console.log(findSignOfNumber(5, -6, -7)); // -
// console.log(findSignOfNumber(-5, 6, -7)); // +

//===============================================
//===============================================

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to
show the result. */
let num1 = 1;
let num2 = 30;
let num3 = 21;

const sortNumber = (n1, n2, n3) => {
  if (n1 > n2 && n1 > n3) {
    if (n2 > n3) console.log(`${n1}, ${n2}, ${n3}`);
    else console.log(`${n1}, ${n3}, ${n2}`);
  } else if (n2 > n1 && n2 > n3) {
    if (n1 > n3) console.log(`${n2}, ${n1}, ${n3}`);
    else console.log(`${n2}, ${n3}, ${n1}`);
  } else if (n3 > n1 && n3 > n2) {
    if (n1 > n2) console.log(`${n3}, ${n1}, ${n2}`);
    else console.log(`${n3}, ${n2}, ${n1}`);
  }
};
// sortNumber(num1, num2, num3);

//===============================================
//===============================================

/* 4. Write a JavaScript conditional statement to 
find the largest of five numbers. Display an
alert box to show the result. */

const findLargesFive = function (n1, n2, n3, n4, n5) {
  if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) return n1;
  else if (n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5) return n2;
  else if (n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5) return n3;
  else if (n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5) return n4;
  return n5;
};
// console.log(findLargesFive(5, 4, 3, 2, 1));// 5
// console.log(findLargesFive(5, 6, 3, 2, 1)); // 6
// console.log(findLargesFive(5, 4, 7, 2, 1)); // 7
// console.log(findLargesFive(5, 4, 3, 8, 1)); // 8
// console.log(findLargesFive(5, 4, 3, 2, 6)); // 6
