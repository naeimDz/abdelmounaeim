// components/Header.tsx
import React from 'react';
import Navbar from './Navbar';
import SliderComponent from './Slider';
import dataSlider from "../_data/slider-data.json";


const Header: React.FC = () => {
  return (
    <header className="header">
      <Navbar />
      <SliderComponent data={dataSlider} />
    </header>
  );
};

export default Header;
