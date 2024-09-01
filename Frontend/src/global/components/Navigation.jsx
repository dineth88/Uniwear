import { useEffect } from 'react';
import M from 'materialize-css'; // Import Materialize CSS library
import 'materialize-css/dist/css/materialize.min.css'; // Import Materialize CSS styles
import { TiThMenu } from "react-icons/ti";
import logo from '../../../src/assets/uniwear-high-resolution-logo-transparent.png'; // Import logo image
import './Navigation.css';
import { NavLink, useNavigate } from "react-router-dom";
import "../../index.css";

const Navigation = ({ setShowNav, isLoggedIn, setIsLoggedIn }) => {
    const navigate = useNavigate();

    useEffect(() => {
      // Initialize sidenav when the component mounts
      const sidenav = document.querySelectorAll('.sidenav');
      M.Sidenav.init(sidenav);
    }, []);

    const handleLoginClick = () => {
        if (isLoggedIn) {
            setIsLoggedIn(false); // Logout
            navigate('/UniWear/login');
        } else {
            setShowNav(false); // Hide navigation bar on login page
            navigate('/UniWear/login');
        }
    };

    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <a href="./" className="brand-logo">
                        <img src={logo} alt="Logo" style={{ width: '150px', height: '30px' }} />
                    </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                        <i className="material-icons"><TiThMenu /></i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><NavLink to="UniWear/">Home</NavLink></li>
                        <li><NavLink to="UniWear/discover">Discover</NavLink></li>
                        <li><NavLink to="UniWear/sell">Sell</NavLink></li>
                        <li><NavLink to="UniWear/about">About</NavLink></li>
                        <li>
                            <button className="login-btn" onClick={handleLoginClick}>
                                {isLoggedIn ? "Logout" : "Login"}
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><NavLink to="UniWear/">Home</NavLink></li>
                <li><NavLink to="UniWear/discover">Discover</NavLink></li>
                <li><NavLink to="UniWear/sell">Sell</NavLink></li>
                <li><NavLink to="UniWear/about">About</NavLink></li>
                <li>
                    <button onClick={handleLoginClick}>
                        {isLoggedIn ? "Logout" : "Login"}
                    </button>
                </li>
            </ul>
        </>
    );
};

export default Navigation;