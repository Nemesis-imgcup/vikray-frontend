import React from 'react'
import { ArModelViewer, Footercomn, Navbar } from '../common'
import cyberpunk_jacket from '../../3dassets/cyberpunk_jacket.glb'
import { BagIcon, HeartIcon } from './assets'

const Product = () => {

    const data = [
        {
            id: 1,
            name: "Neo Jacket",
            company: "CryptoPunk",
            price: "$1250",
            poster: "https://cdn.discordapp.com/attachments/1054636645732859994/1056655985151844372/ahhhh.png",
            model: cyberpunk_jacket,
            placement: "floor",
            hotspots: [
                {
                    id: 1,
                    name: "Button closure",
                    position: "0.07188187187656739m 1.4514574166323728m 0.08786709958031445m",
                    normal: "-0.021876867398458802m 0.3620999834986919m 0.9318825058037508m",
                },
                {
                    id: 2,
                    name: "Leather material",
                    position: "-0.14273273485683724m 1.193229129751948m 0.0749232170042912m",
                    normal: "-0.6750052890684157m 0.165322875775553m 0.7190522974547578m",
                }
            ]
        }
    ]

    return (
        <div>
            <Navbar />
            <div className='md:flex p-10 justify-center text-white'>
                <div className='md:items-center flex justify-center md:mr-[5vw]'>
                    <div className='rounded-full absolute z-[-1]  bg-[#FFFF6D]   w-[20vw] h-[40vh] blur-[800px]'></div>
                    <ArModelViewer name={data[0].name} company={data[0].company} hotspots={data[0].hotspots} price={data[0].price} poster={data[0].poster} model={data[0].model} />
                </div>
                <div className='mt-10'>
                    {/* Name and Company */}
                    <div className='md:flex md:space-x-[20vw] '>
                        <h1 className='text-5xl font-bold'>
                            {data[0].name}
                        </h1>
                        <h2 className='flex text-xl'>
                            Product by <span className='text-[#FFFF6D] mx-1'> {data[0].company} </span>
                        </h2>
                    </div>

                    {/* Price */}
                    <div className='flex items-baseline space-x-7 mt-10 '>
                        <div className='text-3xl font-bold text-[#FFFF6D]'>
                            {data[0].price}
                        </div>
                        <div className='flex space-x-3'>
                            <div className='flex space-x-5 line-through'>
                                MRP $2500
                            </div>
                            <div className='text-[#FFFF6D]'>(50% Off)</div>
                        </div>
                    </div>

                    {/* Material & Care */}
                    <div className='pt-[5rem]'>
                        <div className='flex items-center space-x-2 text-2xl'>
                            <div>
                                Material & Care
                            </div>

                            <div className='border border-white h-0 w-[5vw]'></div>
                        </div>
                        <div>
                            Material: Cotton <br />
                            Machine Wash
                        </div>

                    </div>

                    {/* Description */}
                    <div className='pt-[5rem]'>
                        <div className='flex items-center space-x-2 text-2xl'>
                            <div>
                                Description
                            </div>

                            <div className='border border-white h-0 w-[5vw]'></div>
                        </div>
                        <div className='md:w-[30vw]'>
                            Black solid jacket, has a spread collar, 4 pockets, button closure, long sleeves, straight hem, and unlined lining
                        </div>

                    </div>

                    <div className='flex space-x-6 pt-[5rem]'>
                        <button className='bg-[#FFFF6D] flex items-center space-x-3 text-black px-8 py-2 rounded-xl'>
                            <BagIcon />
                            <div>
                                Buy Now
                            </div>

                        </button>

                        <button className='bg-[] border border-[#FFFF6D] flex items-center space-x-3 text-white px-8 py-2 rounded-xl'>
                            <HeartIcon />
                            <div>
                                Wishlist
                            </div>

                        </button>
                    </div>

                </div>

            </div>

            <div className='md:flex hidden pl-[15vw]'>
                <div className='border py-3 px-6 rounded-full bg-[#ffffff38]'>
                    View it in AR on your phone
                </div>
            </div>


            <Footercomn />

        </div>
    )
}

export default Product