// const merhaba = function(){
//     console.log("merhaba")
// }
// merhaba();

// --- Arrow Function ---

// const merhaba = () => {
//     console.log("merhaba");
// }
// merhaba();

// const merhaba = (firstName, lastName) => console.log("Merhaba", firstName, lastName); 

// Fonksiyon tek parametre alıyorsa paranteze gerek yok
//Tek işlem yapıyorsanız süslü parantezleri de silebilirsiniz.

// merhaba("Murat", "Özdemir");

// const cube = function(x){
//     return x* x* x;
// }
// console.log(cube(4));

// const cube = x => x*x*x;

// console.log(cube(5));

// --- Destructing ---

// let number1, number2;

// arr = [100,200,300,400];

// number1 = arr[0];
// number2 = arr[1];

// [number1, number2] = arr;
// const [number1,number2] = arr

// console.log(number1,number2);

// Obje Destructing

// const numbers ={
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50,
// };
// const {a,c,e} = numbers;
// console.log(a,c,e);

// Function Destructing

// const getLangs = () => ['Python','Java','Css'];

// const [lang1,lang2,lang3] = getLangs();

// console.log(lang1,lang2,lang3);

// const person = {
//     name:'Onur Özdemir',
//     year: 1997,
//     salary : 5000,
//     showInfos : () => console.log('Bilgiler Gösteriliyor')
// }

// const {name : isim, year : yil, salary : maas, showInfos : bilgileriGoster } = person;
// console.log(isim,yil,maas);
// bilgileriGoster();

// ---Spread Operatoru---

// const langs = ['Python', 'C++', 'Java', 'Php'];

// console.log(langs[0], langs[1], langs[2], langs[3])

// console.log(...langs); // Spread İslemi

// const langs2 = ['Javascript', 'C#', ...langs];
// console.log(langs2);

// const numbers = [1,2,3,4,5,6,7,8,9];

// const [a,b,...numbers2] = numbers
// console.log(a,b);
// console.log(numbers2);

// const addNumbers = (a,b,c) => console.log(a+b-c);

// const numbers = [100,200,150];

// addNumbers(...numbers);

// --- For In - For Of ---

// const person = {
//     name:'Onur Özdemir',
//     age:23,
//     salary : 5000
// }
// const langs = ['Python', 'Java', 'C++', 'Php'];

// const name = 'Onur';

// For In
// Object
// for(let prop in person)[
//     console.log(prop,person[prop])
// ]

// for (let index in langs){
//     console.log(index,langs[index])
// }

//String

// for (let index in name) {
//     console.log(index,name[index])
// }

// Object 

// for (let value in person){
//     console.log(value)
// }

// for (let value of langs){
//     console.log(value);
// }

// String

// for (let character of name){
//     console.log(character);
// }

// ---- Mapler - Key - Value ----

// let myMap = new Map(); // Olusturma

// console.log(myMap);

// const key1 = 'Onur';
// const key2 = {
//     a: 10,
//     b: 20
// };
// const key3 = () => 5;
// SET
// myMap.set(key1, 'String Değer');
// myMap.set(key2, 'Object literal Değer');
// myMap.set(key3, 'Function değer');

// GET

// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));

// console.log(myMap);

// Map Boyutu

// console.log(myMap.size);

// const cities = new Map();

// cities.set('Ankara', 6);
// cities.set('İstanbul', 20);
// cities.set('İzmir', 5);

// For Each

// cities.forEach(function(value, key){
//     console.log(key, value);
// })

// For Of

// for(let [key,value] of cities){ // Destructing
//     console.log(key,value);
// }

// Map Keys

// for(let key of cities.keys()){
//     console.log(key);
// }

// Map Values

// for(let value of cities.values()){
//     console.log(value);
// }

// const array = [['key1','value1'],['key2','value2']];

// const lastMap = new Map(array);

// console.log(lastMap);

// Maplerden Array Olusturma

// const cities = new Map();

// cities.set('Ankara', 6);
// cities.set('İstanbul', 20);
// cities.set('İzmir', 5);

// const array = Array.from(cities);

// console.log(array);

// --- Referans Tipleri ---

// let a = 'Onur'
// let b = 'Onur'

// if (a === b){
//     console.log('Eşit');
// }

// let array1 = [1,2,3,4,5];
// let array2 = [1,2,3,4,5];

// if(array1 === array2){
//     console.log('Eşit');
// }

// const person1 = {
//     name:'Onur',
//     age:23
// }
// const person2 = {
//     name:'Onur',
//     age:23
// }
// if(person1 === person2){
//     console.log('Eşit')
// }

// const cities = new Map();
// const key = [1,2,3];
// cities.set('Ankara', 6);
// cities.set('İstanbul', 20);
// cities.set(key, 'Array');

// console.log(cities.get(key));

// ---Setler---

// const mySet = new Set();
// mySet.add(100);
// mySet.add(100);
// mySet.add(3.14);
// mySet.add('Onur');
// mySet.add(true);
// mySet.add([1,2,3]);
// mySet.add({a:1, b:2, c:3});

// const mySet2 = new Set([100, 3.14, 'Onur']);

// console.log(mySet);
// console.log(mySet2);

// Size

// console.log(mySet.size);

// Delete 

// mySet.delete('Onur');

// Has Metodu

// console.log(mySet.has('Onur'));
// console.log(mySet.has(3.14));
// console.log(mySet.has(2000));
// console.log(mySet.has([1,2,3]));

// For Each

// mySet.forEach(function(value){
//     console.log(value);
// })

// For Of 

// for (let value of mySet){
//     console.log(value);
// }

// Set den Array Olusturma

// const array = Array.from(mySet);

// console.log(array);









