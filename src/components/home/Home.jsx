import React from 'react'
import { Link } from 'react-router-dom';
import { Footercomn, Navbar } from '../common';

import "./home.css";
import { ComponentA } from './homeComponents';
import { Footer } from './homeFooter';


// import '../common/buttons/button.css'



const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <h1>With buying your favorite<span> Goodies</span><br></br>
        You can <span>mint</span> your own <span>NFTs</span>
      </h1>
      <p>Online metaverse shopping store to buy all your physical and digital goodies<br></br> and assets together with more user focused features.</p>


      <div className='flex justify-center pt-5'>
        <Link to='/shop'>
          <button class="flex items-center bg-[#F8F872] text-black font-medium rounded-2xl px-10 py-3">
            <div href="#" className="">Let's shop</div>
          </button>
        </Link>

      </div>



      <div class="line-1"></div>
      <div class='meta'><h2>METAVERSE SHOPPING</h2></div>
      <div class="line-2"></div>

      <ComponentA />
      <Footer />
      <Footercomn />



    </div>


  )
}

export default Home