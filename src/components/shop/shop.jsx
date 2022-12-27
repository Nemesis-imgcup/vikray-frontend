import React from 'react'
import { Navbar } from '../common';
import { Footercomn } from '../common';
import './card.css'
import { Top1, Top2, Top3, Top4, Jack, Bag, Shoe } from './shopassets';
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