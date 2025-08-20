
'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

export default function AddToCart(props:any) {
    const router=useRouter();

    const handleAddtoCart=()=>{

        const cart=JSON.parse(localStorage.getItem('cart')||'[]');
        cart.push(props.prod);
        localStorage.setItem('cart',JSON.stringify(cart));
        router.push('/carts')
    };
    


  return (
    <>
    <button onClick={handleAddtoCart}>Add to cart</button>
    </>
  )
}
