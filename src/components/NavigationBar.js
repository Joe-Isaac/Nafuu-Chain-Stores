import React from 'react'

const NavigationBar = () => {
  return (
    <header className='bg-amber-500 opacity-100 bg-opacity-100 z-20 flex items-center justify-around text-white py-3 font-semibold w-full'>
        <div className='flex justify-evenly items-center'>
        <div className='flex h-full items-center px-2 text-2xl'>
                <img className='rounded-full h-10 w-10 mx-3'  alt='' src='https://cdn.pixabay.com/photo/2015/10/31/12/28/n-1015542_1280.jpg'/>
                    Nafuu stores
            </div>            
        </div>

        {/* <div className='space-evenly flex'>
        <div className='px-2'>
                <p>About us</p>
            </div>
            <div className='px-2'>
                <p>Contact us</p>
            </div>
            <div className='px-2'>
                <p>News</p>
            </div>
        </div> */}

        <div className='flex justify-between w-[23vh]'>
        <div className='rounded-r-full rounded-l-full bg-white font-semibold text-amber-500 h-fit text-sm px-3 py-1 hover:cursor-pointer'>Login</div>
        <div className='rounded-r-full rounded-l-full bg-white font-semibold text-amber-500 h-fit text-sm px-3 py-1 hover:cursor-pointer'>Sign Up</div>
        </div>
    </header>
  )
}

export default NavigationBar