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
          <p className='my-2 font-semibold text-2xl'>Fashion and wear</p>
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

        <div className=''>
        <div className='relative top-10 right-0 justify-end left-1 z-10 text-white text-semibold text-md bg-opacity-70 bg-red-600 w-fit pl-1 pr-1'>
              -15% off
        </div>

            <div className='w-full'>

              <img className='object-cover max-h-52 w-full' src='https://i0.wp.com/rayhaber.com/wp-content/uploads/2022/11/Avatar-2-Filminin-Ilk-Fragmani-Geldi.jpg?resize=678%2C381&ssl=1' alt=''/>

            </div>
            
        </div>


        <div className='w-[40vh]'>
        <div className='relative top-10 right-0 justify-end left-1 z-10 text-white text-semibold text-md bg-opacity-70 bg-red-600 w-fit pl-1 pr-1'>
              -10% off
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

              <img className='object-cover max-h-52 w-full' src='https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>

            </div>
            
        </div>

        <div className=''>
        <div className='relative top-10 right-0 justify-end left-1 z-10 text-white text-semibold text-md bg-opacity-70 bg-red-600 w-fit pl-1 pr-1'>
              -15% off
        </div>

            <div className='w-full'>

              <img className='object-cover max-h-52 w-full' src='https://images.pexels.com/photos/3076787/pexels-photo-3076787.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>

            </div>
            
        </div>


        <div className='w-[40vh]'>
        <div className='relative top-10 right-0 justify-end left-1 z-10 text-white text-semibold text-md bg-opacity-70 bg-red-600 w-fit pl-1 pr-1'>
              -10% off
        </div>

            <div className='w-full'>

              <img className='object-cover max-h-52 w-full' src='https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>

            </div>
            
        </div>


        
        
        </Carousel>
        </div>
      </div>

      {/* Third Category */}
      <div className='m-3 w-screen flex justify-center'>
        <div >
        <div className='flex justify-center w-full'>
          <p className='my-2 font-semibold text-2xl'>Food stuff</p>
        </div>
        <Carousel autoplay className='w-[50vh]'>
        
        <div className='w-[40vh]'>
        <div className='relative top-10 right-0 justify-end left-1 z-10 text-white text-semibold text-md bg-opacity-70 bg-red-600 w-fit pl-1 pr-1'>
              -20% off
        </div>

            <div className='w-full'>

              <img className='object-cover max-h-52 w-full' src='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>

            </div>
            
        </div>

        <div className=''>
        <div className='relative top-10 right-0 justify-end left-1 z-10 text-white text-semibold text-md bg-opacity-70 bg-red-600 w-fit pl-1 pr-1'>
              -15% off
        </div>

            <div className='w-full'>

              <img className='object-cover max-h-52 w-full' src='https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>

            </div>
            
        </div>


        <div className='w-[40vh]'>
        <div className='relative top-10 right-0 justify-end left-1 z-10 text-white text-semibold text-md bg-opacity-70 bg-red-600 w-fit pl-1 pr-1'>
              -10% off
        </div>

            <div className='w-full'>

              <img className='object-cover max-h-52 w-full' src='https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>

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