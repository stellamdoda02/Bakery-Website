import React from 'react';
import Muffins from '../Images/Muffins.jpg';
import Waffle from '../Images/Waffle.jpg';
import Donuts from '../Images/Donuts.jpg';
import Choc from '../Images/Choc.jpg';
import Pie from '../Images/Pie.jpg';
import Wedding from '../Images/Wedding.png';
import '../App.css';

const MenuPage = () => {
  return (
    <div className="container">
      <h1>Our Menu</h1>
      <div className="columns">
        <div className="column">
          <div className="menu-item">
            <h2>Muffins</h2>
            <img src={Muffins} alt="Muffins" />
          </div>
          <div className="menu-item">
            <h2>Donuts</h2>
            <img src={Donuts} alt="Donuts" />
          </div>
          <div className="menu-item">
            <h2>Lemon Pie</h2>
            <img src={Pie} alt="Pie" />
          </div>
        </div>
        <div className="column">
          <div className="menu-item">
            <h2>Waffle</h2>
            <img src={Waffle} alt="Waffle" />
          </div>
          <div className="menu-item">
            <h2>Choc Cake</h2>
            <img src={Choc} alt="Choc Cake" />
          </div>
          <div className="menu-item">
            <h2>Wedding Cake</h2>
            <img src={Wedding} alt="Wedding Cake"  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
