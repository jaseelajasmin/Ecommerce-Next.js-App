"use client"
import React,{useEffect, useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProductCard(props:any) {
  const router=useRouter();//use router for navigation
    var prod=props.product;
    const [selectProduct,setSelectProduct]= useState({});
    const selectProd=() =>{
console.log("selecting product",prod);
setSelectProduct(prod);

    }
    useEffect(()=>{
      fetch ('https://fakestoreapi.com/products/1');},[]);
    

  return (<div>
{/* <button onClick={()=>{

  router.push(`/products/${prod.id}`)


}}> Details</button>
<button  onClick={()=>
  {

    router.push('/products?title='+prod.id)
    
  }
}>same page navigation</button> */}



   {/* <Link href={'/products/'+prod.id}>

     <div onClick={selectProd}>Productcard {prod.title}
    
    </div>
   </Link> */}
     <div className="card" style={{ alignContent:'center',width: '11.6rem',height:'500px',padding:'20px',marginLeft:'30px'}}>
        
        <img src={prod.image}height={'150'} width={'100'}className="card-img-top" alt="..."></img>
        {/* <div>
          {
        brands.map((b)=><h3>{b}</h3>)
      }
   
        </div> */}
         <div className="card-body" >
        <h5 className="card-title" >
         <Link href={'/products/'+prod.id} style={{textDecoration:'none'}} >

     <div onClick={selectProd}>Productcard {prod.title}
    
    </div>
   </Link></h5>
        <div className="card-text">{prod.catagory}</div>

        

        <div className="card-text"  style={{marginTop:'10px',fontWeight:'bold',marginBottom:'10px'}}>Rs.{prod.price}</div>
         <div  style={{display: 'flex', color:' rgb(243, 126, 17)'} }  >  
    
    
<span className="fa fa-star checked" ></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star "></span>
<span className="fa fa-star "></span>
          
        
      </div>
      <div className="card-text" style={{marginTop:'10px',marginBottom:'10px'}}>{prod.rating.rate}/{prod.rating.count}</div>
           {/* <a href="#" class="btn btn-warning">Add to Cart</a> */}
            
        </div>
        </div>
   </div>
  )
}
