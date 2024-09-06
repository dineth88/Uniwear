import { useRef, useEffect } from 'react';
import './Discover.css';
import '../../index.css';
import Img1 from '../../assets/94ede2c9-1157-40cc-9865-5cc7bde23176.jpg';
import Img2 from '../../assets/images.png';
import Img3 from '../../assets/cropped-2560x1440-white-solid-color-background.png';
import Img4 from '../../assets/lcy-triangle-letter-logo-design-with-triangle-shape-lcy-triangle-logo-design-monogram-lcy-triangle-logo-template-with-red-color-lcy-triangular-logo-simple-el.jpg';
import Img5 from '../../assets/images (1).png';
import Img6 from '../../assets/images (2).png';
import Img7 from '../../assets/457701025_938359281661701_1546429585640124063_n.jpg';
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";



export default function Discover(){

    const handleImageLoad = (e) => {
        e.target.style.transform = "rotate(-25deg) translate(-15%, -15%)";
      };

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    }
    
    

    return(
        <>
            <div className="slider-container">
                    <h1 text align="center">Our Best Brands</h1>
                <Slider {...settings}>
                    <div>
                        <img src = {Img1} width={"30%"}/>
                    </div>
                    <div>
                        <img src = {Img2} width={"30%"}/>
                    </div>
                    <div>
                        <img src = {Img3} width={"30%"}/>
                    </div>
                    <div>
                        <img src = {Img4} width={"30%"}/>
                    </div>
                    <div>
                        <img src = {Img5} width={"30%"}/>
                    </div>
                    <div>
                        <img src = {Img6} width={"30%"}/>
                    </div>
                </Slider>
            </div>
            <div class="product-cat">
                <div class="rhombus left-rhombus">
                    <img
                        src={Img7}
                        alt="Brand"
                        onLoad={handleImageLoad}
                    />
                    <div className="rhombus-image-cover"></div>
                </div>
                <div class="rhombus center-rhombus">
                    <img
                        src={Img6}
                        alt="Brand"
                        onLoad={handleImageLoad}
                     />
                </div>
                <div class="rhombus right-rhombus">
                    <img
                        src={Img6}
                        alt="Brand"
                        onLoad={handleImageLoad}
                    />
                </div>
                <div className="button-container">
                <button>Sport</button>
                <button>Sport</button>
                <button>Sport</button>
            </div>
            </div>
        </>
    );
}