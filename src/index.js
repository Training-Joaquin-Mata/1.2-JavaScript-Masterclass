import '../assets/css/style.css';


//-----------------------Immutable vs Mutable Concepts

// let a = 'Super Burguers';
// a='Big Slurp';

// const b = a.slice(0,1);
// console.log(a,b);

// const x=Object.freeze( {id: '🍟', name: 'Jumbo Fries', price: 199});

// console.log(x);

//-----------------------Immutable Data Structures
//   const items = Object.freeze([
//         { id: '🍔', name: 'Super Burger', price: 399 },
//         { id: '🍟', name: 'Jumbo Fries', price: 199 },
//         { id: '🥤', name: 'Big Slurp', price: 299 },
//       ]);
//       console.log(items);
// //ADD
//   const newItem={id: '🌭', name: 'Posh Dog', price: 299};
//   // items.push(newItem); //this modify the original array
//     const newItems=[...items, newItem];
//     console.log(newItems);
//   console.log(newItem);
// // //REMOVE
// // const removed = items.splice(0,1); //this modify the original array
// const updatedItems= items.filter((item) => item.id !== '🍔'); //Using filter insted of splice doesnt modify the original array
// console.log(updatedItems);


// // Objects ADD

// const item={id: '🌭', name: 'Posh Dog'};
// // item.price=299;
// console.log(item);
// const itemNew={...item, price: 299};
// console.log(itemNew);

// //Object REMOVE
// const itemToRemove={id: '🌭', name: 'Posh Dog', price:299};
// console.log(itemToRemove);
// //delete itemToRemove.price;

// const {price, ...leftOverItems} = itemToRemove;

// console.log(itemToRemove);
// console.log(price);
// console.log(leftOverItems);

// //identity
// console.log({}==={});
// console.log([]===[]);
// console.log(itemToRemove=== itemToRemove);
// console.log(itemToRemove=== leftOverItems);

//-----------------------Imperative vs Declarative Programming


//   const items = Object.freeze([
//         { id: '🍔', name: 'Super Burger', price: 399 },
//         { id: '🍟', name: 'Jumbo Fries', price: 199 },
//         { id: '🥤', name: 'Big Slurp', price: 299 },
//       ]);
//       console.log(items);
// const itemNamesImperative=[];

// for(let i=0; i<items.length; i++){
//   const item= items[i];
//   itemNamesImperative.push(item.name);
// }
// console.log(itemNamesImperative);

// const itemNamesDeclarative = items.map(function(item){ 
// return item.name;
// });

// console.log(itemNamesDeclarative);

// const priceChain = items.map(function(item){ 
//   return item.price;
//   }).reduce(function(prev, next){
//     return prev + next;
//   });

//   console.log(priceChain);
  

//-----------------------Lambda Expressions vs Anonymous Functions

// const items = Object.freeze([
//           { id: '🍔', name: 'Super Burger', price: 399 },
//           { id: '🍟', name: 'Jumbo Fries', price: 199 },
//           { id: '🥤', name: 'Big Slurp', price: 299 },
//         ]);
//         console.log(items);
// //function declaration
// function getItemName(item){
//   return item.name;
// }
// console.log(items.map(getItemName));

// //Anonymus function
// console.log(items.map(function getItemName(item){
//   return item.name;
// }));

// //Lambda Expression
// const getNameExp= (item)=>item.name;
// console.log(items.map(getNameExp));


//-----------------------Pure Functions and Referential Transparency
const items = Object.freeze([
  { id: '🍔', name: 'Super Burger', price: 399 },
  { id: '🍟', name: 'Jumbo Fries', price: 199 },
  { id: '🥤', name: 'Big Slurp', price: 299 },
]);
console.log(items);

//Pure Function 
//1. Referencial transparency -A function only depends on its input (si ingresas la misma entrada, la salida no debe cambiar)
//2. Side-effect free (console logs, reasign a variable, mutate an array or object, injecting things into the DOM)
const  getTotalImpure=()=>{
console.log(items.reduce((x, y)=> x +y.price, 0 ));
};

getTotalImpure();

const totalPure=(v)=> v.reduce((x, y)=> x +y.price, 0);
document.querySelector('#app').innerHTML= totalPure(items);

console.log(totalPure(items));