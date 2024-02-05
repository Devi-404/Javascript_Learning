//Strings
// let str = "Deviprasad";
// let str2 = 'Youtube';
// console.log(str.length);
// console.log(str2.length);
// console.log(str[4]);

// //Template Literals
// let specialString = `This is a template literal ${1 + 2 + 3}`;
// console.log(specialString);


// let obj = {
//     item: "pen",
//     price: 10,
// };
// console.log(`The cost of ${obj.item} is ${obj.price} rupees`);

// console.log("Git\nhub");
// console.log("Git\thub");

// let escape = "Git\nhub";
// console.log(escape.length);


//String Methods in JS
// let str3 = "  Devi  pra  sad ";
// console.log(str3.toUpperCase());
// console.log(str3.toLowerCase());
// console.log(str3.trim());

let str4 = "Chikun";
console.log(str4.slice(3, 5));

let str5 = "dada";

let res = str4.concat(str5); //str4 + str5; also you write this type
console.log(res);

console.log(str5.replace("d", "t"));
console.log(str5.replaceAll("d", "t"));
console.log(str5.charAt(2));

//Practice Question
let fullName = prompt("Enter your Fullname without spaces");
let userName = "@" + fullName + fullName.length;
console.log(userName);