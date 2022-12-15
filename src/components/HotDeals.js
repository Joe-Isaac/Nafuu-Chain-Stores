import React from 'react';
import { Carousel } from 'antd';

const HotDeals = () => {
  return (
    <div className='m-3 w-screen flex-row'>
      <div className='w-full flex justify-center'>
        <div><p className='my-5 font-semibold text-2xl'>Top Hottest Deals</p>
        </div>
      </div>


      <div className='m-3 w-screen flex'>
      <div className='m-3 w-screen flex justify-center'>
        <div >
        <div className='flex justify-center w-full'>
          <p className='my-2 font-semibold text-2xl'>Movies Section</p>
        </div>
        <Carousel autoplay className='w-[50vh]'>
        
        <div className='w-[40vh]'>
        <div className='relative top-10 right-0 justify-end left-1 z-10 text-white text-semibold text-md bg-opacity-70 bg-red-600 w-fit pl-1 pr-1'>
              -20% off
        </div>

            <div className='w-full'>

              <img className='object-cover max-h-52 w-full' src='https://dx35vtwkllhj9.cloudfront.net/disney/black-panther-wakanda-forever/images/regions/us/tt.png' alt=''/>

            </div>
            
        </div>

        <div className='w-[40vh]'>
        <div className='relative top-10 right-0 justify-end left-1 z-10 text-white text-semibold text-md bg-opacity-70 bg-red-600 w-fit pl-1 pr-1'>
              -15% off
        </div>

            <div className='w-full'>

              <img className='object-cover max-h-52 w-full' src='https://i0.wp.com/rayhaber.com/wp-content/uploads/2022/11/Avatar-2-Filminin-Ilk-Fragmani-Geldi.jpg?resize=678%2C381&ssl=1' alt=''/>

            </div>
            
        </div>


        <div className=''>
        <div className='relative top-10 right-0 justify-end left-1 z-10 text-white text-semibold text-md bg-opacity-70 bg-red-600 w-fit pl-1 pr-1'>
              -30% off, Thursdays
        </div>

            <div className='w-full'>

              <img className='object-cover max-h-52 w-full' src='https://m.media-amazon.com/images/M/MV5BOTNhYmE2ODUtZGZhYS00ODYwLWI4YWEtNjgyMmJkNDc2NmE0XkEyXkFqcGdeQXVyMjIzMTQzNDE@._V1_.jpg' alt=''/>

            </div>
            
        </div>


        
        
        </Carousel>
        </div>
      </div>

      {/* Second Category, this info will be fetched dynamically later on */}


      <div className='m-3 w-screen flex justify-center'>
        <div >
        <div className='flex justify-center w-full'>
          <p className='my-2 font-semibold text-2xl'>Fashion and wear</p>
        </div>
        <Carousel autoplay className='w-[50vh]'>
        
        <div className='w-[40vh]'>
        <div className='relative top-10 right-0 justify-end left-1 z-10 text-white text-semibold text-md bg-opacity-70 bg-red-600 w-fit pl-1 pr-1'>
              -20% off
        </div>

            <div className='w-full'>

              <img className='object-cover max-h-52 w-full' src='https://cdn.shopify.com/s/files/1/2026/3639/products/product-image-1674105153_7cc34d82-f882-4606-aebb-2a8704846f98_480x480.jpg?v=1635608846' alt=''/>

            </div>
            
        </div>

        <div className=''>
        <div className='relative top-10 right-0 justify-end left-1 z-10 text-white text-semibold text-md bg-opacity-70 bg-red-600 w-fit pl-1 pr-1'>
              -15% off
        </div>

            <div className='w-full'>

              <img className='object-cover max-h-52 w-full' src='https://www.sirri.com/media/catalog/product/cache/c0e7c0875c889aef60063c3b9191953f/b/o/boys_check_slim_fit_3_piece_suit_in_light_blue_4_.jpg' alt=''/>

            </div>
            
        </div>


        <div className='w-[40vh]'>
        <div className='relative top-10 right-0 justify-end left-1 z-10 text-white text-semibold text-md bg-opacity-70 bg-red-600 w-fit pl-1 pr-1'>
              -10% off
        </div>

            <div className='w-full'>

              <img className='object-cover max-h-52 w-full' src='https://wwd.com/wp-content/uploads/2022/05/Nike-Shoes-1.jpg?w=1000&h=563&crop=1&resize=910%2C511' alt=''/>

            </div>
            
        </div>


        
        
        </Carousel>
        </div>
      </div>


    </div>
      
    </div>
    )
}

export default HotDeals