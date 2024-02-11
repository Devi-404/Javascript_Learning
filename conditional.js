//Conditional Statements

//if statement
let age = 15;

if(age >= 18) {
    console.log("You can vote");
}

if(age < 18) {
    console.log("You cannot vote");
}


//if-else statement
let mode1 = "dark";
let color1;

if(mode1 === "dark") {
    color1 = "black";
}
else {
    color1 = "white";
}
console.log(color1);

let age2 = 25;

if(age2 >= 18) {
    console.log("vote");
}
else {
    console.log("Not vote")
}

let num = 4;

if(num % 2 === 0) {
    console.log("Number is even");
}
else {
    console.log("Number is odd");
}


//else-if statement
if(age < 18) {
    console.log("Junior");
}
else if (age > 60) {
    console.log("Senior");
}
else {
    console.log("Middle");
}

let mode = "dark";
let color;

if(mode === "dark") {
    color = "black";
}
else if (mode === "blue") {
    color = "blue";
}
else if (mode === pink) {
    color = "pink";
}
else {
    color = "white";
}

console.log(color);


//Ternary Statement

let age1 = 25;

let result = age1 >= 18 ? "adult" : "not adult";  //simpler, compact if-else


//Practice question 1
let num1 = prompt ("Enter a number");

if(num1 % 5 === 0) {
    console.log(num1, "is equal to 5");
} else {
    console.log("Number is not equal to 5");
}


//Practice question 2

let score = prompt("Enter your score (0-100):");
let grade;

if(score >= 90 && score <= 100) {
    grade = "A";
} else if(score >= 70 && score <=89) {
    grade = "B";
} else if(score >= 60 && score <= 69) {
    grade = "C";
} else if(score >= 0 && score <= 59) {
    grade = "D";
} else if(score >= 0 && score <= 49) {
    grade = "F";
}

console.log("According to your scores, your grade is", grade);