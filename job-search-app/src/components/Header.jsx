import React from 'react';
import { useState, useEffect } from 'react';

const Header = () => {
    const [searchInput, setSearchInput] = useState(" ");
    const [loading, setLoading] = useState(" ");
    const [data , setData] = useState([]);

    useEffect(() =>{
      const fetchData = async () =>{
        if(searchInput.trim() === '') return;
        try{
          const response = await fetch('')
          const result = await response.json();
          setData(result);
        }catch(error){
          console.error('error fetching data: ', error)
        }
      };

      fetchData();
    }, [searchInput]);

    const handleSearch = (e) =>{
      setSearchInput(e.target.value)
    }


  return (
    <header>
    <div className="content">
        <h1><span>Opportunities</span> Are waiting for you!</h1>
        <p>Briging talent with transformative roles, Find the right job for you in seconds! </p>
      <input type="text" value={searchInput} onChange={handleSearch} placeholder="search for jobs here"/>
      <button type="button">Search</button>
      <button type="button">View all jobs</button>
      </div>
    </header>
  );
}

export default Header;
