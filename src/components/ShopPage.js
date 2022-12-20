import React, { useEffect } from 'react'
import Footer from './Footer'
import HotDeals from './HotDeals'
import NavigationBar from './NavigationBar'
import Sider from './Sider'
import Center from './Center'
import {RiMotorbikeLine} from 'react-icons/ri'
import {GiThumbUp} from 'react-icons/gi'
import { useSelector } from 'react-redux'
import { selectDescription, selectName, selectPrice } from '../slices/navSlice'
import { useLocation } from 'react-router-dom'

const ShopPage = () => {
    const location = useLocation();
    const data = location.state;
    const myName = useSelector(selectName);
    const myPrice = useSelector(selectPrice);
    const myDescription = useSelector(selectDescription);

    useEffect(()=>{
        console.log(myName, "is from the store")
    }, [myName])

    console.log("This data is from the landing page via link", data)
  return (
    <div className='h-screen w-screen overflow-scroll-hidden '>
        <NavigationBar/>
 
        <div className='w-full '>
        <div className='w-full z-[-10] blur-2xl mt-8 object-contain h-20 bg-[url("https://images.pexels.com/photos/952356/pexels-photo-952356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]'>
       </div>
        </div>
        
        {/* shop details */}
        <div className='flex w-screen relative justify-center z-30 top-[-20]'>
        <div className='flex flex-col h-fit justify-center w-full px-5 ml-5'>
            <div className='border flex-col shadow-xl p-8 w-full mt-3 justify-start bg-white rounded-xl'>
                <div className='w-full justify-start px-5'>
                <header className='font-semibold text-4xl my-2'>{data[1]?.name}</header>
                </div>
                <div className='w-full flex justify-start'>
                <div  className='flex justify-evenly items-center px-3'>
                    <RiMotorbikeLine/>
                    <p className='pl-2'>150ksh</p>
                </div>  
                <div  className='flex justify-evenly items-center px-5'>
                    <GiThumbUp/>
                    <p>97%</p>
                </div>
                <div className='bg-green-600 flex justify-center items-center border rounded-lg text-white text-xs p-1 h-7'>
                    Very Good
                </div>
                </div>
            </div>
        

            <div className='h-full flex justify-center flex-row w-full px-3'>
                {/* sider */}
                <Sider/>

                {/* center */}
                <div className='w-full flex justify-center' >
                <Center data={data[1]}/>
                </div>

            </div>

        </div>

        {/* Cart */}

    <div className='w-[70vh] mr-5 h-full'>

            {/* right sider */}
            <div className='border shadow-xl h-[40vh] flex-row flex justify-center items-center w-full rounded-xl py-5 my-3 z-20 bg-white'>

                <div className='h-full flex-col flex justify-center min-h-20 items-center bg-cover 
                bg-no-repeat w-full bg-[url("https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/astronaut-grey-scale.svg")]'>
                    <div className='justify-self-start'>
                    <header className='font-semibold text-lg'>Your Cart</header>
                    </div>
                    
                    <div className='my-10 '>
                    {!myName && <p className='text-sm'>Items that are added to cart will be shown here</p>}
                    {myName && <p>{myName}</p>}
                    {myName && <p>{myDescription}</p>}
                    
                    </div>

                    {myPrice && <div className='bg-amber-500 rounded-lg w-[30vh] justify-self-center flex justify-center text-white font-semibold mt-5 p-2'>
                    <p>{myPrice}</p>
                    </div>}
                </div>
            </div>
        </div>
        </div>

        

        <div>
            <Footer/>
        </div>

    </div>
  )
}

export default ShopPage