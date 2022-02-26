import React from "react";
import "./Carouselstyles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = () => {
  return (
    <div className="carousel-part">
      <h2 className="carousel-h2">OUR TOP SERVICES</h2>
      <div className="Carousel-area">
        <Carousel fade>
          <Carousel.Item interval={300}>
            <img
              className="d-block w-100"
              src="https://www.medianews4u.com/wp-content/uploads/2020/10/CARS24-launches-new-ad-campaign-%E2%80%98Duniya-Boli-Lagayegi.jpg"
              alt=" One"
            />
            <Carousel.Caption>
              <h3>Let Us Finance Your Dream Car</h3>
              <p>Zero Down Payment</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={300}>
            <img
              className="d-block w-100"
              src="https://cdn.dealstreetasia.com/uploads/2021/09/CARS24-Delivery-Truck-1-e1632116038616.jpg?fit=979,543"
              alt=" Two"
            />
            <Carousel.Caption>
              <h3>A Whole World of Cars</h3>
              <p>Find Your Perfect Ride</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={300}>
            <img
              className="d-block w-100"
              src="https://failurebeforesuccess.com/wp-content/uploads/2022/02/CARS11622486_oOH_800x400CARS24_1080wide-800x395-1.png"
              alt=" Two"
            />
            <Carousel.Caption>
              <h3>Book a Test Drive</h3>
              <p>We Deliver To Your Doorstep</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
