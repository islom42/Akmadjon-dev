/* 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if
the current number is odd or even, and display a message to the screen. */

const fromZeroToFifteen = (n1, n2) => {
  for (let i = n1; i <= n2; i++) {
    i % 2 !== 0 ? console.log(`${i} => odd`) : console.log(`${i} => even`);
  }
};
// fromZeroToFifteen(0, 15);

//==========================================
//==========================================

/* 6. Write a JavaScript program which compute, the average marks of the following
students Then, this average is used to determine the corresponding grade.
Student Name Marks Range Grade
        David 80 <  60 F
        Vinoth 77 < 70 D
        Divya 88 <  80 C
        Ishitha 95 <  90 B
        Thomas 68 < 100 A */
let marks = [50, 50, 50, 50, 50];
let avereageMark = 0;

marks.map((mark) => {
  avereageMark += mark;
});

const getAverageMark = (mark) => {
  mark /= marks.length;

  if (mark >= 100) return "A";
  if (mark >= 90) return "B";
  if (mark >= 80) return "C";
  if (mark >= 70) return "D";
  if (mark >= 60) return "E";
  return "F";
};
// console.log(getAverageMark(avereageMark));

//==========================================
//==========================================

//! Loop exercise
//!Max of two numbers
const getLarger = function (num1 = 2, num2 = 5) {
  return num1 > num2 ? num1 : num2;
};
// console.log(getLarger(6, 5));
// console.log(getLarger(6, 7));

//==========================================
//==========================================

//! isLandscape
const isLandscape = (width, height) => width > height;
/* console.log(isLandscape(800, 600));
console.log(isLandscape(800, 900)); */

//==========================================
//==========================================

//! FizzBuzz
const fizzBuzz = (num) => {
  if (typeof num !== "number") return NaN;
  else if (!(num % 15)) return "FizzBuzz";
  else if (num % 3 === 0) return "Fizz";
  else if (num % 5 === 0) return "Buzz";
  return num;
};
// console.log(fizzBuzz("13"));
// console.log(fizzBuzz(30));
// console.log(fizzBuzz(12));
// console.log(fizzBuzz(20));
// console.log(fizzBuzz(13));

//==========================================
//==========================================

//! MaxSpeed
const SPEEDLIMIT = 70;
const KMPERPOINT = 5;
let points = 0;

const checkMaxSpeed = (speed) => {
  if (speed < SPEEDLIMIT + KMPERPOINT) return `OK your speed is ${speed}`;
  else {
    points += Math.trunc((speed - SPEEDLIMIT) / KMPERPOINT);

    return points >= 12 ? "Liceience is suspended" : points;
  }
};
// console.log(checkMaxSpeed(73));
// console.log(checkMaxSpeed(100));
// console.log(checkMaxSpeed(520));

//==========================================
//==========================================

//! odd or Even numbers
const getEvenAndOddNumbers = (num1, num2) => {
  let i = num1;

  while (i <= num2) {
    if (i % 2 === 0) console.log(`${i} => even`);
    else console.log(`${i} => odd`);
    i++;
  }
};
// console.log(getEvenAndOddNumbers(10, 50));

//==========================================
//==========================================

//! count Truthy value

let arrayOfValues = [
  null,
  undefined,
  true,
  "Islom",
  "Akhmadjon",
  "MuhammadAli",
  false,
  0,
];
let truhyValues = 0;

const countTruth = (array) => {
  array.map((value) => (value ? truhyValues++ : "Not truthy"));
  return truhyValues;
};
// console.log(countTruth(arrayOfValues));

//==========================================
//==========================================

//! Show only string properties
let stringValues = 0;
let obj = {
  name: "Islom",
  age: 20,
  isMarried: false,
  job: "Front-end developer",
  teacher: "Akhmadjon Abdusamadov",
  friend: "MuhammadAli",
  country: "Turkey",
};

const countStringProperties = (obj) => {
  Object.values(obj).filter((value) => {
    if (typeof value === "string") stringValues++;
  });
  return stringValues;
};
// console.log(countStringProperties(obj));

//==========================================
//==========================================

//! Sum of multiple 3 and 5
let sum = 0;

const getSum = (num) => {
  for (let i = 0; i <= num; i++) {
    if (i % 3 === 0) sum += i;
    else if (i % 5 === 0) sum += i;
  }
  return sum;
};
// console.log(getSum(5));
// console.log(getSum(10));

//==========================================
//==========================================

let arrayOfValues2 = [
  null,
  undefined,
  "",
  NaN,
  false,
  "Islom",
  "Akhmadjon",
  "MuhammadAli",
  false,
  0,
];
let falsyValues = 0;

const countFalsy = (array) => {
  array.map((value) => (!value ? falsyValues++ : "Not falsy"));
  return falsyValues;
};
// console.log(countFalsy(arrayOfValues2));

//==========================================
//==========================================

//! calc Grade Function

let mark = [80, 39, 90];
let sumOfMarks = 0;

let getAverage = (mark) => {
  mark.map((value) => (sumOfMarks += value));
  return Math.round(sumOfMarks / mark.length);
};

const getScore = (score) => {
  console.log(`Average score is ${score}`);
  if (score <= 59) return "F";
  if (score <= 69) return "D";
  if (score <= 79) return "C";
  if (score <= 89) return "B";
  return "A";
};
// console.log(getScore(getAverage(mark)));

//==========================================
//==========================================

//! Show stars

const showStars = (sym, num1) => {
  for (let i = 1; i <= num1; i++) {
    console.log(sym.repeat(i));
  }
};
// showStars("*", 10);
// showStars("#", 10);
