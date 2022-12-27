import React from 'react'
import "./homecomp.css";
import { Logo, Logo1 } from './compassets';
import Demo from '../assets/Demo.mp4'
import { Footercomn } from '../../common';


const ComponentA = () => {
    return (
      <div>
        <div className="pt-[10vh] ">
          <div className="flex m-7 mr-[6vw] px-[10vw] pr-[5vw]">
            <div className="">
              <div className="text-[3vw] text-[#F8F872] font-bold mt-[12.5vw] mb-5">
                Immense AR-VR Environment
              </div>

              <div className="text-white text-[1.5vw] w-[50vw]">
                With the heavy use of AR-VR, making your shopping easier and
                your shopping space more friendly and vast, <br></br>so you can
                always get out of it.
              </div>
            </div>

            {/* auto play video */}

            <video
              src={Demo}
              autoPlay="autoplay"
              loop="loop"
              muted="muted"
              className=" flex mx-[25%] translate-x-[-50%] rounded-2xl h-[50vw]  "
            />
          </div>

          <div className="flex">
            <img className='h-[50vw]' src={Logo} alt=""/>
            <div>
              <div className="text-[3vw] text-[#F8F872] font-bold mt-[12.5vw] mb-5">
                Mint Your Own NFT for Products you Buy
              </div>

              <div className="text-white text-[1.5vw]">
                For any products you buy, mint your own nft for your product, so
                that you can have your taste of choice in both realverse and
                metaverse together ;)
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div>
            <div className="text-[3vw] text-[#F8F872] font-bold mt-[12.5vw] mb-5  pl-[10vw]">
              Use Your Digital assets in various platform
            </div>

            <div className="text-white text-[1.5vw]  px-[10vw]">
              For any products you buy, mint your own nft for your product, so
              that you can have your taste of choice in both realverse and
              metaverse together ;)
            </div>
          </div>
          <img className='h-[50vw]' src={Logo1} alt=""/>
        </div>
      </div>
    );
}

export default ComponentA