import '../assets/css/style.css';

// <--------------------------------------------------- Procedural Programming
// const cart =[];

// const addToCart =(item)=> cart.push(item);



// const removeFromCart = (id) =>  {
//   const index = cart.findIndex((x) => x.id===id);
//   cart.splice(index, 1);
// }; 

// const hotDog = {id:'🌭', name:'Posh Dog', price: 399};

// addToCart(hotDog);
// console.log(cart);


// setTimeout(()=>{
//   removeFromCart('🌭');
//   console.log(cart);
// }, 2500);

// <--------------------------------------------------- Object Literals and Encapsulation
// const cart ={
//   items:[],
//   add(item){
//     this.items.push(item);
//     },
//   remove(id){
//       const index = this.items.findIndex((x) => x.id===id);
//       this.items.splice(index, 1);
//     },
  
// };

// const hotDog = {id:'🌭', name:'Posh Dog', price: 399};

// cart.add(hotDog);
// console.log(cart);


// setTimeout(()=>{
//   cart.remove('🌭');
//   console.log(cart);
// }, 2500);

// <--------------------------------------------------- Object Literals and Factory Functions

// const createCart=(items=[])=>({
  
//     items,
//   add(item){
//     this.items.push(item);
//     },
//   remove(id){
//       const index = this.items.findIndex((x) => x.id===id);
//       this.items.splice(index, 1);
//     }
// });

// const cart= createCart([]);

// const hotDog = {id:'🌭', name:'Posh Dog', price: 399};

// cart.add(hotDog);
// console.log(cart);


// setTimeout(()=>{
//   cart.remove('🌭');
//   console.log(cart);
// }, 2500);



// <--------------------------------------------------- Frozen State and Immutable Patterns

// const createCart=(items=[])=>({
  
//     items:Object.freeze(items),
//   add(item){
//     const state= [...this.items, item];
//     this.items = Object.freeze(state);
//     },
//   remove(id){
//       const state = this.items.filter((item)=> item.id!== id);
//       this.items = Object.freeze(state);
//     }
// });

// const cart= createCart([]);

// const hotDog = {id:'🌭', name:'Posh Dog', price: 399};

// cart.add(hotDog);
// console.log(cart);

// cart.remove('🌭');
// console.log(cart);

// console.log(Object.isFrozen(cart.items));


// <--------------------------------------------------- Prototypes and .__proto__

console.log({}.constructor);
console.log({}.__proto__);
console.log({} instanceof Object);

console.log([].constructor);
console.log([].__proto__);
console.log([] instanceof Array, [] instanceof Object);
console.log(Array.isArray([]));

const createCart=(items=[])=>({
  
  items:Object.freeze(items),
add(item){
  const state= [...this.items, item];
  this.items = Object.freeze(state);
  },
remove(id){
    const state = this.items.filter((item)=> item.id!== id);
    this.items = Object.freeze(state);
  }
});

const cart= createCart([]);

const hotDog = {id:'🌭', name:'Posh Dog', price: 399};

cart.add(hotDog);
console.log(cart);

cart.remove('🌭');
console.log(cart);

console.log(Object.isFrozen(cart.items));
