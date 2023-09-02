import React from 'react'
import {ShoppingCartIcon} from '@heroicons/react/24/outline'
import Search from './Search'
const Navbar = () => {
  return (
    <header className='min-w-[800px]'>
        <div className="flex bg-amazonclone text-white h-[60px]">
        {/* Left Side */}
            <div className='flex items-center'>
            <img className="h-[35px] w-[100px] m-2" src={"../images/amazon.png"} alt="amazon.png" />
            <span className='-ml-2 mb-2 pl-0'>.in</span>
               <div className="pl-4 pr-4">
               <div className='text-xs xl:text-sm'>Deliver to</div>
                <div className="text-sm xl:text-base font-bold">Lucknow 226002</div>
               </div>
                </div>
            {/* Middle  */}
            <div className='flex grow relative items-center'>
               <Search/>
            </div>
            {/* Right Side */}
            <div className="flex items-center">
            <div className="pl-4 pr-4">
               <div className='text-xs xl:text-sm'>Hello,sign in</div>
                <div className="text-sm xl:text-base font-bold">Accounts & Lists</div>
            </div>

            <div className="pl-4 pr-4">
               <div className='text-xs xl:text-sm'>Returns</div>
                <div className="text-sm xl:text-base font-bold">& Orders</div>
            </div>

            <div className="flex pr-3 pl-3">
                <ShoppingCartIcon className='h-[48px]'/>
                <div className="mt-7 text-xs xl:text-sm font-bold">
                    Cart
                </div>
            </div>
            
            </div>
        </div>
    </header>
  )
}

export default Navbar