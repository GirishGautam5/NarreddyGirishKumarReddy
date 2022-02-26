import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import FooterComponent from "./FooterComponent/FooterComponent";
import PopularCityComponent from "./PopularCitiesComponent/PopularCityComponent";
import SellingCarComponent from "./SellingCarComponent/SellingCarComponent";
import HowItWorksComponent from "./HowItWorksComponent/HowItWorksComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="side-bar">
            <button>&#9776;</button>
          </div>
          <div className="app-logo">
            <Link to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/CARS24_Official_New_Logo.png"
                alt="CARS25"
              />
            </Link>
          </div>
          <div className="navigation-links">
            <Link to="/">
              Go to Cart
              <i
                className="fa fa-shopping-cart fa-2x mx-2 btn "
                style={{ color: "white" }}
              ></i>
            </Link>
            <Link to="/">
              Sign In
              <i
                className="fa fa-user p-3 fa-6x mx-2 btn "
                style={{ color: "white" }}
              ></i>
            </Link>
          </div>
        </header>
        <main className="main">
          <div className="content">
            <HowItWorksComponent />
            <SellingCarComponent />
            <PopularCityComponent />
          </div>
        </main>
        <footer className="footer-area">
          <FooterComponent />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
