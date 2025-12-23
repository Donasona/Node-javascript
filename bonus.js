// write a program to calculate the bonus

// salary above or equal to 50k ---> 10%
// salary above or equal to 30k --->7%
// other wise --->5%

// get the salary and calculate the bonus and print the total

let salary = 45000;
console.log("Salary:", salary);
let bonus = 0;

if (salary >= 50000) {
  bonus = salary * 0.10;
} else if (salary >= 30000) {
  bonus = salary * 0.07;
} else {
  bonus = salary * 0.05;
}

let total = salary + bonus;
console.log("Bonus:", bonus);
console.log("Total Pay:", total);