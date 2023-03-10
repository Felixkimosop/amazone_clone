import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt="land"
        />

        <div className="home__row">
          <Product
            title={"You can now view amazon-clone in the browser"}
            image={
              "https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_UL320_.jpg"
            }
            price={19.99}
            rating={5}
          />
          <Product
            title={
              "Razer Nari Ultimate Wireless 7.1 Surround Sound Gaming Headset: THX Audio & Haptic Feedback - Auto-Adjust Headband - Chroma RGB - Retractable Mic - For PC, PS4, PS5 - Black"
            }
            image={
              "https://m.media-amazon.com/images/I/81f6DNi4TFL._AC_UY218_.jpg"
            }
            price={110}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product  title={
              "Razer Nari Ultimate Wireless 7.1 Surround Sound Gaming Headset: THX Audio & Haptic Feedback - Auto-Adjust Headband - Chroma RGB - Retractable Mic - For PC, PS4, PS5 - Black"
            }
            image={
              "https://m.media-amazon.com/images/I/61wrOi+03FL._AC_UY218_.jpg"
            }
            price={110}
            rating={4} />
          <Product title={
              "Razer Nari Ultimate Wireless 7.1 Surround Sound Gaming Headset: THX Audio & Haptic Feedback - Auto-Adjust Headband - Chroma RGB - Retractable Mic - For PC, PS4, PS5 - Black"
            }
            image={
              "https://m.media-amazon.com/images/I/61wrOi+03FL._AC_UY218_.jpg"
            }
            price={110}
            rating={4}  />
          <Product
          title={
            "Razer Nari Ultimate Wireless 7.1 Surround Sound Gaming Headset: THX Audio & Haptic Feedback - Auto-Adjust Headband - Chroma RGB - Retractable Mic - For PC, PS4, PS5 - Black"
          }
          image={
            "https://m.media-amazon.com/images/I/61wrOi+03FL._AC_UY218_.jpg"
          }
          price={110}
          rating={4}  />
        </div>
        <div className="home__row">
          <Product 
          title={
            "Razer Nari Ultimate Wireless 7.1 Surround Sound Gaming Headset: THX Audio & Haptic Feedback - Auto-Adjust Headband - Chroma RGB - Retractable Mic - For PC, PS4, PS5 - Black"
          }
          image={
            "https://m.media-amazon.com/images/I/61wrOi+03FL._AC_UY218_.jpg"
          }
          price={110}
          rating={4}  />
        </div>
      </div>
    </div>
  );
}

export default Home;
