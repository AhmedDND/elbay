import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://cdn.discordapp.com/attachments/912399918214303775/912991774509760522/Cover.png"
          alt=""
        />

        <div className="home__row">
          <Product
            id="5464564"
            title="Apple iPhone 12 Pro Max, 128GB, Pacific Blue - Unlocked (Renewed Premium)"
            price={1064.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SX569_.jpg"
          />
          <Product
            id="2131231"
            title="SAMSUNG Galaxy Z Flip 3 5G Factory Unlocked Android Cell Phone US Version"
            price={849.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/716P9qOKcUL._AC_SX569_.jpg"
          />
          <Product
            id="111111"
            title="Original Oppo Find X2 Pro 5G CPH2025 512GB 12GB RAM Factory Unlocked"
            price={699.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51csjp5dlAL._AC_SY355_.jpg"
          />
          <Product
            id="2178"
            title="Xiaomi Redmi Note 10 Pro | 128GB 6GB RAM"
            price={339.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/5114EtDzdkS._AC_SX569_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="Skullcandy Hesh 2 Wireless Over-Ear Headphone - Black"
            price={57.54}
            rating={5}
            image="https://m.media-amazon.com/images/I/71KEOerw6VL._AC_SX425_.jpg"
          />
          <Product
            id="49538094"
            title="Sony Noise Cancelling Headphones WHCH710N: Wireless Bluetooth Over the Ear Headset with Mic for Phone-Call, Black"
            price={78.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/51sCVB0IZDL._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="JBL CLIP 3 - Waterproof Portable Bluetooth Speaker - Black"
            price={44.0}
            rating={3}
            image="https://m.media-amazon.com/images/I/71HwlJxtdZS._AC_SY355_.jpg"
          />
          <Product
            id="23445930"
            title="Bose SoundLink Color II: Portable Bluetooth, Wireless Speaker with Microphone- Soft Black"
            price={129.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Xg3PvaiQL._AC_UL320_.jpg"
          />
          <Product
            id="3254354345"
            title="JBL Charge 3 Waterproof Portable Bluetooth Speaker (Black), 1"
            price={129.95}
            rating={4}
            image="https://m.media-amazon.com/images/I/61TSAn9KKxL._AC_UL320_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Ring Light with 51'' Extendable Tripod Stand, 8 Dimmable LED Selfie Circle Lights with Phone Holder for Live Stream/Makeup/YouTube Video/TikTok/Photography, Compatible with iOS and Android Phones"
            price={24.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71FVBjjVQ7L._AC_SX466_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
