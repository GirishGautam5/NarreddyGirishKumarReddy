import React from "react";
import "./Sellingstyles.css";
const SellingCarComponent = () => {
  return (
    <div className="selling-area">
      <div className="container-fluid">
        <div className="selling-text">
          <h2>Selling a Car? We're buying</h2>
          <p>
            Book an appointment for free car inspection and sell it instantly on
            the same day
          </p>
          <button className="btn sell-button">SELL MY CAR</button>
        </div>
        <span>
          <img
            className="car-img"
            src="https://p.kindpng.com/picc/s/202-2027910_transparent-car-plan-view-png-honda-crz-side.png"
            alt="Car"
          ></img>
        </span>
      </div>
    </div>
  );
};

export default SellingCarComponent;
