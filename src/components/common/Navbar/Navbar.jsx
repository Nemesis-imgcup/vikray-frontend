import React from 'react'
import './navbar.css'
import { SearchIcon, VikrayLogo } from './NavAssets'

const Navbar = () => {
  return (

    <nav className='navbar justify-between px-5'>

      <VikrayLogo />

      <div className="flex items-top pl-[13em] justify-center content-center relative items-center w-full h-full">
        <form method="GET">
          <div className="relative text-gray-600 focus-within:text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                <SearchIcon/>
              </button>
            </span>
            <input type="search" name="q" className="py-2  text-sm w-[30vw] text-white bg-[#ffffff8a] placeholder:text-white rounded-md pl-16 focus:outline-none focus:bg-white focus:text-black" placeholder="Browse Product" autoComplete="off" />
          </div>
        </form>
      </div>

      <div className='flex space-x-4'>
        <button className="flex items-center  text-white font-medium rounded-2xl px-10 py-3" >LogIn</button>
        <button className="flex items-center bg-[#F8F872] text-black font-medium rounded-2xl px-10 py-3">Signup</button> 
      </div>

    </nav>
  )
}

export default Navbar