import '../assets/css/style.css';


const cart =[];

const addToCart =(item)=> cart.push(item);



const removeFromCart = (id) =>  {
  const index = cart.findIndex((x) => x.id===id);
  cart.splice(index, 1);
}; 

const hotDog = {id:'🌭', name:'Posh Dog', price: 399};

addToCart(hotDog);
console.log(cart);


setTimeout(()=>{
  removeFromCart('🌭');
  console.log(cart);
}, 2500);



