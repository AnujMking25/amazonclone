import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLeftSide = () => {
  return (
    <div className='flex items-center'>
            <Link to='/'><img className="h-[35px] w-[100px] m-2" src={"../images/amazon.png"} alt="amazon.png" /></Link>
            <span className='-ml-2 mb-2 pl-0'>.in</span>
               <div className="pl-4 pr-4">
               <div className='text-xs xl:text-sm'>Deliver to</div>
                <div className="text-sm xl:text-base font-bold">Lucknow 226002</div>
               </div>
    </div>
  )
}

export default NavbarLeftSide