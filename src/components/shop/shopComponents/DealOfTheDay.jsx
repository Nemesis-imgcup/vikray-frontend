import React from 'react'
import { Card1, Card2, Card3 } from '../shopassets'

const DealOfTheDay = () => {
    return (
        <div className='flex flex-col mx-[10vw]'>
            <div class="flex">
                <div className="flex justify-left text-white font-medium text-2xl pt-[15vh]">
                    DEALS OF THE DAY
                </div>
                <div class="flex border h-0 w-[10vw] border-white mt-[17vh] ml-[1em]"></div>
            </div>

            <div class="overflow-x-auto ">
                <div className='flex pt-8 space-x-[9vw] my-3'>
                    <img className='h-[13rem] md:h-[10rem]' src={Card1} alt='' />
                    <img className='h-[13rem] md:h-[10rem]' src={Card2} alt='' />
                    <img className='h-[13rem] md:h-[10rem]' src={Card3} alt='' />
                </div>

            </div>
        </div>
    )
}

export default DealOfTheDay