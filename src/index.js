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

const createCart=(items=[])=>({
  
    items,
  add(item){
    this.items.push(item);
    },
  remove(id){
      const index = this.items.findIndex((x) => x.id===id);
      this.items.splice(index, 1);
    }
});

const cart= createCart([]);

const hotDog = {id:'🌭', name:'Posh Dog', price: 399};

cart.add(hotDog);
console.log(cart);


setTimeout(()=>{
  cart.remove('🌭');
  console.log(cart);
}, 2500);