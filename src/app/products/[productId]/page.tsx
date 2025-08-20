

import React from 'react';
import { ProductService } from '@/services/products-service';

import { Metadata } from 'next';
import { title } from 'process';
import AddToCart from '@/app/components/AddToCart';



export  async function generateMetadata(props:any) {
  console.log("generate meta data",props);
  const productId=  props.params.productId;
    var Product;
    if(productId){
    Product  =await ProductService.getProductById(productId);
      return{
          title : Product.title

    }


    }
   
  return {
  
title:"prod detail page"

  }
  
}

export default async function ProductDetails(props:any) {
    console.log(props);
    const productId= await props.params.productId;
    var Product;
    if(productId){
    Product  =await ProductService.getProductById(productId);}
  return (
    <div><h3>
      
     <div className='container' style={{width:'100%',height:'1000px',alignItems:'center',marginTop:'50px',marginLeft:'150px',fontSize:'15px'}}>
        <div>
     <img src={Product.image} style={{height:'250px' ,width:'100px',marginBottom:'20px'}} alt="..."/></div>
    <h3>{[Product.title]}</h3>
     <div className="card-text"style={{marginTop:'20px',marginBottom:'20px'}}>{Product.catagory}</div>
       <div className="card-text">{Product.description} </div>
        <div className="card-text"  style={{marginTop:'20px',fontWeight:'bold',marginBottom:'30px'}}>Rs.{Product.price}</div>
        
    <AddToCart prod={Product}/>
      
     </div> </h3></div>
  )
}
