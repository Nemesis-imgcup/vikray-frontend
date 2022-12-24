import React from 'react'
import './navbar.css'
import '../buttons/button.css'
import '../serchbar/searchbar.css'
import logo from './NavAssets/logo.png'

const Navbar = () => {
  return (
   
      <header className='navbar'>
        <img className='imglogo' src={logo} alt="" />
          <div className='navbar__title navbar__item'>Vikray</div>
          <div id="cover">
           <form method="get" action="">
              <div class="tb">
                <div class="td"><input type="text" placeholder="Search" required></input></div>
                  <div class="td" id="s-cover">
                   <button type="submit">
                    <div id="s-circle"></div>
                     <span></span>
                   </button>
                  </div>
                </div>
              </form>
           </div>
          <div className='buttonsf'>
          <button class="button-86" role="button">Log In</button> &nbsp;&nbsp;&nbsp;
          <button class="button-86" role="button">Sign-Up</button> &nbsp;&nbsp;&nbsp;
         </div>      
      </header>
  )
}

export default Navbar