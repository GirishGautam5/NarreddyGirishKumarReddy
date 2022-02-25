import React from "react";
import "./Footerstyles.css";
import { SocialMediaIconsReact } from "social-media-icons-react";
import MobileStoreButton from "react-mobile-store-button";

const FooterComponent = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col col-md-3 col-sm-3 col-xl-3">
          <h3 className="heading">Keep in Touch</h3>
          <ul className="social-ul">
            <li className="social-li">
              <SocialMediaIconsReact
                icon="twitter"
                iconColor="white"
                borderColor="none"
                borderWidth="0"
                roundness="5px"
                url="https://some-website.com/my-social-media-url"
                size="30px"
                iconSize="30"
              />
            </li>
            <li className="social-li">
              <SocialMediaIconsReact
                icon="linkedin"
                iconColor="white"
                borderColor="none"
                borderWidth="0"
                roundness="5px"
                url="https://some-website.com/my-social-media-url"
                size="30px"
                iconSize="30"
              />
            </li>
            <li className="social-li">
              <SocialMediaIconsReact
                icon="facebook"
                iconColor="white"
                borderColor="none"
                borderWidth="0"
                roundness="5px"
                url="https://some-website.com/my-social-media-url"
                size="30px"
                iconSize="5"
              />
            </li>
            <li className="social-li">
              <SocialMediaIconsReact
                borderStyle="solid"
                icon="youtube-play"
                iconColor="white"
                borderColor="none"
                borderWidth="0"
                roundness="5px"
                url="https://some-website.com/my-social-media-url"
                size="30px"
                iconSize="30"
              />
            </li>
            <li className="social-li">
              <SocialMediaIconsReact
                borderStyle="solid"
                icon="instagram"
                iconColor="white"
                borderColor="none"
                borderWidth="0"
                roundness="5px"
                url="https://some-website.com/my-social-media-url"
                size="30px"
                iconSize="30"
              />
            </li>
          </ul>
          <p className="paragraph">
            Experience CARS24 App on Mobile
            <span>Powered by CARS24</span>
          </p>
          <div className="row">
            <a href="images" className="col-6">
              <span className="span-store">
                <MobileStoreButton
                  className="image-fluid"
                  store="android"
                  url="https://play.google.com"
                  linkProps={{ title: "Android Store Button" }}
                />
              </span>
            </a>
            <a href="images" className="col-6">
              <span className="span-store">
                <MobileStoreButton
                  className="image-fluid ios-store"
                  width="100%"
                  height="100%"
                  store="ios"
                  url="https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8"
                  linkProps={{ title: "iOS Store Button" }}
                />
              </span>
            </a>
          </div>
        </div>
        <div className="col col-md-3 col-sm-3 col-xl-3">
          <h3 className="heading">Useful Links</h3>
          <ul className="mb-2">
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">Contact Us</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">About Us</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">Privacy Policy</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">
                Terms and Conditions
              </a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">FAQ</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">Site Map</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">Blog</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">Branches</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">CARS24 Finance</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">Investors</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">Partners</a>
            </li>
          </ul>
        </div>
        <div className="col col-md-3 col-sm-3 col-xl-3">
          <h3 className="heading">Top Brands</h3>
          <ul className="mb-2">
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">Maruthi Suzuki</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">Honda</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">Tata</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">Toyota</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">Ford</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">Mahindra</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">Skoda</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">Flat</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">Nissan</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">Renault</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">AUDI</a>
            </li>
          </ul>
        </div>
        <div className="col col-md-3 col-sm-3 col-xl-3">
          <h3 className="heading">Top Cities</h3>
          <ul className="mb-2">
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">New Delhi</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">Hyderabad</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">Bangalore</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">Mumbai</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">Chennai</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">Pune</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">Kochi</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">Kolkata</a>
            </li>
            <li className="list">
              <a href="https://www.cars24.com/buy-used-cars/">Noida</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
