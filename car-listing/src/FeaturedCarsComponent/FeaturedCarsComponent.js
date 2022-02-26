import React from "react";
import "./FeaturedCarsstyles.css";

const FeaturedCarsComponent = () => {
  return (
    <div className="container-fluid">
      <div className="feature-area">
        <h2 className="heading2">Featured Cars</h2>
        <ul className="featured-ul">
          <li>
            <a
              href="https://www.cars24.com/buy-used-cars/"
              className="feature-a"
            >
              <div className="feature-image">
                <span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqYGnP1hHTuhrarLRM2qKfpnbFhEVNjf8T3g&usqp=CAU"
                    className="feature-img"
                    alt="cars"
                  ></img>
                </span>
              </div>
              <div className="feature-text">
                <div className="title-area">
                  <div className="title-part">
                    <h2 className="feature-h2">Maruthi Swift</h2>
                    <p className="feature-p">
                      VDI
                      <span> Manual</span>
                    </p>
                  </div>
                </div>
                <ul className="km-ul">
                  <li className="km-li">1st Owner</li>
                  <li className="km-li">38,061 km</li>
                  <li className="km-li">Diesel</li>
                </ul>
                <div className="price">
                  <div>
                    <strong className="strong-price">
                      &#x20b9;6,500/month
                    </strong>
                  </div>
                  <div className="total-price">
                    <span className="span-price">&#x20b9;2,50,785</span>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://www.cars24.com/buy-used-cars/"
              className="feature-a"
            >
              <div className="feature-image">
                <span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3rB_xFwF93eiBzFoD54H4_1p-Pb0Y2Xv8GA&usqp=CAU"
                    className="feature-img"
                    alt="cars"
                  ></img>
                </span>
              </div>
              <div className="feature-text">
                <div className="title-area">
                  <div className="title-part">
                    <h2 className="feature-h2">Honda Civic</h2>
                    <p className="feature-p">
                      VDI
                      <span> Manual</span>
                    </p>
                  </div>
                </div>
                <ul className="km-ul">
                  <li className="km-li">1st Owner</li>
                  <li className="km-li">29,048 km</li>
                  <li className="km-li">Petrol</li>
                </ul>
                <div className="price">
                  <div>
                    <strong className="strong-price">
                      &#x20b9;8,788/month
                    </strong>
                  </div>
                  <div className="total-price">
                    <span className="span-price">&#x20b9;3,56,425</span>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://www.cars24.com/buy-used-cars/"
              className="feature-a"
            >
              <div className="feature-image">
                <span>
                  <img
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT94k0iZv-7BvS5K6IsjjXrAr2lC5dy92XbKg&usqp=CAU"
                    className="feature-img"
                    alt="cars"
                  ></img>
                </span>
              </div>
              <div className="feature-text">
                <div className="title-area">
                  <div className="title-part">
                    <h2 className="feature-h2">Hyundai i20</h2>
                    <p className="feature-p">
                      VDI
                      <span> Manual</span>
                    </p>
                  </div>
                </div>
                <ul className="km-ul">
                  <li className="km-li">1st Owner</li>
                  <li className="km-li">45,041 km</li>
                  <li className="km-li">Diesel</li>
                </ul>
                <div className="price">
                  <div>
                    <strong className="strong-price">
                      &#x20b9;7,459/month
                    </strong>
                  </div>
                  <div className="total-price">
                    <span className="span-price">&#x20b9;4,58,246</span>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeaturedCarsComponent;
