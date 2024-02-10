let marks = [97, 82, 69, 36];
console.log(marks[2] = 89);
console.log(marks, marks.length);

//print heroes using for loop
let heroes = ["Batman", "Hanuman", "Shaktiman", "Spiderman", "Superman"];
for (let idx=0; idx<heroes.length; idx++) {
    console.log(heroes[idx]);
}

//using for of loop
for(let hero of heroes) {
    console.log(hero)
}

let cities = ["delhi", , "mumbai", "hydrabad"];
console.log(cities[1]);


//Practice Question1
let marks1 = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let val of marks1) {
    sum += val;
} 

let avg = sum / marks1.length;
console.log(`avg marks of the class = ${avg}`);

//Practice Question2 Using for-of loop
let items = [250, 645, 300, 900, 50];

// let idx = 0;
// for (let val of items) {
//     let offer = val / 10;
//     items[idx] = items[idx] - offer;
//     console.log(`value after offer = ${items[idx]}`);
//     idx++;
// }

//Using for loop
for (let i=0; i<items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);