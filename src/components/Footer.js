import React from 'react'

const Footer = () => {
  return (
    <div className='w-screen h-fit pb-10 flex justify-evenly bottom-0 
    text-white bg-amber-500 self-end border-transparent rounded-xl p-10 hover:shadow-inner'>
        <div className='flex-col'>
            <ul className='text-md'>
                <li>Partners</li>
                <li>Apis</li>
                <li>Further projects</li>
                <li>About us</li>
            </ul>
        </div>

        <div className='flex-col'>
            <ul className='text-md'>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Email</li>
                <li>Twitter</li>
            </ul>
        </div>

        <div className='flex-col'>
            <ul className='text-md'>
                <li>Terms and conditions</li>
                <li>Privacy policy</li>
                <li>Cookies and sessions policy</li>
                <li>Authentication methods</li>
            </ul>
        </div>

        
    </div>
  )
}

export default Footer