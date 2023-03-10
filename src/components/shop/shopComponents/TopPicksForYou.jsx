import React from 'react'
import { Bag, BagNikon, Jack, Shoe} from '../shopassets'
import ItemCard from './ItemCard'

const TopPicksForYou = () => {

    const data = [
        {
            id: 1,
            name: 'Nike Shoes',
            image: Shoe,
            size: [7, 8, 9, 10],
            path: '/product'
        },

        {
            id: 2,
            name: 'CP-Jacket',
            image: Jack,
            size: ['M', 'S', 'L', 'XL'],
            path: '/product'
        },

        {
            id: 3,
            name: 'Cam Bag',
            image: Bag,
            size: [7, 8, 9, 10],
            path: '/product'
        },
        {
            id: 4,
            name: 'Nikon Bag',
            image: BagNikon,
            size: [7, 8, 9, 10],
            path: '/product'
        }
    ]

    return (
        <div  className='flex flex-col mx-[10vw]'>
            <div class="flex">
                <div className="flex justify-left text-white font-medium text-2xl pt-[15vh]">
                    TOP PICKS FOR YOU
                </div>
                <div class="flex border h-0 w-[10vw] border-white mt-[17vh] ml-[1em]"></div>
            </div>

            <div class="flex pt-[10vh] overflow-x-auto ">
                <div class="container11 pb-4">

                    {data.map((item) => {
                        return (
                            <ItemCard name={item.name} image={item.image} size={item.size} path={item.path} />
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default TopPicksForYou