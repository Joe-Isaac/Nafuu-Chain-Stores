import React from 'react';
import {RiAddFill} from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setPrice, setDescription } from '../slices/navSlice';
const Center = () => {
    const dispatch = useDispatch();
    const addToCart = () => {
        console.log("An action has been dispatched");
        dispatch(setName("Item Name"));
        dispatch(setPrice("Item Price"));
        dispatch(setDescription("Item Description"));
    }

  return (
    <div className='overflow-y-hidden px-3 py-3 flex flex-col w-full'>
        <div className='w-full flex justify-center'>
            <header className='font-semibold text-xl my-3'>
                Category of selection here
            </header>
        </div>

        <div className='flex-col w-full my-3'>
            <div className='w-full flex'>
                <div className='w-full flex flex-col justify-center items-center border shadow-md rounded-lg mx-3 p-3'>
                    
                    <div className='flex w-full'>
                        <img className='object-cover h-20 w-20 rounded-lg' alt='' src='https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                        <p className='px-2'>Description of the item</p>
                    </div>
                    <div className='flex w-full justify-between items-end'>
                        <div><p>Price info</p></div>
                        <div className="flex justify-between items-center cursor-pointer"><RiAddFill/><p>Add to cart</p></div>
                    </div>
                </div>

                <div className='w-full flex flex-col justify-center items-center border shadow-md rounded-lg mx-3 p-3'>
                
                <div className='flex w-full px-2'>
                        <img className='object-cover h-20 w-20 rounded-lg' alt='' src='https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                        <p className='px-2'>Description of the item</p>
                    </div>
                    <div className='flex w-full justify-between items-end'>
                        <div><p>Price info</p></div>
                        <div className="flex justify-between items-center cursor-pointer" 
                        onClick={()=>addToCart()}
                        ><RiAddFill/><p>Add to cart</p></div>
                    </div>
                </div>
            </div>

            <div className='flex-col w-full my-3'>
            <div className='w-full flex'>
                <div className='w-full flex flex-col justify-center items-center border shadow-md rounded-lg mx-3 p-3'>
                    
                    <div className='flex w-full'>
                        <img className='object-cover h-20 w-20 rounded-lg' alt='' src='https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                        <p className='px-2'>Description of the item</p>
                    </div>
                    <div className='flex w-full justify-between items-end'>
                        <div><p>Price info</p></div>
                        <div className="flex justify-between items-center cursor-pointer"
                        onClick={()=>addToCart()}><RiAddFill/><p>Add to cart</p></div>
                    </div>
                </div>

                <div className='w-full flex flex-col justify-center items-center border shadow-md rounded-lg mx-3 p-3'>
                
                <div className='flex w-full px-2 '>
                        <img className='object-cover h-20 w-20 rounded-lg' alt='' src='https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'/>
                        <p className='px-2'>Description of the item</p>
                    </div>
                    <div className='flex w-full justify-between items-end'>
                        <div><p>Price info</p></div>
                        <div className="flex justify-between items-center cursor-pointer"
                        onClick={()=>addToCart()}><RiAddFill/><p>Add to cart</p></div>
                    </div>
                </div>
            </div>

            <div className='flex-col w-full my-3'>
            <div className='w-full flex'>
                <div className='w-full flex flex-col justify-center items-center border shadow-md rounded-lg mx-3 p-3'>
                    
                    <div className='flex w-full'>
                        <img className='object-cover h-20 w-20 rounded-lg' alt='' src='https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=600'/>
                        <p className='px-2'>Description of the item</p>
                    </div>
                    <div className='flex w-full justify-between items-end'>
                        <div><p>Price info</p></div>
                        <div className="flex justify-between items-center cursor-pointer"
                        onClick={()=>addToCart()}><RiAddFill/><p>Add to cart</p></div>
                    </div>
                </div>

                <div className='w-full flex flex-col justify-center items-center border shadow-md rounded-lg mx-3 p-3'>
                
                <div className='flex w-full px-2'>
                        <img className='object-cover h-20 w-20 rounded-lg' alt='' src='https://images.pexels.com/photos/375897/pexels-photo-375897.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                        <p className='px-2'>Description of the item</p>
                    </div>
                    <div className='flex w-full justify-between items-end'>
                        <div><p>Price info</p></div>
                        <div className="flex justify-between items-center cursor-pointer"
                        onClick={()=>addToCart()}><RiAddFill/><p>Add to cart</p></div>
                    </div>
                </div>
            </div>
            
            </div>
            
        </div>
        
    </div>
        

    </div>
  )
}

export default Center