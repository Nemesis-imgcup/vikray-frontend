import React from 'react'
import "./homecomp.css";
import { Image, Logo, Logo1} from './compassets';
import Demo from '../assets/Demo.mp4'


const ComponentA = () => {
    return (
        <div className='pt-[10vh] '>

            <div className='m-7'>
          
                <div className='text-[3rem] text-[#F8F872] pb-5 font-bold pl-80'>
                    Immense AR-VR Environment
                </div>

                <div className='text-white text-xl w-[50vw] pl-80 pb-9'>
                    With the heavy use of AR-VR, making your shopping easier and your shopping space more friendly and vast, so you can always get out of it.
                </div>
            
                </div>
                <div class="container2">
                <div className='img22'><img src={Logo}/>
                </div>
                <div class='text00'>
                <div class='tt1'>
                    Mint Your Own NFT for Products you Buy
                </div>
                <div className='tt3'>For any products you buy, mint your own nft for your product, so that you can<br></br> have your 
                    taste of choice in both realverse and metaverse together
                </div>
                
                </div>
                </div>
                 
                
                <div className='text-[3rem] text-[#F8F872] pt-96 pb-5 font-bold pl-80'>
                     Use Your Digital assets in various platform
                    
                </div>

                <div className='text-white text-xl w-[50vw] pl-80 pb-9'>
                For any products you buy, mint your own nft for your product, so that you can have your taste of choice in both realverse and metaverse together ;)
                </div>

                <div className='img99'><img src={Logo1} alt="" /></div>
            
                </div>
                
               

            <div className='m-7 flex right-0'>
                <div className='flex flex-col'>
                    <div className='text-3xl text-[#F8F872] pb-5 font-bold '>
                        Immense AR-VR Environment
                    </div>
                    <div className='text-white text-xl w-[40vw]'>
                        With the heavy use of AR-VR, making your shopping easier and your shopping space more friendly and vast, so you can always get out of it.
                    </div>
                </div>



                {/* auto play video */}
                <div>
                    <video src={Demo} autoPlay="autoplay" loop="loop" muted="muted" className=' m-6 rounded-2xl h-[50vh]' />
                    <div className='bgo'></div>
                </div>



            </div>
        </div>

    )
}

export default ComponentA