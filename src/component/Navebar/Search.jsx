import React from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
const Search = () => {
  return (
    <div className="w-[100%]">
    <div className='flex items-center h-10 bg-amazonclone-yellow rounded'>
        <select className="p-2 bg-gray-200 text-black border text-xs xl:text-sm" name="" id="">
            <option value="">All</option>
            <option value="">Alexa Skills</option>
            <option value="">Amazon Devices</option>
            <option value="">Amazon Fashion</option>
            <option value="">Amazon Fresh</option>
            <option value="">Amazon Pharmacy</option>
        </select>
        <input className="flex grow items-center h-[100%] rounded-l text-black " type='text' />
    <button className="w-[45px]">
        <MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-950'/>
    </button>
    </div>
    </div>
  )
}

export default Search