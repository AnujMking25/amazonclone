import React from 'react'
import { useLocation} from 'react-router-dom'
import ProductPageLeft from './ProductPageLeft';
import ProductPageMiddle from './ProductPageMiddle';
import ProductPageRightSide from './ProductPageRightSide';

const ProductPage = () => {
 const location=useLocation();
  const product=location.state.product;

console.log("useLocation===>>>",product);  

  return (product &&
    <div className='h-screen bg-amazonclone-background'>
      <div className='min-w-[800px] max-w-[1500px] m-auto p-4' >
        <div className='grid grid-cols-10 gap-2'>
          {/* Left Side */}
        <ProductPageLeft imageUrl={product.imageUrl}/>
          {/* Middle */}
          <ProductPageMiddle product={product}/> 
          {/* Rigth */}
         <ProductPageRightSide product={product}/>
        </div>
      </div>
    </div>
  )
}

export default ProductPage