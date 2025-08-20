import React from 'react';
import { ProductService } from '@/services/products-service';
import ProductCard from './Productlist/ProductCard';

export default  async function ProductList() {
    var products= await ProductService.getProducts();
  return (
    <div> 
     <div className="container"
      style={{
        //backgroundColor: props.bgcolor,
        display: "flex",
        gap:'10px',
        margin: "10px",
        padding: "10px",
        width: "100%",
        height: "40%",
        flex: "1",
        flexWrap: "wrap",
        boxShadow:"5px"
      }}
    >
      {products.map((p:any) => {
            return <ProductCard key={p.id} product={p} />;
          })} </div></div>
  )
}
