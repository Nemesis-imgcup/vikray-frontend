import React from 'react'
import Demo from '../assets/Demo.mp4'

const ComponentA = () => {
    return (
        <div className='pt-[10vh] '>
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