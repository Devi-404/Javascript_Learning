let foodItems = ["potato", "apple", "litchi", "banana"];
// console.log(foodItems);
// foodItems.push("angur", "burger", "paneer");
// let deletedItem = foodItems.pop();
// console.log(foodItems);
// console.log(`Deleted item ${deletedItem}`);

// let marks = [89, 34, 54, 65, 22];
// console.log(marks.toString());

// let marvelHeroes = ["thor", "spiderman", "ironman", "Dr. Strange", "captain"];
// marvelHeroes.unshift("hawkeye");

// let dcHeroes = ["superman", "batman"];
// let indianHeroes = ["shaktiman", "krish"];

// let heroes = marvelHeroes.concat(dcHeroes, indianHeroes);

// console.log(heroes);

// let val = marvelHeroes.shift();
// console.log(`deleted ${val}`);

// let cartoons = ["oggy", "tom", "jerry", "bheem", "Dr. Jhatka"];
// console.log(cartoons.slice(1, 3));

let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(2, 2, 9, 78);

//Add Element
arr.splice(2, 0, 58);
console.log(arr);

//Delete Element
arr.splice(3, 1);
console.log(arr);

//Replace Element
arr.splice(3, 1, 101);
console.log(arr);