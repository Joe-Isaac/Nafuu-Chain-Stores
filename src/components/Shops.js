import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Shops = () => {
    const navigate = useNavigate();
    const[data, setData] = useState([]);
    useEffect(() => {
      fetch("http://192.168.2.152:5000/shops")
      .then(res => res.json())
      .then(data => {
        console.log(data , " is the data")
        setData(data);
      })
      .catch(err => console.log(err.message))
    }, [])
    
  return (
    <div className='flex-row w-screen'>
            {/* <div className='mx-3 '>Store 1</div>
            <div className='mx-3'>Store 2</div>
            <div className='mx-3'>Store 3</div>
            <div className='mx-3'>Store 4</div> */}
            <div className='flex justify-center mb-2'>
            <div className='bg-white p-6 border-transparent rounded-xl shadow-lg hover:shadow-sm hover:bg-gray-50 mx-1.5 w-[30vh]'
            >
                <Link to="/shoppage" state={data}>
                <div className='mb-2'>
                    <img className='relative rounded-xl h-32 w-full mx-auto object-cover' alt='' src='https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                </div>
                <header className='font-semibold'>Mufasa's Cloth Line</header>
                <p className='text-sm'>Exlusive mens, womens and childrens wear</p>
                <p className='text-sm font-semibold'>Shop 17C</p>
                </Link>
            </div>

            <div className=' bg-white p-6 border-transparent rounded-xl shadow-lg hover:shadow-sm hover:bg-gray-50 mx-1.5 w-[30vh]'
            onClick={()=>navigate("shoppage")}>
                <div className='mb-2'>
                    <img className='relative rounded-xl h-32 w-full mx-auto object-cover' alt='' src='https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg'/>
                </div>
                <header className='font-semibold'>Uzima Veggies</header>
                <p className='text-sm'>Shop Healthy, Eat Healthier</p>
                <p className='text-sm font-semibold'>Shop 17D</p>
            </div>

            <div className=' bg-white p-6 border-transparent rounded-xl shadow-lg hover:shadow-sm hover:bg-gray-50 mx-1.5 w-[30vh]'
            onClick={()=>navigate("shoppage")}>
                <div className='mb-2'>
                    <img className='relative rounded-xl h-32 w-full mx-auto object-cover' alt='' src='https://wearychef.com/wp-content/uploads/2014/08/antipasto-skewers-1-600x800.jpg'/>
                </div>
                <header className='font-semibold'>Tamu Dishes</header>
                <p className='text-sm'>We take you 'delicious' home</p>
                <p className='text-sm font-semibold'>Shop 17E</p>
            </div>
            </div>

            <div className='flex justify-center mt-5'>
            <div className='bg-white p-6 border-transparent rounded-xl shadow-lg hover:shadow-sm hover:bg-gray-50 mx-1.5 w-[30vh]'
            onClick={()=>navigate("shoppage")}>
                <div className='mb-2'>
                    <img className='relative rounded-xl h-32 w-full mx-auto object-cover' alt='' src='https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg'/>
                </div>
                <header className='font-semibold'>Burger spot</header>
                <p className='text-sm'>You will love it here</p>
                <p className='text-sm font-semibold'>Shop 16A</p>
            </div>

            <div className=' bg-white p-6 border-transparent rounded-xl shadow-lg hover:shadow-sm hover:bg-gray-50 mx-1.5 w-[30vh]'
            onClick={()=>navigate("shoppage")}>
                <div className='mb-2'>
                    <img className='relative rounded-xl h-32 w-full mx-auto object-cover' alt='' src='https://wavel.ai/blog/wp-content/uploads/2022/11/image2.jpg'/>
                </div>
                <header className='font-semibold'>Movie Hub</header>
                <p className='text-sm'>Get all action</p>
                <p className='text-sm font-semibold'>Theatre</p>
            </div>

            <div className=' bg-white p-6 border-transparent rounded-xl shadow-lg hover:shadow-sm hover:bg-gray-50 mx-1.5 w-[30vh]'
            onClick={()=>navigate("shoppage")}>
                <div className='mb-2'>
                    <img className='relative rounded-xl h-32 w-full mx-auto object-cover' alt='' src='https://images.squarespace-cdn.com/content/v1/5a49091d1f318dd63985ae87/1556138275926-IIQRRDOYKJSK7ZQ41ILQ/Capsule+Accessories+Collection+-+Must+Have+Jewelry+Pieces_01.JPG?format=1000w'/>
                </div>
                <header className='font-semibold'>Grinch accessories</header>
                <p className='text-sm'>Classy as you like</p>
                <p className='text-sm font-semibold'>Shop 18D</p>
            </div>
            </div>
            

            
    </div>
  )
}

export default Shops;