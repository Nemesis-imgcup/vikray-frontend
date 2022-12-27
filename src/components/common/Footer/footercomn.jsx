import React from 'react'
import { Link } from 'react-router-dom'
import { Logofoot } from './footerassets';

const footercommn = () => {
    return (
      <div className="footer pt-40">
        <div class="flex">
          <div class="flex-col">
            <div class="pl-[10em]">
              <img src={Logofoot} />
            </div>
            <div class="text-[3em] font-bold text-white pl-40">VIKRAY</div>
          </div>
          <div class="text-[1.5em] font-bold text-[#F8F872] pl-60 pt-4">
            Company
            <div class=" flex flex-col text-white pt-5 ">
              <Link to={"/about"}>About</Link>
              <Link to={"/Career"}>Career</Link>
              <Link to={"/Team"}>Team</Link>
            </div>
          </div>
          <div class="text-[1.5em] font-bold text-[#F8F872] pl-60 pt-4">
            Resources
            <div class=" flex flex-col text-white pt-5 ">
              <Link to={"/about"}>Saftey</Link>
              <Link to={"/Career"}>Support</Link>
              <Link to={"/Team"}>Branding</Link>
            </div>
          </div>
          <div class="text-[1.5em] font-bold text-[#F8F872] pl-60 pt-4">
            Policy
            <div class=" flex flex-col text-white pt-5 ">
              <Link to={"/about"}>Terms & Condition</Link>
              <Link to={"/Career"}>Acknowledgement</Link>
              <Link to={"/Team"}>Privacy</Link>
              <Link to={"/Team"}>Licence</Link>
            </div>
          </div>
          <div class="flex border  h-[10vw] w-2 border-[#F8F872]  bg-[#F8F872] mt-0 ml-[5em]"></div>
          <div class="flex-col ">
            <div class="text-[1.6em] font-bold text-white pl-[1.5em] pb-9">
              Excited for your new shopping journey?{" "}
            </div>
            <div class="pl-[12em]">
              <button className=" items-center  bg-[#F8F872] text-black font-medium rounded-2xl px-20 py-6">
                Lets Shop
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
export default footercommn