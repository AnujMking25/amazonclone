import React from 'react'

const Checkout = () => {
  return (
    <div className="h-screen bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto pt-8">
        <div className="grid grid-cols-8 gap-10">
          {/* Products */}
          <div className="col-span-6 bg-white">
            <div className="text-2xl xl:text-3xl m-4">Shopping Cart</div>
           
            <div className="text-lg xl:text-xl text-right mb-4 mr-4">
             
              <span className="font-semibold">
               
              </span>
            </div>
          </div>
          {/* Checkout */}
          <div className="col-span-2 bg-white rounded h-[250px] p-7">
            <div className="text-xs xl:text-sm text-green-800 mb-2">
              Your order qualifies for{" "}
              <span className="font-bold">FREE DELIVERY</span>. Delivery Details
            </div>
            <div className="text-base xl:text-lg mb-4">
             
              <span className="font-semibold">

              </span>
            </div>
            <button >Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout