import React from 'react'
import nike_air_zoom_pegasus_36 from './nike_air_zoom_pegasus_36.glb'
import envLight from "./studio_small_09_2k.hdr"
// import model-viewer package from node_modules
import '@google/model-viewer'
import { ArIcon2 } from './assets'

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



                <button className='text-white mt-[50vh] mx-[27vw] flex justify-center w-[12rem] items-center space-x-3 border border-white p-2 rounded-full hover:bg-[#ffffff2c]' slot="ar-button"  id="ar-button">
                    <div id="ar-prompt">
                        {/* <ArIcon /> */}
                        <ArIcon2 />
                    </div>
                    <div className='text-sm'>
                        View in your space
                    </div>

                </button>


            </model-viewer>
        </div>
    )
}

export default ArModelViewer