import {useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom'
import {Link} from 'react-router-dom';
import ProductDetails from '../Product/ProductDetails'
import { IN_CURRENCY } from '../../../CallApi/constants';
import axios from 'axios';

const SearchResult = () => {
 const [searchParams]=useSearchParams();
  const [products,setProducts]=useState();
 const getSearcgResult=async()=>{
  const category=searchParams.get('category')
  console.log("Category===>>",category);
  const getProduct=await axios(`http://localhost:4000/admin/getProduct/${category}`)
  console.log('getProduct Category===>>>',getProduct.data);
     const alldata= getProduct.data.map((product)=>{
       return <Link key={product._id} to='/product' state={{product}}>
           <div className='h-[250px] bg-purple-500 grid grid-cols-12 rounded mt-1 mb-b'>
            <div className='col-span-2 p-4 bg-gray-200'>
              <img className='m-auto' src={product.imageUrl} alt="Image Not found" />
            </div>
           
            <div className='col-span-10 bg-gray-50 border-gray-100 hover:bg-gray-100'>
                <div className='font-medium text-black p-2'>
                  <ProductDetails product={product} ratings={true}/>
                  <div className='text-xl xl:text-2xl pt-1'>{IN_CURRENCY.format(product.price)}</div>
                </div>
            </div>
            </div>
           </Link>
      })
 setProducts(prev=>{return prev=alldata})
}
 useEffect(()=>{
getSearcgResult()
  },[])
  return (
    <div className='min-w-[900px] max-w-[1300px] pt-4'>
      {products}
    </div>
  )
}

export default SearchResult