import React from "react";
import "./Carouselstyles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = () => {
  return (
      <div className="Carousel-area">
    <Carousel showArrows autoPlay showThumbs={false}>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3duq9lRneBtz_bAW9gISMun3qpWPf2VtH1g&usqp=CAU" alt="Carousel 1" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT94k0iZv-7BvS5K6IsjjXrAr2lC5dy92XbKg&usqp=CAU" alt="Carousel 2" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT94k0iZv-7BvS5K6IsjjXrAr2lC5dy92XbKg&usqp=CAU" alt="Carousel 3" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
    </div>
  );
};

export default CarouselComponent;
