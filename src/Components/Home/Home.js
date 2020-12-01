import React from "react";
import Product from "../Product/Product";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel>
          <Carousel.Item>
            <img
              className="home__image d-block w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt="Prime Video"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="home__image d-block w-100"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
              alt=""
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="home__image d-block w-100"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
              alt=""
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="home__image d-block w-100"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg"
              alt=""
            />
          </Carousel.Item>

        </Carousel>

        <div className="home__row">
          <Product
            id="01"
            title="PlayStation 4 Pro 1TB Limited Edition The Last of Us Part 2 Console Bundle - Black
                by SONY Playstation 4 Pro"
            price={562.99}
            image="https://m.media-amazon.com/images/I/51RMPpeTXyL._AC_UY218_.jpg"
            rating={4}
          />

          <Product
            id="02"
            title="RESPAWN 900 Racing Style Gaming Recliner, Reclining Gaming Chair, in Blue RSP 900 BLU"
            price={296.96}
            image="https://m.media-amazon.com/images/I/71fgGg2MakL._AC_UL320_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="03"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="04"
            title="Stand Mixer 550W Double Hooks 8 Speeds Electric Kitchen Mixer 5.5QT Stainless Steel Bowl,Wire Whip,Flat Beater,Pouring Shield,Automatic Tilt-Head(Coke Red)"
            price={139.99}
            image="https://m.media-amazon.com/images/I/71vEKuSvnGL._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="05"
            title="New Apple MacBook Pro (13-inch, 16GB RAM, 1TB SSD Storage, Magic Keyboard) - Silver"
            price={(1, 899.99)}
            image="https://m.media-amazon.com/images/I/71ppucPX3wL._AC_UY218_.jpg"
            rating={5}
          />

          <Product
            id="06"
            title="HP Pavilion X360 2-IN-1 11.6 HD Touch-Screen WLED-backlit Laptop, Intel Pentium N5000 up to 2.7GHz, 4GB DDR4, 128GB SSD, Bluetooth"
            price={599.99}
            image="https://m.media-amazon.com/images/I/61bf4QPQ0hL._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="07"
            title="New Apple Watch SE (GPS, 44mm) - Space Gray Aluminum Case"
            price={289.0}
            image="https://m.media-amazon.com/images/I/71nw+MRGq3L._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="08"
            title="Samsung Galaxy S20 5G Factory Unlocked New Android Cell Phone US Version, 128GB of Storage, Fingerprint ID and Facial Recognition, Long-Lasting Battery, Cosmic Gray"
            price={715.0}
            image="https://m.media-amazon.com/images/I/61nSb8Jn7oL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="09"
            title="Apple iPhone 11 Pro, 64GB, Midnight Green - Fully Unlocked (Renewed)"
            price={779.99}
            image="https://m.media-amazon.com/images/I/61vflt1U5gL._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="10"
            title="SAMSUNG 55-inch Class QLED Q70T Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in (QN55Q70TAFXZA, 2020 Model)"
            price={775.99}
            image="https://m.media-amazon.com/images/I/51d1lfcMIaL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
