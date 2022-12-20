import { Col, Row } from 'antd';
import React from 'react';
import {RiAddFill} from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setPrice, setDescription } from '../slices/navSlice';
const Center = ({data}) => {
    
    const dispatch = useDispatch();
    const addToCart = (data) => {
        
        dispatch(setName(data.name));
        dispatch(setPrice(data.price));
    }

    let times = 0;

  return (
    <div className='overflow-y-hidden px-3 py-3 flex justify-center flex-col w-full'>
        
        <>
        {
        data.categories.map(x => {
            return (<>
            <div className='w-full flex justify-center'>
            <header className='font-semibold text-4xl my-2'>
                {x.name}
            </header>
        </div>
            {x?.data.map(newData => {
                return(
                    <>
                    <div className='font-semibold text-2xl w-full flex justify-start my-3'>{newData?.name}</div>
                    <div className='w-full my-3'>
                        {newData?.data.map(z => (<>
                            <div className='font-semibold text-xl my-3 w-full flex justify-center'>{z?.name}</div>
                            <Row className='w-full my-3 flex justify-center'>
                            {   
                                z.data.map(data => (
                                    <Col className='w-[40vh] flex flex-col justify-center items-center border shadow-md rounded-lg mx-3 my-3 p-3'>
                                    <div className='flex w-full'>
                                        <img className='object-cover h-20 w-20 rounded-lg' alt='' src={data.url}/>
                                        <p className='px-2'>{data.name}</p>
                                    </div>
                                    <div className='flex w-full justify-between items-end'>
                                        <div><p>{data.price}</p></div>
                                        <div className="flex justify-between items-center cursor-pointer"
                                        onClick={()=>addToCart(data)}><RiAddFill/><p>Add to cart</p></div>
                                    </div>
                                    </Col>
                                ))
                            }
                             </Row>
                        </>
                        ))}
                     </div>
                    </>

                    // <Row className=' w-full my-3 grid'>
                    //     <div font-semibold text-xl my-3>{newData?.name}</div>
                    // {newData?.data.map(z => (
                    //     // <Row className=' w-full my-3 grid'>
                    //     // <div font-semibold text-xl my-3>{z?.name}</div>
                    //     // {/* {   
                    //     //     z.data.map(data => (
                    //     //             <div>This is a happy day</div>
                    //     //     ))
                    //     // } */}
                    //     // </Row>
                    // )
                    // )}
                    // </Row>
                )
                
            })}
            
            </>);

             
})
    }
    </>
        
        

    </div>
  )
}

export default Center