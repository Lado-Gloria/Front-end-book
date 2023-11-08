import React from 'react';
import BookCard, { Book } from './BookCard';

const bookData: Book = {
  image: 'book-image.jpg',
  title: 'Example Book',
  author: 'John Doe',
  publicationYear: 2023,
  isbn: '1234567890',
  description: 'This is an example book description.',
};

const Page: React.FC = () => {
  return (
    <div>
      <BookCard book={bookData} />
    </div>
  );
};

export default Page;
