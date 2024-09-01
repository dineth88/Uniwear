import { useState, useEffect } from 'react';
import './Discover.css';
import '../../index.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'; // Ensure to import the CSS for the Dropdown component
import { useNavigate } from 'react-router-dom';
import HoverCard from "@darenft/react-3d-hover-card";
import "@darenft/react-3d-hover-card/dist/style.css";

export default function Discover({setShowNav}){

    

    return(
        <>
            <div className="App">
                <HoverCard scaleFactor={0.4}>
                    <img src="https://s3.duellinksmeta.com/cards/60c2b3aba0e24f2d54a52a69_w360.webp" />
                </HoverCard>
            </div>
            <div className="App">
                <HoverCard scaleFactor={1.4}>
                    <img src="https://s3.duellinksmeta.com/cards/60c2b3aba0e24f2d54a52a69_w360.webp" />
                </HoverCard>
            </div>
        </>
    );
}