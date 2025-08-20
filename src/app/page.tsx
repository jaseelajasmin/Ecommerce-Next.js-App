import Image from "next/image";
import OfferList from "./components/OfferList";

export default function Home() {
  return (
    <div>
       <div style={{height:'1200px',backgroundColor:'rgba(240, 195, 226, 0.87)',marginTop:'-10px'}}>
<div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src="/images/ban8.jpg" className="d-block w-100" alt="..." width={500}height={500} />
    </div>
    <div className="carousel-item">
      <Image src='/images/ban6.jpg' className="d-block w-100" alt="..." width={500}height={500}/>
    </div>
    <div className="carousel-item">
      <Image src='/images/ban11.jpg' className="d-block w-100" alt="..."width={500}height={500}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div>
  <OfferList/>
</div>
    </div>
    </div>
  
  );
}
