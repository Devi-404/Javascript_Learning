//for loop
// Print 1 to 5
for(let count = 1; count <= 5; count++) {
    console.log("Chikun", count);
}

//Calculate sum of 1 to n numbers
let sum = 0;
let n = 5;
for(let i=1; i<=n; i++) {
    sum = sum + i;
}
console.log("sum is", sum);
console.log("Loop has ended");

//Infinity Loop
// for(let i=1; i>0; i++) {
//     console.log("Infinity", i);
// }  //Never run this code otherwise it will never end and crash your system


//while Loop
let a = 1;
while(a<=5) {
    console.log(a);
    a++;
}

//do-while Loop
let i = 20;
do {
    console.log("Hahaha");
    i++;
} while (i <= 10);

//for-of Loop
let str = "Deviprasad";

for(let i of str) {
    console.log(i);
}

//for-in Loop
let student = {
    name: "Rahul Kumar",
    age: 20,
    cgpa: 7.5,
    isPass: true
};

for(let key in student) {
    console.log(key, student[key]);
}

//Practice Q1
for(let num = 1; num<=100; num++) {
    if(num %2 !== 0) {
        console.log(num);
    }
}

//Practice Q2
let gameNum = 25;

let userNum = prompt("Guess the game number");
console.log(userNum);

while(userNum != gameNum) {
    userNum = prompt("You entered wrong number. Guess again :")
}

console.log("Congratulations, you entered the right number");