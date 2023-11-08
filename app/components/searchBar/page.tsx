'use client'
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar  ">
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchQuery}
        onChange={handleInputChange}
      />

<style jsx>{`
        .search-bar {
          display: flex;
          border: 1px solid #000
          align-items: center;
          justify-content: center;
  
        
        }

        .search-bar input {
          padding: 8px;
          margin-right: 25px;
        }
      `}</style>
    </div>
  );
};

export default SearchBar;
