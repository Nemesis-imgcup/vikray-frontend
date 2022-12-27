import React from 'react'
import { Bag, Jack, Shoe, Top1, Top2, Top3, Top4 } from '../shopassets'
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
        }
    ]

    return (
        <div>
           <div class="flex">
                <div className="flex justify-left text-white font-medium Pl-5 text-2xl pt-[15vh]">
                    DEALS OF THE DAY
                </div>
                <div class="flex border h-0 w-[10vw] border-white mt-[17vh] ml-[1em]"></div>
            </div>

            <div class="flex pt-[10vh]">
                <div class="container11">

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