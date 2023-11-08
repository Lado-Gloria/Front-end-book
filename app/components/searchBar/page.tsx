import React from 'react';
import SearchBar from './SearchBar'; 

const Page: React.FC = () => {
  const handleSearch = (query: string) => {
    
    console.log('Searching for:', query);
   
  };

  return (
    <div>
    
    
      {/* <SearchBar onSearch={handleSearch} /> */}
    </div>
  );
};

export default Page;
