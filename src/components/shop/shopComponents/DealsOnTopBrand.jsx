import React from 'react'
import { Brand1, Brand2, Brand3, Brand4 } from '../shopassets'

const DealsOnTopBrand = () => {
    return (
        <div className='flex flex-col mx-[10vw]'>
            <div class="flex">
                <div className="flex justify-left text-white font-medium text-2xl pt-[15vh]">
                    DEALS OF THE DAY
                </div>
                <div class="flex border h-0 w-[10vw] border-white mt-[17vh] ml-[1em]"></div>
            </div>

            <div class="flex overflow-x-auto items-center pt-8 space-x-[9vw]">
                <img className='h-[12rem] md:h-[20rem]' src={Brand1} alt='' />
                <img className='h-[13rem] md:h-[20rem]' src={Brand2} alt='' />
                <img className='h-[13rem] md:h-[20rem]' src={Brand3} alt='' />
                <img className='h-[13rem] md:h-[20rem]' src={Brand4} alt='' />
            </div>
        </div>
    )
}

export default DealsOnTopBrand