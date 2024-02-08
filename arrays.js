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

for (let city of cities) {
    console.log(city.toUpperCase());
}