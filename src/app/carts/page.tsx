"use client";

import { useState, useEffect } from "react";



  export default function CartPage() {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage
 
const handleRemove =(indexToRemove:number)=>{

const updatedCart=[...cart];
updatedCart.splice(indexToRemove,1);
setCart(updatedCart);
localStorage.setItem('cart',JSON.stringify(updatedCart));

};
return(
<div style={{height:'500px',width:'100%'}}>
<h3>  your cart</h3>

{


cart.length === 0 ?(

<p>your cart is empty</p>
):(

  cart.map((item:any, index:number)=>(
    <div  key={index}>

    <h4>{item.title}</h4>
               
            
     <img src={item.image} style={{height:'150px' ,width:'100px',marginBottom:'20px'}} alt="..."/>
          
           
            <p>Price: Rs{item.price}</p>
           

            <button onClick={()=>handleRemove(index)}>Remove</button>
             </div>
  )

  )


  
)

}




</div>



);}
