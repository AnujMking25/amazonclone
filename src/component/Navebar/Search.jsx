import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import GetApi from "../../CallApi/GetApi";
import { useNavigate,createSearchParams } from "react-router-dom";
const Search = () => {
  const [suggestion, setSuggestion] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
const navigate=useNavigate();

  const getSuggestion = () => {
    GetApi(`data/suggestions.json`).then((suggestionResult) => {
      // console.log(suggestionResult);
      setSuggestion(suggestionResult);
    });
  };

  const onSubmitHandler=(e)=>{
e.preventDefault();
navigate({
  pathname:"search",
  search:`${
    createSearchParams({
      category: `${category}`,
      searchTerm:`${searchTerm}`
    })
  }`
})
setCategory('All')
setSearchTerm('')
}
  useEffect(() => {
    getSuggestion();
  }, []);
  return (
    <div className="flex grow relative items-center">
      <div className="w-[100%]">
        <div className="flex items-center h-10 bg-amazonclone-yellow rounded">
          <select
            className="p-2 bg-gray-200 text-black border text-xs xl:text-sm"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="">All</option>
            <option value="">Alexa Skills</option>
            <option value="">Amazon Devices</option>
            <option value="">Amazon Fashion</option>
            <option value="">Amazon Fresh</option>
            <option value="">Amazon Pharmacy</option>
          </select>
          <input
            className="flex grow items-center h-[100%] rounded-l text-black "
            type="text"
            value={searchTerm}
            onChange={e=>{setSearchTerm(e.target.value)}}
          />
          <button className="w-[45px]" onClick={onSubmitHandler}>
            <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-950" />
          </button>
        </div>
        {suggestion && 
        <div className="bg-white text-black w-full z-40 absolute">
          {suggestion.filter((suggestion)=>{
            const currentSearchTerm=searchTerm.toLowerCase();
            const title=suggestion.title.toLowerCase();
            return(
              currentSearchTerm && title.startsWith(currentSearchTerm) 
            )

          }).slice(0,10)
          .map((suggestion)=>{ 
            
            return <div key={suggestion.id} onClick={()=>setSearchTerm(suggestion.title)}>
              {suggestion.title}
            </div>
          })
          }
        </div>
        }
      </div>
    </div>
  );
};

export default Search;
