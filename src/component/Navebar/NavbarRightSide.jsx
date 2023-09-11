import React from 'react'
import {ShoppingCartIcon} from '@heroicons/react/24/outline'
import { Link} from 'react-router-dom'


const NavbarRightSide = () => {
 
  return (
    <div className="flex items-center">
    <div className="pl-4 pr-4">
    <Link to='/signin'>
       <div className='text-xs xl:text-sm'>Hello,sign in</div>
        <div className="text-sm xl:text-base font-bold">
        <p>Accounts & Lists</p>
        </div>
        </Link>
    </div>

    <div className="pl-4 pr-4">
       <div className='text-xs xl:text-sm'>Returns</div>
        <div className="text-sm xl:text-base font-bold">& Orders</div>
    </div>

    <Link to='/checkOut'>
    <div className="flex pr-3 pl-3">
        <ShoppingCartIcon className='h-[48px]'/>
        <div className="mt-7 text-xs xl:text-sm font-bold">
            Cart
        </div>
      </div>
    </Link>
    </div>
  )
}

export default NavbarRightSide