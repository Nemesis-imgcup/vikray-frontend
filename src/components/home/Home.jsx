import React from 'react'
import { ArIcon } from '../common/webxr/assets'

const Home = () => {
    return (
        <div className='bg-black h-[100vh] p-10'>Home
            <button className='text-white flex items-center space-x-3 border border-white p-2 rounded-full hover:bg-[#ffffff2c]' slot="ar-button" id="ar-button">
                <ArIcon />
                <div className='text-sm'>
                    View in your space
                </div>
            </button>
        </div>
    )
}

export default Home