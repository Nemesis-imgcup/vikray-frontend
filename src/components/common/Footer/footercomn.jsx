import React from 'react'
import { Link } from 'react-router-dom'
import { Logofoot } from './footerassets';

const footercommn = () => {
  return (
    <div className="footer pt-40">
      <div class="flex flex-col md:flex-row justify-evenly space-x-7 items-center py-8">

        <div class="flex flex-col items-center m-6">
          <div class="">
            <img className='w-[6rem]' src={Logofoot} alt="" />
          </div>
          <div class="text-xl font-bold text-white">VIKRAY</div>
        </div>

        <div class="text-xl pt-10 md:pt-0 font-bold text-[#F8F872]">
          Company
          <div class=" flex flex-col text-white pt-5 ">
            <Link to={"/about"}>About</Link>
            <Link to={"/Career"}>Career</Link>
            <Link to={"/Team"}>Team</Link>
          </div>
        </div>

        <div class="text-xl pt-10 md:pt-0 font-bold text-[#F8F872]">
          Resources
          <div class=" flex flex-col text-white pt-5 ">
            <Link to={"/safty"}>Saftey</Link>
            <Link to={"/support"}>Support</Link>
            <Link to={"/branding"}>Branding</Link>
          </div>
        </div>

        <div class="text-xl pt-10 md:pt-0 font-bold text-[#F8F872]">
          Policy
          <div class=" flex flex-col text-white pt-5 ">
            <Link to={"/tac"}>Terms & Condition</Link>
            <Link to={"/acknowledgement"}>Acknowledgement</Link>
            <Link to={"/Privacy"}>Privacy</Link>
            <Link to={"/Licence"}>Licence</Link>
          </div>
        </div>

        <div class="flex border md:h-[10vw] md:w-2 h-2 w-[10vw] border-[#F8F872]  bg-[#F8F872] my-[2rem] md:ml-[5em]"></div>

        <div class="flex-col ">
          <div class="text-xl font-bold text-white pb-9">
            Excited for your new shopping journey?{" "}
          </div>
          <Link to={'/shop'}>
            <button className=" items-center  bg-[#F8F872] text-black font-medium rounded-2xl px-20 py-6">
              Lets Shop
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
export default footercommn