import React from 'react'
import { Helmet } from 'react-helmet';
import { Navbar } from '../common';
import { Footercomn } from '../common';
import './card.css'
import { DealOfTheDay, DealsOnTopBrand, TopPicksForYou } from './shopComponents';


const shop = () => {
  return (
    <div className="shop overflow-x-hidden">
      <Helmet>
        <title>Shop | Vikray | Metaverse Shopping </title>
      </Helmet>
      <Navbar />
      <DealOfTheDay />
      <DealsOnTopBrand />
      <TopPicksForYou />
      <Footercomn />
    </div>
  );
}

export default shop