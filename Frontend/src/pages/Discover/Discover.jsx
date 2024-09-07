import { useRef, useEffect, useState} from 'react';
import './Discover.css';
import '../../index.css';
import Img1 from '../../assets/94ede2c9-1157-40cc-9865-5cc7bde23176.jpg';
import Img2 from '../../assets/images.png';
import Img3 from '../../assets/cropped-2560x1440-white-solid-color-background.png';
import Img4 from '../../assets/lcy-triangle-letter-logo-design-with-triangle-shape-lcy-triangle-logo-design-monogram-lcy-triangle-logo-template-with-red-color-lcy-triangular-logo-simple-el.jpg';
import Img5 from '../../assets/images (1).png';
import Img6 from '../../assets/images (2).png';
import Img7 from '../../assets/457701025_938359281661701_1546429585640124063_n.jpg';
import Img8 from '../../assets/457562456_1108589173960317_3777200935784246294_n.jpg';
import Img9 from '../../assets/457445395_1107076667444901_2627603454977048025_n.jpg';
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";



export default function Discover({ userId }){

    const [selectedCategory, setSelectedCategory] = useState('');
    const [infoText, setInfoText] = useState('');

    const handleClick = (category) => {
        setSelectedCategory(category);
    };

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
    
    useEffect(() => {
        if (selectedCategory && userId) {
            fetch(`http://localhost:8080/user/uni/${userId}`)
                .then(response => response.text())
                .then(data => setInfoText(data))
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [selectedCategory, userId]);

    return(
        <>
            <div className="slider-container">
                    <h2 text align="center">Our Best Brands</h2>
                <Slider {...settings}>
                    <div>
                        <img src = {Img1} width={"20%"}/>
                    </div>
                    <div>
                        <img src = {Img2} width={"20%"}/>
                    </div>
                    <div>
                        <img src = {Img3} width={"20%"}/>
                    </div>
                    <div>
                        <img src = {Img4} width={"20%"}/>
                    </div>
                    <div>
                        <img src = {Img5} width={"20%"}/>
                    </div>
                    <div>
                        <img src = {Img6} width={"20%"}/>
                    </div>
                </Slider>
            </div>
            <div className="product-cat">
                <div className="rhombus left-rhombus" onClick={() => handleClick('Sport T-shirt list')}>
                    <img
                        src={Img7}
                        alt="Brand"
                        onLoad={handleImageLoad}
                    />
                    <div className="image-overlay">
                        <h2>SPORT</h2>
                    </div>
                </div>
                <div className="rhombus center-rhombus" onClick={() => handleClick('CASUAL T-shirt list')}>
                    <img
                        src={Img8}
                        alt="Brand"
                        onLoad={handleImageLoad}
                    />
                    <div className="image-overlay">
                        <h2>CASUAL</h2>
                    </div>
                </div>
                <div className="rhombus right-rhombus"onClick={() => handleClick('CLUB T-shirt list')}>
                    <img
                        src={Img9}
                        alt="Brand"
                        onLoad={handleImageLoad}
                    />
                    <div className="image-overlay">
                        <h2>CLUB</h2>
                    </div>
                </div>
                <div className="button-container">
                    <button>Sport</button>
                    <button>Sport</button>
                    <button>Sport</button>
                </div>
            </div>
            {selectedCategory?
            <div className="info-container">
                <div className="info-content">
                    <h2>{selectedCategory}</h2>
                    <h2>{infoText}</h2>
                </div>
            </div>:""}
        </>
    );
}