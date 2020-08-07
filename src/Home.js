import React from 'react';
import Product from "./Product";
import "./Home.css";


function Home() {
    return (
        <div className="home">
            <img
            className="home__image"
            src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="banner image"
            />

            {/* Product id, title, price, image */}
            <div className="home__row">
            <Product 
            id="123456"
            title ="Sony Home Theater Projector VPL-VW295ES: Full 4K HDR Video Projector for TV, Movies and Gaming - Home Cinema Projector"
            price={4998}
            image="https://m.media-amazon.com/images/I/71OHNxC8eQL._AC_SX960_SY720_.jpg"
            rating={5}
            />

            <Product 
            id="123489"
            title ="Sony X800H 75 Inch TV: 4K Ultra HD Smart LED TV with HDR and Alexa Compatibility - 2020 Model, XBR75X800H"
            price={10.78}
            image="https://m.media-amazon.com/images/I/71+F+eS7qfL._AC_SX480_SY360_.jpg"
            rating={5}
            />
            </div>

            <div className="home__row">
            <Product 
            id="3452346"
            title ="Trader Joe's Belgian Dark Chocolate Bars 3 Variety Pack - Total 9 Bars"
            price={35}
            image="https://m.media-amazon.com/images/I/71-H14ZAgTL._AC_UL320_.jpg"
            rating={5}
            />
            
             <Product 
            id="1425256"
            title ="The great gatsby"
            price={10.78}
            image="https://upload.wikimedia.org/wikipedia/en/c/c2/TheGreatGatsby2013Poster.jpg"
            rating={5}
            />
             <Product 
            id="1253656"
            title ="Jumanji: The Next Level [Blu-ray]"
            price={12}
            image="https://images-na.ssl-images-amazon.com/images/I/91wJIb-WwtL._SX342_.jpg"
            rating={5}
            />
            </div>

            <div className="home__row">
            <Product 
            id="1234564"
            title ="Sony X950H 85 Inch TV: 4K Ultra HD Smart LED TV with HDR and Alexa Compatibility - 2020 Model, XBR85X950H with Home Theater Surround Sound Speaker System"
            price={2978}
            image="https://images-na.ssl-images-amazon.com/images/I/612KFH-Zo4L._AC_SL1001_.jpg"
            rating={5}
            />
            </div>
        </div>
    )
}

export default Home
