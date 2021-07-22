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
// const items = Object.freeze([
//   { id: '🍔', name: 'Super Burger', price: 399 },
//   { id: '🍟', name: 'Jumbo Fries', price: 199 },
//   { id: '🥤', name: 'Big Slurp', price: 299 },
// ]);
// console.log(items);

// //Pure Function 
// //1. Referencial transparency -A function only depends on its input (si ingresas la misma entrada, la salida no debe cambiar)
// //2. Side-effect free (console logs, reasign a variable, mutate an array or object, injecting things into the DOM)
// const  getTotalImpure=()=>{
// console.log(items.reduce((x, y)=> x +y.price, 0 ));
// };

// getTotalImpure();

// const totalPure=(v)=> v.reduce((x, y)=> x +y.price, 0);
// document.querySelector('#app').innerHTML= totalPure(items);

// console.log(totalPure(items));

//-----------------------Function Closures
// const items = Object.freeze([
//   { id: '🍔', name: 'Super Burger', price: 399 },
//   { id: '🍟', name: 'Jumbo Fries', price: 199 },
//   { id: '🥤', name: 'Big Slurp', price: 299 },
// ]);

// const getNameFromId = (id)=> (item)=> item.find((item) => item.id === id).name;
// const getFries = getNameFromId('🍟');
// console.log(getFries(items));
// console.log(items);


// const getPriceById=(id)=>(item)=> item.find((item)=> item.id === id ).price;
// const getPrice = getPriceById('🍔'); 
// console.log(getPrice(items));

// //Esta funcion permite usar el elemento interno de una funcion como parametro para otra funcion
// //En el caso de este ejemplo el parametro que usa dentro de la funcion closure es el id, pues lo usa en la funcion dentro de la primer función

//-----------------------Higher-Order Functions
// const items = Object.freeze([
//   { id: '🍔', name: 'Super Burger', price: 399 },
//   { id: '🍟', name: 'Jumbo Fries', price: 199 },
//   { id: '🥤', name: 'Big Slurp', price: 299 },
// ]);

// // HOF 
// // 1. Return a new function
// // 2. Can take another function as arguments

// const getNameFromId = (id)=> (item)=> item.find((item) => item.id === id).name;
// const getFries = getNameFromId('🍟');
// console.log(getFries(items));
// console.log(items);


// const getPriceById=(id)=>(item)=> item.find((item)=> item.id === id ).price;
// const getPrice = getPriceById('🍔'); 
// console.log(getPrice(items));


//-----------------------Currying and Partial Application

// const items = Object.freeze([
//   { id: '🍔', name: 'Super Burger', price: 399 },
//   { id: '🍟', name: 'Jumbo Fries', price: 199 },
//   { id: '🥤', name: 'Big Slurp', price: 299 },
// ]);


// const curry = (fn)=>{
//   return (...args)=>{
//     if(args.length>= fn.length){ 
//         return fn.apply(null, args);  
//     }
//     return fn.bind(null, ...args);
//   };  
// };

// const getNameFromId = curry((id, item)=> item.find((item) => item.id === id).name);

// // With the curryied you can pass an argument and pass the others later
// // you can pass the arguements separated in a functional way
// const getFries = getNameFromId('🍟')(items);
// console.log(getFries);

// // you can pass all the arguments like a 'normal' function
// const getBurger = getNameFromId('🍔',items); 
// console.log(getBurger);

// //You can pass just one argument and the other later
// const getSlurp = getNameFromId('🥤'); // partialy applying
// console.log(getSlurp(items));

//<-----------------------Function Composition and Currying


// const compose = (...fns)=> (x)=> console.log(x)||fns.reduceRight((v, f)=>f(v), x);

// const curry = (fn)=>{
//   return (...args)=>{
//     if(args.length>= fn.length){ 
//         return fn.apply(null, args);  
//     }
//     return fn.bind(null, ...args);
//   };  
// };

// const split=curry((separator, string)=>string.split(separator));
// const join = curry((separator, string)=> string.join(separator));
// const map = curry((fn, array)=>array.map(fn));
// const toLowerCase = (x)=> x.toLowerCase();
// // const str = 'ultimate COURSES';


// const slugify = compose(join('-'),map(toLowerCase),split(' '));

// console.log(slugify('Ubro apps'));

// // const splitText = split(' ')( 'Ubro Apps');
// // const mappedText = map((x)=> x.toLowerCase())(split(' ')( 'Ubro Apps'));
// // const joinedText = join('-')(map(toLowerCase)(split(' ')( str)));

// // console.log(joinedText);

// // const slugify = 'Ubro Apps'.split(' ').map((x)=> x.toLowerCase()).join('-');
// // console.log(slugify);



//<-----------------------Function Pipes and Currying

const pipe = (...fns)=> (x)=> fns.reduce((v, f)=>f(v), x);

const curry = (fn)=>{
  return (...args)=>{
    if(args.length>= fn.length){ 
        return fn.apply(null, args);  
    }
    return fn.bind(null, ...args);
  };  
};

const split=curry((separator, string)=>string.split(separator));
const join = curry((separator, string)=> string.join(separator));
const map = curry((fn, array)=>array.map(fn));
const toLowerCase = (x)=> x.toLowerCase();
// const str = 'ultimate COURSES';


const slugify = pipe(
  split(' '),
  map(toLowerCase),
  join('-'),
    );

console.log(slugify('Ubro apps'));