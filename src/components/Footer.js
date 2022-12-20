import React from 'react'
import '../App.css'
import {BsChevronRight} from 'react-icons/bs'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <div className='w-screen h-fit pb-10 flex-row bottom-0
     bg-[#1d1d1d] p-10 shadow-inner'
     >

    
    <div className='w-full flex justify-evenly 
    text-[#e4e4e4]'>
        <div className='flex-col'>
        <p className='font-semibold ml-1'>Our Links</p>
            <ul className='text-sm hover:cursor-pointer'>
                <li className='hover:cursor-pointer hover:text-amber-500 flex items-center px-1'><BsChevronRight style={{color: '#f59e0b'}}/>Partners</li>
                <li className='hover:cursor-pointer hover:text-amber-500 flex items-center px-1'><BsChevronRight style={{color: '#f59e0b'}}/>Apis</li>
                <li className='hover:cursor-pointer hover:text-amber-500 flex items-center px-1'><BsChevronRight style={{color: '#f59e0b'}}/>Further projects</li>
                <li className='hover:cursor-pointer hover:text-amber-500 flex items-center px-1'><BsChevronRight style={{color: '#f59e0b'}}/>About us</li>
            </ul>
        </div>

        <div className='flex-col'>
        <p className='font-semibold ml-1'>Our services</p>
            <ul className='text-sm'>
                <li className='hover:cursor-pointer hover:text-amber-500 flex items-center px-1'><BsChevronRight style={{color: '#f59e0b'}}/>Web development</li>
                <li className='hover:cursor-pointer hover:text-amber-500 flex items-center px-1'><BsChevronRight style={{color: '#f59e0b'}}/>UI design</li>
                <li className='hover:cursor-pointer hover:text-amber-500 flex items-center px-1'><BsChevronRight style={{color: '#f59e0b'}}/>Embedded systems</li>
                <li className='hover:cursor-pointer hover:text-amber-500 flex items-center px-1'><BsChevronRight style={{color: '#f59e0b'}}/>Robotics</li>
            </ul>
        </div>

        <div className='flex-col'>
            <p className='font-semibold ml-3'>Useful Links</p>
            <ul className='text-sm'>
                <li className='hover:cursor-pointer hover:text-amber-500 flex items-center px-1'><BsChevronRight style={{color: '#f59e0b'}}/>Terms and conditions</li>
                <li className='hover:cursor-pointer hover:text-amber-500 flex items-center px-1'><BsChevronRight style={{color: '#f59e0b'}}/>Privacy policy</li>
                <li className='hover:cursor-pointer hover:text-amber-500 flex items-center px-1'><BsChevronRight style={{color: '#f59e0b'}}/>Cookies and sessions policy</li>
                <li className='hover:cursor-pointer hover:text-amber-500 flex items-center px-1'><BsChevronRight style={{color: '#f59e0b'}}/>Authentication methods</li>
            </ul>
        </div>

        </div>

        <div className='w-full mt-3 flex justify-center'>
            <div className='text-amber-500 p-1 text-sm'>
                Copyright 2022, all rights reserved. Made with tailwind.
            </div>
            <div className='flex space-x-4'>
            <SocialIcon style={{width:'30px', height:'30px'}} url='https://www.facebook.com'/>
            <SocialIcon style={{width:'30px', height:'30px'}} url='https://www.instagram.com'/>
            <SocialIcon style={{width:'30px', height:'30px'}} url='https://www.twitter.com'/>
            </div>
        </div>

        
    </div>
  )
}

export default Footer