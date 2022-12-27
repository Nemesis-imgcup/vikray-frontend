import React from 'react'
import { Navbar } from '../common';
import { Footercomn } from '../common';
import './card.css'
import { DealOfTheDay, DealsOnTopBrand, TopPicksForYou } from './shopComponents';


const shop = () => {
  return (
    <div className="shop overflow-x-hidden">
      <Navbar />
      <DealOfTheDay />
      <DealsOnTopBrand />
      <TopPicksForYou />
      <Footercomn />
    </div>
  );
}

export default shop