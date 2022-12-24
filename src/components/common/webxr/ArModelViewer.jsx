import React from 'react'
import nike_air_zoom_pegasus_36 from './nike_air_zoom_pegasus_36.glb'
import envLight from "./studio_small_09_2k.hdr"
import '@google/model-viewer'
import { ArIcon2 } from './assets'
import "./style/ArModelViewer.css"
import ArBackBtn from './ArBackBtn'

const ArModelViewer = () => {

    const data = [
        {
            id: 1,
            name: "Nike Air Zoom Pegasus 36",
            company: "Nike",
            price: "₹2000",
            poster: "nike_air_zoom_pegasus_36.webp",
            model: nike_air_zoom_pegasus_36,
            placement: "floor",
            hotspots: [
                {
                    id: 1,
                    name: "Strong Lace",
                    position: "-0.1063310426762897m 0.20027422684293655m -0.08258775633216421m",
                    normal: "-0.26661702648359775m 0.806294572785741m -0.5280193396887126m",
                },
                {
                    id: 2,
                    name: "The Back",
                    position: "-0.026194182109342545m -0.13081265627543276m 0.9176077618163481m",
                    normal: "-0.7479393618613397m 0.44706899451638427m 0.49062819437998184m",
                },
                {
                    id: 3,
                    name: "Nike",
                    position: "0.291398379450142m -0.08019714497152448m 0.14913965649418007m",
                    normal: "0.9929268112233068m -0.08999604391623818m 0.07744068461307795m",
                }
            ]
        }
    ]

    return (
        <div className='bg-black'>
            <model-viewer
                style={{ width: "100%", height: "60vh" }}
                alt={`A 3D model of an ${data[0].name} by ${data[0].company}`}
                src={nike_air_zoom_pegasus_36}
                environment-image={envLight}
                ar
                ar-modes="webxr scene-viewer quick-look"
                ar-placement={data[0].placement}
                camera-controls
                poster={data[0].poster}
                shadow-intensity="1"
                auto-rotate
            >
                {/* <div className="progress-bar" slot="progress-bar">
                    <div className="update-bar"></div>
                </div> */}

                {/* Hotspot */}
                {/* <div class="Hotspot" className='flex items-center space-x-2' slot="hotspot-1" data-position="-0.1063310426762897m 0.20027422684293655m -0.08258775633216421m" data-normal="-0.26661702648359775m 0.806294572785741m -0.5280193396887126m" data-visibility-attribute="visible">
                    <button class="annotation" data-visibility-attribute="visible" className='w-[20px] h-[20px] border border-white bg-[#ffffff9a] rounded-full'></button>
                    <div className='pl-2 absolute translate-x-6 w-[10rem] felx items-center text-white backdrop-blur-md border border-white p-1 rounded-full'>
                        Strong Lace
                    </div>
                </div> */}
                {data[0].hotspots.map((hotspot) => {
                    return (
                        <div class="Hotspot" className='flex items-center space-x-2' slot={`hotspot-${hotspot.id}`} data-position={hotspot.position} data-normal={hotspot.normal} data-visibility-attribute="visible">
                            <button class="annotation" data-visibility-attribute="visible" className='w-[20px] h-[20px] border border-white bg-[#ffffff9a] rounded-full'></button>
                            <div className='pl-2 absolute translate-x-6 w-[10rem] felx items-center text-white backdrop-blur-md border border-white p-1 rounded-full'>
                                {hotspot.name}
                            </div>
                        </div>
                    )
                })}



                {/* Button to trigger AR */}
                <button className='text-white mt-[50vh] mx-[27vw] flex backdrop-blur-lg justify-center w-[12rem] items-center space-x-3 border border-white p-2 rounded-full hover:bg-[#ffffff2c]' slot="ar-button" id="ar-button">
                    <div id="ar-prompt">
                        <ArIcon2 />
                    </div>
                    <div className='text-sm'>
                        View in your space
                    </div>
                </button>
                {/* <ArModelViewer /> */}

                {/* Back button */}
                <ArBackBtn name={data[0].name} company={data[0].company} price={data[0].price}/>




            </model-viewer>
        </div>
    )
}

export default ArModelViewer