import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GetApi from '../../../CallApi/GetApi';
import ProductPageLeft from './ProductPageLeft';
import ProductPageMiddle from './ProductPageMiddle';
import ProductPageRightSide from './ProductPageRightSide';

const ProductPage = () => {
  const [product, setProduct] = useState(null)
  const {id}=useParams();
  // console.log(id);

  const getProduct=()=>{
    GetApi(`data/products.json`)
    .then((products)=>{
      setProduct(products[id])
    })
  }
  useEffect(()=>{
  getProduct();
});

if(!product)return <h1>Loading...</h1>
  return (product &&
    <div className='h-screen bg-amazonclone-background'>
      <div className='min-w-[800px] max-w-[1500px] m-auto bg-orange-400' >
        <div className='grid grid-cols-10 gap-2'>
          {/* Left Side */}
        <ProductPageLeft imageUrl={product.image}/>
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