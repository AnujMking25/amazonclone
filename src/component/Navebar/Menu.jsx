import React, { useState } from 'react'
import Portal from '../Portel/Portal';

const Menu = () => {
  const[showPortal,setShowPortal]=useState(false);
  const onshowPortal=()=>{
setShowPortal(true);
  }
  const onHidePortal=()=>{
    setShowPortal(false);
      }
  return (
    <div>
    <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-base xl:text-xl p-2 pl-6">
    <button onClick={onshowPortal}>All</button>
    <div>Amazon miniTv</div>
    <div>sell</div>
    <div>Best Sellers</div>
    <div>Today's Deals</div>
    <div>Mobiles</div>
    <div>New Releases</div>
    <div>Customer Service</div>
    <div>prime</div>
    <div>Electronics</div>
    <div>Gift Ideas</div>
    <div>Home & Kitchen</div>
    <div>Fashion</div>
</div>
{showPortal && <Portal onHidePortal={onHidePortal}/>}
</div>
  )
}

export default Menu