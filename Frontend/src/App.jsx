import { useState } from 'react';
import Navigation from './global/components/Navigation';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/Home';
import Discover from './pages/Discover/Discover';
import Sell from './pages/Sell/Sell';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Test from './pages/Test/Test';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import SignUp from './pages/SignUp/SignUp';
import Cart from './global/components/Cart/Cart';
import './App.css';

function App() {
  const [showNav, setShowNav] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null); // Add state for user ID

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserId(null); // Clear the user ID on logout
  };

  return (
    <>
      <BrowserRouter>
        <div className='gradient-background'></div>
        <div className='white-overlay'></div>
        {showNav && (
          <header>
            <Navigation setShowNav={setShowNav} isLoggedIn={isLoggedIn} handleLogout={handleLogout}></Navigation>
          </header>
        )}
        <Routes>
          <Route path='/UniWear/' element={<Home setShowNav={setShowNav} />} />
          <Route path='/UniWear/discover' element={<Discover setShowNav={setShowNav} />} />
          <Route path='/UniWear/sell' element={<Sell setShowNav={setShowNav} userId={userId} />} /> {/* Pass userId */}
          <Route path='/UniWear/about' element={<About setShowNav={setShowNav} />} />
          <Route path='/UniWear/login' element={<Login setShowNav={setShowNav} setIsLoggedIn={setIsLoggedIn} setUserId={setUserId} />} /> {/* Pass setUserId */}
          <Route path='/UniWear/UniWear' element={<Test setShowNav={setShowNav} />} />
          <Route path='/UniWear/*' element={<PageNotFound setShowNav={setShowNav} />} />
          <Route path='/UniWear/signup' element={<SignUp setShowNav={setShowNav} />} />
          <Route path='/UniWear/cart' element={<Cart setShowNav={setShowNav} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
