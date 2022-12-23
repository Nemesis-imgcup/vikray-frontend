import React from 'react'
import nike_air_zoom_pegasus_36 from './nike_air_zoom_pegasus_36.glb'
import envLight from "./studio_small_09_2k.hdr"
import '@google/model-viewer'
import { ArIcon2 } from './assets'
import "./style/ArModelViewer.css"

const ArModelViewer = () => {
    return (
        <div className='bg-black'>
            <model-viewer
                style={{ width: "100%", height: "60vh" }}
                alt={`A 3D model of an nike_air_zoom_pegasus_36`}
                src={nike_air_zoom_pegasus_36}
                environment-image={envLight}
                ar
                ar-modes="webxr scene-viewer quick-look"
                camera-controls
                poster="poster.webp"
                shadow-intensity="1"
                auto-rotate
            >
                {/* <div className="progress-bar" slot="progress-bar">
                    <div className="update-bar"></div>
                </div> */}

                {/* Hotspot */}
                <div class="Hotspot" className='flex items-center space-x-2' slot="hotspot-1" data-position="-0.1063310426762897m 0.20027422684293655m -0.08258775633216421m" data-normal="-0.26661702648359775m 0.806294572785741m -0.5280193396887126m" data-visibility-attribute="visible">

                    <button class="annotation" data-visibility-attribute="visible" className='w-[20px] h-[20px] border border-white bg-[#ffffff9a] rounded-full'></button>
                    <div className='pl-2 absolute translate-x-6 w-[10rem] felx items-center text-white backdrop-blur-md border border-white p-1 rounded-full'>
                        Strong Lace
                    </div>
                </div>



                {/* Button to trigger AR */}
                <button className='text-white mt-[50vh] mx-[27vw] flex backdrop-blur-lg justify-center w-[12rem] items-center space-x-3 border border-white p-2 rounded-full hover:bg-[#ffffff2c]' slot="ar-button" id="ar-button">
                    <div id="ar-prompt">
                        <ArIcon2 />
                    </div>
                    <div className='text-sm'>
                        View in your space
                    </div>
                </button>

                {/* Back button */}
                <button slot="exit-webxr-ar-button" className="mt-[5vh] ml-[2vh]" >
                    <div className='w-[40px] h-[40px] flex justify-center items-center border-[3px] border-white rounded-full'>
                        <div className='pb-1'>
                            <div className='w-[13px] rotate-[140deg] rounded-full h-[4px] bg-white'></div>
                            <div className='w-[16px] h-[3px] bg-transparent rounded-full'></div>
                            <div className='w-[13px] absolute rotate-[40deg] rounded-full h-[4px] bg-white'></div>
                        </div>
                    </div>
                </button>




            </model-viewer>
        </div>
    )
}

export default ArModelViewer