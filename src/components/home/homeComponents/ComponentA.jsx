import React from 'react'
import "./homecomp.css";
import { Logo, Logo1 } from './compassets';
import Demo from '../assets/Demo.mp4'
import { Footercomn } from '../../common';


const ComponentA = () => {
    return (
        <div>
            <div className='pt-[10vh] '>

                <div className='flex m-7 mr-[6vw] pl-[10vw] pr-[5vw]'>

                    <div className=''>
                        <div className='text-[3rem] text-[#F8F872] pb-5 font-bold'>
                            Immense AR-VR Environment
                        </div>

                        <div className='text-white text-xl w-[50vw]  pb-9'>
                            With the heavy use of AR-VR, making your shopping easier and your shopping space more friendly and vast, <br></br>so you can always get out of it.
                        </div>
                    </div>


                    {/* auto play video */}

                    <video src={Demo} autoPlay="autoplay" loop="loop" muted="muted" className=' rounded-2xl h-[70vh]' />

                </div>


                <div class="flex">

                    <img className='' src={Logo} alt='' />

                    <div className='text00'>
                        <div class='tt1'>
                            Mint Your Own NFT for Products you Buy
                        </div>
                        <div className='tt3'>For any products you buy, mint your own nft for your product, so that you can<br></br> have your
                            taste of choice in both realverse and metaverse together
                        </div>

                    </div>
                </div>
            </div>

            <div className='flex'>
                <div>
                    <div className='text-[3rem] text-[#F8F872] pt-96 pb-5 font-bold pl-80'>
                        Use Your Digital assets in various platform

                    </div>

                    <div className='text-white text-xl w-[50vw] pl-80 pb-9'>
                        For any products you buy, mint your own nft for your product, so that you can have your taste of choice in both realverse and metaverse together ;)
                    </div>
                </div>
                <img src={Logo1} alt="" />

            </div>


        </div>


    )
}

export default ComponentA