import Link from 'next/link'
import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <div ><nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" style={{backgroundColor:' rgba(7, 128, 121, 0.77)',height:'70px',color:'white'}}>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

     <a className="navbar-brand" href="#">
      <Image src='/images/logo4.jpg' alt="Logo" width={150} height={60} className="d-inline-block align-text-top"/>
      
    </a>


    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href={"/"}>Home</Link>
        </li>
        
         <li className="nav-item">
            <Link href={"/products"} className="nav-link">
          products</Link>
        </li>
         <li className="nav-item">
            <Link href={"/about-us"} className="nav-link">
          About Us</Link>
        </li>
         <li className="nav-item">
            <Link href={"/contact-us"} className="nav-link">
          Contact Us</Link>
        </li>
       
      </ul>
        <Link href={"/carts"} className="nav-link" style={{color:'black',marginRight:'80px'}}><i className="fa-solid fa-cart-shopping"></i>
          Cart</Link>
    </div>
  </div>
</nav></div>
  )
}
