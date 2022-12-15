import React from 'react'
import { useSelector } from 'react-redux';
import { selectName } from '../slices/navSlice';

const CheckGlobalAccess = () => {
    const name = useSelector(selectName);

    return (
        <button
        className='bg-white mt-10'
        onClick={()=>console.log("name is", name)}>
        Check name
        </button>
    )
}

export default CheckGlobalAccess