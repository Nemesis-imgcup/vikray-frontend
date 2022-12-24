import React from 'react'
import { Navbar } from '../common';
import "./home.css";
import '../common/buttons/button.css'



const Home = () => {
    return (
        <div className='home'>
            <Navbar/>
            <h1>With buying your favorite<span> Goodies</span><br></br>
             You can <span>mint</span> your own <span>NFTs</span>
            </h1>
            <p>Online metaverse shopping store to buy all your physical and digital goodies<br></br> and assets together with more user focused features.</p>
              
    <div class= "container">
      <a href="#" class="neon-button orange">Lets shop</a>
    </div>
            <div class="line-1"></div>
            <div class='meta'><h2>METAVERSE    SHOPPING</h2></div>
            <div class="line-2"></div>
            </div>
            
            
    )
}

export default Home