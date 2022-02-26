import React from "react";
import "./HowItWorksstyles.css";

const HowItWorksComponent = () => {
  return (
    <div className="container-fluid">
      <div className="works-area">
        <h2 className="heading2">HOW IT WORKS</h2>
        <ul className="works-ul">
          <li>
            <div className="works-image">
              <span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCULAzUFWZC5oyDnDhfi7Of7OrnCem4CsY8Q&usqp=CAU"
                  className="works-img"
                  alt="cars"
                ></img>
              </span>
            </div>
            <div className="li-text">
              <h3>Book a Car of Your Choice</h3>
              <p>
                Take your pick with parameters such as price, brand and type.
                Select a car you like by paying a refundable booking fee.
              </p>
            </div>
          </li>
          <li>
            <div className="works-image">
              <span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmjnxlv58vyC3IZJFx738QFfpIXi9i2vFY-BoFN2YttZEpt6-oGsaYVpnNpq1HPVTRbc8&usqp=CAU"
                  className="works-img"
                  alt="cars"
                ></img>
              </span>
            </div>
            <div className="li-text">
              <h3>Test-drive @ home or hub</h3>
              <p>
                We’ll get your selection right to your home, or you can choose
                to pick it up from our hubs. And if you’re not happy with it,
                we’ll refund the booking amount.
              </p>
            </div>
          </li>
          <li>
            <div className="works-image">
              <span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgOJCKyCsoUirGtT7jWFkFFU0P5UWekjBtbg&usqp=CAU"
                  className="works-img"
                  alt="cars"
                ></img>
              </span>
            </div>
            <div className="li-text">
              <h3>Like it? Buy it!</h3>
              <p>
                Complete the payment while we take care of documentation &
                transfer for you. If you’re not satisfied, you can return it for
                a refund in 7 days.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HowItWorksComponent;
