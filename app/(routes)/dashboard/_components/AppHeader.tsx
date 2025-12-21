import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const menuOptions=[{
    id:1,
    name:'Home',
    path:'/home'
},{
    id:2,
    name:'History',
    path:'/history'
},{
    id:3,
    name:'Pricing',
    path:'/pricing'
},{
    id:4,
    name:'Profile',
    path:'/profile'
}]

function AppHeader() {
  return (
    <div className='flex dark:bg-gray-900 justify-between items-center py-5 shadow px-10 md:px-20 lg:px-10'>
        <h1 className='font-bold'>🚨 Medical with AI</h1>
        <div className='hidden md:flex gap-12 items-center'>
            {menuOptions.map((options,index)=>(
                <div key={index}>
                    <h2 className='hover:font-bold cursor-pointer transition-all'>{options.name}</h2>
                </div>
            ))}
    </div>
    <UserButton/>
    </div>
  )
}

export default AppHeader