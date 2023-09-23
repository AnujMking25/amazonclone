import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AuthSliceAction } from '../../Store/AuthSlice';

const PoratalPage = ({onHidePortal}) => {
    const name=useSelector(state=>state.auth.isName);
    const dispatch=useDispatch();    
    const onLogoutHandler=()=>{
        dispatch (AuthSliceAction.logout())
    }
  return (

    <div className='fixed z-40  h-full w-[370px] bg-white  duration-800'>
    <button className='float-right p-3 text-white text-3xl ' onClick={onHidePortal}>X</button>
    <h1 className='bg-gray-900 h-[50px] text-white text-xl font-bold p-4 w-full'>Hello,{name.split(' ')[0]}</h1>
<button onClick={onLogoutHandler}>Sign Out</button>

</div>
  )
}

export default PoratalPage