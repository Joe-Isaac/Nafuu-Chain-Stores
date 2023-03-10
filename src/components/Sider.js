import React from 'react'

const Sider = () => {
    const categories = ["Top Brands", "Top Discounts", "Top Satisfaction", "Top Quality", "Top Selling", "Top Rated", "24 hour" ]
  return (
    <div className='overflow-y-hidden w-[30vh] sm:max-w-[15rem] 
    lg:max-w-[15rem] px-3 py-3'>
       <div className='font-semibold text-amber-500 text-md py-3 w-full'>
            <p>Categories</p>
       </div>
       {
            categories?.map(cat => (
                    <div key={cat} className='text-sm border-b py-2 w-full'>
                        <p className='hover:text-amber-500 cursor-pointer'>{cat}</p>
                    </div>
            ))
        }
       {/* 
        <div className='text-sm border-b py-2 w-full'>
            <p>Top Brands</p>
        </div>
        <div className='text-sm border-b py-2 w-full'>
            <p>Top Discounts</p>
        </div>
        <div className='text-sm border-b py-2 w-full'>
            <p>Top Satisfaction</p>
        </div>
        <div className='text-sm border-b py-2 w-full'>
            <p>Top Quality</p>
        </div>
        <div className='text-sm border-b py-2 w-full'>
            <p>Top Selling</p>
        </div>
        <div className='text-sm border-b py-2 w-full'>
            <p>Top Rated</p>
        </div>
        <div className='text-sm border-b py-2 w-full'>
            <p>24 hour</p>
        </div> */}

    </div>
  )
}

export default Sider