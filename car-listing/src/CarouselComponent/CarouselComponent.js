import React from "react";
import "./Carouselstyles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = () => {
  return (
    <div className="Carousel-area">
      <Carousel showArrows autoPlay showThumbs={false}>
        <div>
          <img
            src="https://failurebeforesuccess.com/wp-content/uploads/2022/02/CARS11622486_oOH_800x400CARS24_1080wide-800x395-1.png"
            alt="Carousel 1"
          />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img
            src="https://www.medianews4u.com/wp-content/uploads/2020/10/CARS24-launches-new-ad-campaign-%E2%80%98Duniya-Boli-Lagayegi.jpg"
            alt="Carousel 2"
          />
          {/* <p className=" second-carousal" >Legend 2</p> */}
        </div>
        <div>
          <img
            src="https://cdn.dealstreetasia.com/uploads/2021/09/CARS24-Delivery-Truck-1-e1632116038616.jpg?fit=979,543"
            alt="Carousel 3"
          />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
