import React from "react";
import OfferCard from "./OfferCard"


const OfferList = () => {
  var prodcts = 
  [
    {
      id: 1,
      title: "50% off for cothing. Buy 1 get 2",
      
        
      image1: "https://images.pexels.com/photos/6347892/pexels-photo-6347892.jpeg",
      
       image2:
        "https://images.pexels.com/photos/6616649/pexels-photo-6616649.jpeg",
        
        image3: "https://images.pexels.com/photos/8311884/pexels-photo-8311884.jpeg",
        
        image4: "https://images.pexels.com/photos/8274720/pexels-photo-8274720.jpeg",
        
      
    },
   
    {
      id: 2,
      title:
        "75% off on Womens jwellery,come and collect now",
     
      image1: "https://tse1.mm.bing.net/th/id/OIP._LJCxM7DHjYlwcdhConzDgHaE8?w=1200&h=800&rs=1&pid=ImgDetMain&o=7&rm=3",
      image2: "https://i.etsystatic.com/15494388/r/il/ef830b/1859861239/il_fullxfull.1859861239_6i2g.jpg",
      image3: "https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg",
      image4: "https://i.etsystatic.com/15494388/r/il/ef830b/1859861239/il_fullxfull.1859861239_6i2g.jpg"
     
    },
    
    {
      id: 3,
      title: "Your favorite choice on Electronics,Buy 1 and get 2 ",
      
      image1: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg",
      image2: "https://www.tpstech.in/cdn/shop/products/Acer_ET221Q_21.5_Inch_Monitor_From_The_Peripheral_Store_04_800x.jpg?v=1614343504",
      image3: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg",
      image4: "https://www.tpstech.in/cdn/shop/products/Acer_ET221Q_21.5_Inch_Monitor_From_The_Peripheral_Store_04_800x.jpg?v=1614343504",
    },
    
    {
      id: 4,
      title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
     
      image1: "https://www.lifewire.com/thmb/ZSq0cJSYUscFYaSBtWJ4jHai06E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Acer_SB220Q_Monitor_01LW4061369_6_Final_Horiz-cda109c444464d4384aee081cff3443b.jpg",
      image2: "https://tse1.mm.bing.net/th/id/OIP.W1PYH-EJxJDzdNtx9fxvgQHaHa?pid=ImgDet&w=474&h=474&rs=1&o=7&rm=3",
       image3: "https://tse1.mm.bing.net/th/id/OIP.W1PYH-EJxJDzdNtx9fxvgQHaHa?pid=ImgDet&w=474&h=474&rs=1&o=7&rm=3",
       image4: "https://www.tpstech.in/cdn/shop/products/Acer_ET221Q_21.5_Inch_Monitor_From_The_Peripheral_Store_04_800x.jpg?v=1614343504"

  
    },
   
    {
      id:5,
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      
      image1: "https://www.therange.co.uk/_m5/9/4/1643975761_12_3670.jpg",
      image2: "https://tse1.mm.bing.net/th/id/OIP.CGisT0Dq1P5G0DsH60G_lQHaHa?w=900&h=900&rs=1&pid=ImgDetMain&o=7&rm=3",
      image3: "https://tse1.mm.bing.net/th/id/OIP.BzEFUYJ858mIFX05XW0b0gHaKY?rs=1&pid=ImgDetMain&o=7&rm=3",
      image4: "https://media.fundis.net/media/image/19/34/be/HV_Polo_Jacke_Damen_HVPChampion_FS22_Regenjacke_dark-berry_2_600x600.jpg"


     
    },
    {
      id: 6,
      title:
        "Men's shoes with 50% offer",
     
      image1: "https://www.trendsettingfashions.com/cdn/shop/products/product-image_a14bd8fa-1ed0-4355-bfbc-882d24e72b00_630x.jpg?v=1593687399",
      image2: "https://zorket.com/cdn/shop/products/product-image-116609139_720x720.jpg?v=1593654372",
      image3: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/27440862/2024/2/27/ed73a6a9-8de0-4e82-988d-bfed0b2fffb91709030488884-The-Roadster-Lifestyle-Co-Men-Blue-Lace-Ups-Sneakers-5731709-1.jpg",
      image4: "https://www.trendsettingfashions.com/cdn/shop/products/product-image_16c5c19c-e9ab-47d7-b561-894f316c941b_630x.jpg?v=1593687399"
     
    }, {
      id:7,
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      
      image1: "https://www.therange.co.uk/_m5/9/4/1643975761_12_3670.jpg",
      image2: "https://tse1.mm.bing.net/th/id/OIP.CGisT0Dq1P5G0DsH60G_lQHaHa?w=900&h=900&rs=1&pid=ImgDetMain&o=7&rm=3",
      image3: "https://tse1.mm.bing.net/th/id/OIP.BzEFUYJ858mIFX05XW0b0gHaKY?rs=1&pid=ImgDetMain&o=7&rm=3",
      image4: "https://media.fundis.net/media/image/19/34/be/HV_Polo_Jacke_Damen_HVPChampion_FS22_Regenjacke_dark-berry_2_600x600.jpg"


     
    },
    {
      id: 8,
      title: "50% off for cothing. Buy 1 get 2",
      
        
       
      image1: "https://images.pexels.com/photos/6347892/pexels-photo-6347892.jpeg",
      
       image2:
        "https://images.pexels.com/photos/6616649/pexels-photo-6616649.jpeg",
        
        image3: "https://images.pexels.com/photos/8311884/pexels-photo-8311884.jpeg",
        
        image4: "https://images.pexels.com/photos/8274720/pexels-photo-8274720.jpeg",
        
      
    }
    
  ];
  return (
    <div className="container"
      style={{
        
        display: "flex",
        justifyContent:'space-evenly',
        gap:'5px',
        margin: "5px",
        padding: "10px",
        width: "100%",
        height: "40%",
        
        flexWrap: "wrap",
        boxShadow:"10px",
        marginLeft:'20px',
      }}
    >
      
      
      {prodcts.map((product) => (
         <OfferCard key={product.id} product=
        {product}/>
      ))}
    
      
    </div>
  );
};

export default OfferList;