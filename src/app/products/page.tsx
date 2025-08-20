

import React, { Suspense } from 'react'
import ProductCard from '../components/Productlist/ProductCard';
import productsearch from './search/page';
import { ProductService } from '@/services/products-service';

import ProductList from '../components/ProductList';
import { cookies } from 'next/headers';
import { headers } from 'next/headers';



 

export default  async function products() {
  console.log("products page executed");
  const cookieList=cookies();
  const tokenCookie=(await cookieList).get('authToken');
  console.log("token-cookie",tokenCookie,tokenCookie?.value);//we can read cookies from front end

const headersList=headers();
const referer=(await headersList).get('referer');
console.log(referer);
console.log((await headersList).get('User-Agent'));
console.log((await headersList).get('Host'));


// const data=await fetch ('https://fakestoreapi.com/products');
// const products=await data.json();
//console.log(products);
  //var products= await ProductService.getProducts();
  //Suspense is used for the Loading

  return (
    
    
    <div>
    
    {/* {products.map((p:any) => {
        return <ProductCard key={p.id} product={p} />;
      })}  */}
    <Suspense fallback={<span>Loading</span>}>
     <ProductList/>
  </Suspense>
  </div>
    
    
  
  );
}
