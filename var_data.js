console.log("Hello World");
console.log("Code is running...");
console.log("Code is also running...");
console.log("Code is Code is looking like a wow...");
// age = 17;
// console.log(age);
// console.log(age + 1);
// fulName = "Tony Ferguson";
// console.log(fulName);
// price = 99.99;
// console.log(price);
// x = null;
// y = undefined;
// isFollow = false;
// console.log(typeof isFollow)
// console.log(x, y, isFollow);

// let fullName = "huddabang";
// let age = 17;
// let totalPrice = 1000;

// console.log(fullName);
// console.log(typeof fullName);
// let x = BigInt("123");
// console.log(x, typeof x);
// let y = Symbol("Hello!");
// console.log(y, typeof y);

const student = {
    // KEY   :    VALUE
    fullName : "Deviprasad",
    age : 18,
    cgpa : 8.2,
    isPass : true
};

student["age"] = student["age"] + 1;
console.log(student.age);
console.log(typeof student);

const product = {
    title: "Ball Pen",
    rating: 4,
    offer: 5,
    price: 270,
};

console.log(product, typeof product);

const profile = {
    userName: "shradhakhapra",
    isFollow: false,
    posts: 195,
    followers: 569000,
    following: 4,
    profession: "Entrepreneur",
};

console.log(profile, typeof profile.isFollow);