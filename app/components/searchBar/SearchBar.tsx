'use client'
import React, { useState } from 'react';

export interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchQuery}
        onChange={handleInputChange}
      />

      <style jsx>{`
        .search-bar {
          display: flex;
        
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
