import React from 'react'
import {ShoppingCartIcon} from '@heroicons/react/24/outline'
import { Link} from 'react-router-dom'
import { useSelector } from 'react-redux'


const NavbarRightSide = () => {
 const name=useSelector((state)=>state.auth.isName);
// console.log('=*=',name);
 const isAuth=useSelector((state)=>state.auth.isAuth)
//  console.log(name.split(' ')[0]);
  return (
    <div className="flex items-center">
    <div className="pl-4 pr-4 border border-black hover:border-white">
    <Link to='/signin'>
       <div className='text-xs xl:text-sm'>Hello,{isAuth ? <span className='font-bold '>{name}</span>:'sign in'}</div>
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