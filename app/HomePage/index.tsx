'use client'
import React, { useState } from 'react';
import BookCard from '../components/BookCard/page';
import SearchBar from '../components/searchBar/page';
import Footer from '../components/Footer/page';


interface Book {
  image: string;
  title: string;
  author: string;
  publicationYear: number;
  isbn: string;
  description: string;
}

const books: Book[] = [
  { 
    image: '/images/one.jpg' ,
    title: 'The Great Gatsby', 
    author: 'Scott',
    publicationYear: 1925, 
    isbn: '262562562526', 
    description: ' A self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.',
  
  },
  { 
    image: '/images/two.jpg' ,
    title: 'The Great Gatsby', 
    author: 'Fitzeralad', 
    publicationYear: 2013, 
    isbn: '262562562527', 
    description: 'A self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.',
    
  },
  { 
    image: '/images/five.jpg' ,
    title: 'Solan', 
    author: 'De Cabras', 
    publicationYear: 2021, 
    isbn: '262562562528', 
    description: 'Solán de Cabras is from a spring in an isolated region.This spring has been recognized over the centuries by royal',
  
  },
  { 
    image: '/images/bookone.jpg' ,
    title: 'Golden Heart', 
    author: 'Peterson',
    publicationYear: 2000, 
    isbn: '262562562526', 
    description: 'A beautiful story of a girl who never knew she had a power to change the world and skills to make things work out',
   
  },
  { 
    image: '/images/three.jpg' ,
    title: 'The Great Gatsby', 
    author: 'Fitzeralad', 
    publicationYear: 2019, 
    isbn: '262562562527', 
    description: 'A self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth',
   
  },
  { 
    image: '/images/six.jpg' ,
    title: 'A Sky Painted', 
    author: 'Laura Wood', 
    publicationYear: 2013, 
    isbn: '262562562528', 
    description: 'How do you paint your story is what make your dream come true, the ability to believe you can do it will push',
    
  },
  { 
    image: '/images/nine.jpg' ,
    title: 'A Teaspoon', 
    author: 'Dina Nayeri',
    publicationYear: 2020, 
    isbn: '262562562526', 
    description: 'A story on how life can be, the wave and the thorn in a life journey that make you stronger and powerful',
   
  },
  { 
    image: '/images/eight.jpg',
    title: 'The Cruclble', 
    author: 'Arthur Miller', 
    publicationYear: 1996, 
    isbn: '262562562527', 
    description: 'It is a dramatized and partially fictionalized story of the Salem witch trials that took place in the Massachusetts Bay Colony',
  
  },
  { 
    image: '/images/four.jpg' ,
    title: 'The Great Gatsby', 
    author: 'John Grisham',
    publicationYear: 2020, 
    isbn: '262562562526', 
    description: 'A self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth',
  
  },
  { 
    image: '/images/bookthree.jpg' ,
    title: 'Stronger', 
    author: 'Titus G', 
    publicationYear: 2019, 
    isbn: '262562562527', 
    description: ' A beautiful story on different experiences in life and how to overcome them, the power to remain stronger in all times',
    
  },
  { 
    image: '/images/ten.jpg' ,
    title: 'Utopia', 
    author: 'Andre Hiotis', 
    publicationYear: 1999, 
    isbn: '262562562528', 
    description: 'A utopia typically describes an imaginary community or society that possesses highly desirable or near-perfect qualities for its members',
  
  },
  { 
    image: '/images/eleven.jpg' ,
    title: 'Inception', 
    author: 'Chistoper Nolan',
    publicationYear: 2010, 
    isbn: '262562562526', 
    description: 'The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets.',
   
  },
  { 
    image: '/images/twelve.jpg' ,
    title: 'Sycamore', 
    author: 'Peter John', 
    publicationYear: 2012, 
    isbn: '262562562527', 
    description: 'A story written by Peter John on a popular large tree for landscaping ough many object to the large leaves, fruit balls and small branches ',
   
  },
  { 
    image: '/images/thirteen.jpg' ,
    title: 'Villain Novel', 
    author: 'Shuichi Yoshida', 
    publicationYear: 2021, 
    isbn: '262562562528', 
    description: ' A villain is the antagonist of your story whose motivations and actions oppose the protagonist and drive the plot of your story',
    
  },
  { 
    image: '/images/forteen.jpg' ,
    title: 'Jo Nesbo', 
    author: 'Paastja',
    publicationYear: 2020, 
    isbn: '262562562526', 
    description: 'The Bat, Cockroaches, The Redbreast, Nemesis, The Devils Star, The Redeemer, The Snowman',
   
  },
  { 
    image: '/images/fifteen.jpg',
    title: 'Dinner with Dissidents', 
    author: 'John Tesarsch', 
    publicationYear: 1982, 
    isbn: '262562562527', 
    description: 'Dinner with the Dissidents is a gripping portrayal of tumultuous times, and a thrilling story of love, courage and deception.',
  
  },
  { 
    image: '/images/sixteen.jpg' ,
    title: 'Spaders', 
    author: 'Tom Hoyl',
    publicationYear: 2020, 
    isbn: '262562562526', 
    description: 'A story on the spader is a mechanically driven tillage machine that is powered by the tractor using a the tractor PTO',
  
  },
  { 
    image: '/images/two.jpg' ,
    title: 'The Great Gatsby', 
    author: 'Scott Fitzgerald', 
    publicationYear: 2019, 
    isbn: '262562562527', 
    description: 'A self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth',
    
  },
  { 
    image: '/images/three.jpg' ,
    title: 'The Great Gatsby', 
    author: 'Scott Fitzgerald', 
    publicationYear: 2021, 
    isbn: '262562562528', 
    description: 'A self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth',
  
  },
  { 
    image: '/images/two.jpg' ,
    title: 'The Great Gatsby', 
    author: 'Fitzeralad', 
    publicationYear: 2013, 
    isbn: '262562562527', 
    description: 'A self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.',
    
  },
  { 
    image: '/images/five.jpg' ,
    title: 'Solan', 
    author: 'De Cabras', 
    publicationYear: 2021, 
    isbn: '262562562528', 
    description: 'Solán de Cabras is from a spring in an isolated region.This spring has been recognized over the centuries by royal',
  
  },
  { 
    image: '/images/six.jpg' ,
    title: 'A Sky Painted', 
    author: 'Laura Wood', 
    publicationYear: 2013, 
    isbn: '262562562528', 
    description: 'How do you paint your story is what make your dream come true, the ability to believe you can do it will push',
    
  },
  { 
    image: '/images/nine.jpg' ,
    title: 'A Teaspoon', 
    author: 'Dina Nayeri',
    publicationYear: 2020, 
    isbn: '262562562526', 
    description: 'A story on how life can be, the wave and the thorn in a life journey that make you stronger and powerful',
   
  },
  { 
    image: '/images/fifteen.jpg',
    title: 'Dinner with Dissidents', 
    author: 'John Tesarsch', 
    publicationYear: 1982, 
    isbn: '262562562527', 
    description: 'Dinner with the Dissidents is a gripping portrayal of tumultuous times, and a thrilling story of love, courage and deception.',
  
  },
 
  { 
    image: '/images/sixteen.jpg' ,
    title: 'Spaders', 
    author: 'Tom Hoyl',
    publicationYear: 2020, 
    isbn: '262562562526', 
    description: 'A story on the spader is a mechanically driven tillage machine that is powered by the tractor using a the tractor PTO',
  
  },
  { 
    image: '/images/thirteen.jpg' ,
    title: 'Villain Novel', 
    author: 'Shuichi Yoshida', 
    publicationYear: 2021, 
    isbn: '262562562528', 
    description: ' A villain is the antagonist of your story whose motivations and actions oppose the protagonist and drive the plot of your story',
    
  },
  { 
    image: '/images/fifteen.jpg',
    title: 'Dinner with Dissidents', 
    author: 'John Tesarsch', 
    publicationYear: 1982, 
    isbn: '262562562527', 
    description: 'Dinner with the Dissidents is a gripping portrayal of tumultuous times, and a thrilling story of love, courage and deception.',
  
  },
  { 
    image: '/images/three.jpg' ,
    title: 'The Great Gatsby', 
    author: 'Scott Fitzgerald', 
    publicationYear: 2021, 
    isbn: '262562562528', 
    description: 'A self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth',
  
  },
  { 
    image: '/images/five.jpg' ,
    title: 'Solan', 
    author: 'De Cabras', 
    publicationYear: 2021, 
    isbn: '262562562528', 
    description: 'Solán de Cabras is from a spring in an isolated region.This spring has been recognized over the centuries by royal',
  
  },
  { 
    image: '/images/forteen.jpg' ,
    title: 'Jo Nesbo', 
    author: 'Paastja',
    publicationYear: 2020, 
    isbn: '262562562526', 
    description: 'The Bat, Cockroaches, The Redbreast, Nemesis, The Devils Star, The Redeemer, The Snowman',
   
  },
  { 
    image: '/images/two.jpg' ,
    title: 'The Great Gatsby', 
    author: 'Scott Fitzgerald', 
    publicationYear: 2019, 
    isbn: '262562562527', 
    description: 'A self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth',
    
  },
  { 
    image: '/images/twelve.jpg' ,
    title: 'Sycamore', 
    author: 'Peter John', 
    publicationYear: 2012, 
    isbn: '262562562527', 
    description: 'A story written by Peter John on a popular large tree for landscaping ough many object to the large leaves, fruit balls and small branches ',
   
  },
 
];

const ITEMS_PER_PAGE = 8;

const PaginatedHomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalItems = filteredBooks.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentBooks = filteredBooks.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);

  };


  return (
    <div className="container mx-auto p-4 bg-gray ">
      <h1 className="text-5xl font-bold mb-7 ">Book Management App</h1>
      <SearchBar onSearch={(query: string) => setSearchQuery(query)} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {currentBooks.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <Footer />
      <style jsx>{`
        .flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .pagination {
          margin-top: 20px;
          display: flex;
          justify-content: center;
        }
        .pagination-button {
          margin: 0 5px;
          padding: 5px 10px;
          cursor: pointer;
        }
        .pagination-button.active {
          background-color: #007bff;
          color: #fff;
        }
      `}</style>

<hr className="my-6 bg-blue text-blue" />
    </div>
  );
};

export default PaginatedHomePage;
