import React from 'react'
import Footer from './Footer'
import NavigationBar from './NavigationBar'
import Shops from './Shops'
import HotDeals from './HotDeals'

const LandingPage = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden'>

        {/* Navigation Bar */}

        <div className='fixed w-full z-10'>
        <NavigationBar/>
        </div>

        <div className='bg-amber-500 z-10 h-10'>
            <p>Some categories go here</p>
        </div>
 

        {/* Body section that contains a list of the shops */}

        <div className='flex justify-center'>
            <div>
            <p className='font-semibold text-2xl justify-center my-5'>Stores that you might like</p>
            </div>
        </div>                
        <Shops/>

        


        {/* Hot Deals should appear here */}
        <HotDeals/>



        {/* A footer that will be re used throughout site */}
        <Footer/>
    </div>
  )
}

export default LandingPage