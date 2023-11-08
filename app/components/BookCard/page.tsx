import React from 'react';
import Image from 'next/image';

// ....................Define the Book interface for type checking
interface Book {
  image: string;
  title: string;
  author: string;
  publicationYear: number;
  isbn: string;
  description: string;
 
  
}

interface BookCardProps {
  book: Book;
}
// ....................BookCard component definition
const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="card">
       {book.image && <Image src={book.image} alt={book.title} width={300} height={200} />}
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Publication Year: {book.publicationYear}</p>
      <div className="tooltip">{book.description}</div>
      <style jsx>{`
        .card {
          /* Your card styles here */
          position: relative;
          width: 400px;
          height: 600px;
        margin-bottom: 1em;
        }
        
        .tooltip {
        display: none;
          background: #5f5e5e;
          color: blue;
          text-align: center;
          transition: all 0.3s ease;
        }
        .tooltip {
          /* Tooltip styles */
          position: absolute;
          top: 30%;
          left: 40%;
          transform: translateX(-50%);
          background-color: #fff;
          border: 1px solid #ccc;
          padding: 10px;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          display: none;
        }
        .card:hover .tooltip {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default BookCard;
