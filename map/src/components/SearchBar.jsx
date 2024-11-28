import React from 'react'
import { FaSearchLocation } from "react-icons/fa";
import { useState } from 'react';
function SearchBar () {
   const [searchTerm, setSearchTerm] = useState('');
   const [filteredResults, setFilteredResults] = useState([]);
     const suggestions = [
        'Restroom',
        'Library',
        'TanHall',
         'Comlab',
         'EN 301'
     ];

  const handleSearch =(event) => {
      const value = event.target.value;
      setSearchTerm(value);
        // Filter the suggestions based on the search term
    if (value) {
          setFilteredResults(
            suggestions.filter((item)=>
             item.toLowerCase().includes(value.toLowerCase())
        )
          );
      } else {
        setFilteredResults([]);
      }
  }
  return (
       <div className='flex flex-col gap-1 ml-10 mt-3 fixed'>
           <div className='w-[300px] bg-white rounded-xl border border-black py-2 px-3 flex items-center gap-1'>
                <input onMouseEnter={()=>setIsHovered(true)}
                       onMouseLeave={()=>setIsHovered(false)}
                       onChange={handleSearch}
                       value={searchTerm}
                className='border-none outline-none w-[300px]'  type="search" name="" id="" placeholder='Search rooms/places' />
              <h1 className='text-xl'><FaSearchLocation/></h1> 
           </div>
           <div className = {`w-[300px] h-[400px] bg-white flex flex-col pl-3 gap-4 ${filteredResults.length  > 0 ? 'block' : 'hidden'}`}>
               {filteredResults.map((result, index) =>(
                  <p key={index} className='border-b-2 border-black'>{result}</p>
               ))};
           </div>
       </div>
  )
}

export default SearchBar