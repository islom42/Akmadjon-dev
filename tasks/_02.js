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

marks.map((mark, index, arr) => {
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
console.log(getAverageMark(avereageMark));
