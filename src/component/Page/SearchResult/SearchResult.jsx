import {useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom'
import GetApi from '../../../CallApi/GetApi';
import {Link} from 'react-router-dom';
import ProductDetails from '../Product/ProductDetails'
import { IN_CURRENCY } from '../../../CallApi/constants';

const SearchResult = () => {
 const [searchParams]=useSearchParams();
  const [products,setProducts]=useState(null);
 const getSearcgResult=()=>{
  const category=searchParams.get('category')
  const searchTerm=searchParams.get('searchTerm');

  GetApi('data/search.json')
  .then((searchResult)=>{
    const categoryResults =searchResult[category];
    console.log("categoryResult===>",categoryResults);
    if(searchTerm){
      const results=categoryResults.filter(product=>product.title.toLowerCase().includes(searchTerm.toLowerCase()))
      setProducts(results)
    }else{
      setProducts(categoryResults);
    }
  })
 }
 useEffect(()=>{
getSearcgResult()
  },[searchParams])
  return (
    <div className='min-w-[900px] max-w-[1300px] pt-4'>
      {
        products && products.map((product,key)=>{
          return(
           <Link key={key} to={`/product/${product.id}`}>
           <div className='h-[250px] bg-purple-500 grid grid-cols-12 rounded mt-1 mb-b'>
            <div className='col-span-2 p-4 bg-gray-200'>
              <img className='m-auto' src={product.image_small} alt="Image Not found" />
            </div>
           
            <div className='col-span-10 bg-gray-50 border-gray-100 hover:bg-gray-100'>
                <div className='font-medium text-black p-2'>
                  <ProductDetails product={product} ratings={true}/>
                  <div className='text-xl xl:text-2xl pt-1'>{IN_CURRENCY.format(product.price)}</div>
                </div>
            </div>
            </div>
           </Link>
          )
        })
      }
    </div>
  )
}

export default SearchResult