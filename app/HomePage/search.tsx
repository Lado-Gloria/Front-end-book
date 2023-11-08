import React, { useState } from 'react';
import BookCard from '../components/BookCard/BookCard';
import SearchBar from '../components/searchBar/SearchBar';

interface Book {
  title: string;
  author: string;
  publicationYear: number;
  isbn: string;
  description: string;
  image: string;
}

const Search: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Book[]>([]);

  const handleSearch = (query: string) => {
    // Implement logic to fetch search results from the API
    // For example:
    fetch(`/api/search?query=${query}`)
      .then((response) => response.json())
      .then((data: Book[]) => setSearchResults(data))
      .catch((error) => console.error('Error fetching search results:', error));
  };

  return (
    <div className="container">
      <h1>Search Books</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="search-results">
        {searchResults.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Search;
