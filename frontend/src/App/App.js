import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from '../Pages/AboutUs/AboutUs';
import Shop from '../Pages/Shop/Shop';
import Home from '../Pages/Home/Home';
import Header from '../components/Header/Header';
import BinPage from '../Pages/BinPage/BinPage';
import Footer from '../components/Footer/Footer';
import BurgerButton from '../const/Button/BurgerButton';

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // планшеты и ниже
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Header />
      <div className="burger-container">
          {isMobile && <BurgerButton />}
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/bin' element={<BinPage />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>

      <Footer />
    </div>
  );
}
