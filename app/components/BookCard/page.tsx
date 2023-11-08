import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css'; // Import your CSS module if styles are defined in a separate file

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

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className={styles.card}>
      {book.image && (
        <Image src={book.image} alt={book.title} width={300} height={200} />
      )}
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Publication Year: {book.publicationYear}</p>
      <div className={styles.tooltip}>{book.description}</div>
    </div>
  );
};

export default BookCard;
