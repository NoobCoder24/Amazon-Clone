import React from "react";
import "./Home.css";
import Product from "./Product";
import Slider from './Slider';


function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <Slider/>
        <div className="home_row">
          <Product
            id="12321341"
            title="The Lean Startup : How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51yT-dDfV7L._SX329_BO1,204,203,200_.jpg"
            rating={2}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer For Baking,Styling Kitchen Mixer with K-beater,Dough Hook and Wisk,5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61fuqOCyW6L._AC_UY218_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Moniter"
            price={199.0}
            rating={3}
            image="https://m.media-amazon.com/images/I/91pi34PiUPL._AC_UY218_.jpg"
          />
          <Product
            id="234445930"
            title="Amaxon Echo (3rd generation ) | Smart speaker with Alexa,Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch,Wi-Fi, 128GB)-Silver (4th generation)"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61bLMtJcUWL._AC_UY218_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Moniter-Super Ultra wide Dual WQHD 5120 x 1440"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81vlA84pg6L._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
