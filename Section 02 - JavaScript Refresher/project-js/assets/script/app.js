//import { apiKey } from './util.js';
//console.log(apiKey);

// import * as util from './util.js';
// import myNewVariable from './util.js';
// console.log(myNewVariable);
// console.log(util.varOne);
// console.log(util.varTwo);

// const user = {
//     name: 'David',
//     surname: 'Macias',
//     greet() {
//         console.log(this.name);
//     },
// };

// user.greet();

const hobbies = ['sports', 'cooking', 'reading'];
console.log(hobbies[0]);

hobbies.push('working');
console.log(hobbies);

const index = hobbies.findIndex((item) => item === 'sports');

console.log(index);

const editedHobbies = hobbies.map((item) => ({ text: item }));

console.log(editedHobbies);

const { name, age } = {
    name: 'David',
    age: '35',
};

console.log(name, age);

const moreHobbies = ['Reading'];
const mergedHobbies = [...moreHobbies, 'hola'];
console.log(mergedHobbies);
