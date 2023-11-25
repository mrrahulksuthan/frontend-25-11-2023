import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
        const data = await response.json();
        setBookDetails(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  return (
    <div style={{ textAlign: 'center', margin: 'auto', maxWidth: '600px' }}>
      <h2>Book Detail</h2>
      {bookDetails ? (
        <div>
          <img
            src={bookDetails.volumeInfo.imageLinks.thumbnail}
            alt={bookDetails.volumeInfo.title}
            style={{ width: '100px', height: '150px' }}
          />
          <h3>{bookDetails.volumeInfo.title}</h3>
          <p>{bookDetails.volumeInfo.description}</p>
          <p>Author: {bookDetails.volumeInfo.authors ? bookDetails.volumeInfo.authors.join(', ') : 'N/A'}</p>
          <p>Published Date: {bookDetails.volumeInfo.publishedDate || 'N/A'}</p>
          <p>Page Count: {bookDetails.volumeInfo.pageCount || 'N/A'}</p>
          <p>Categories: {bookDetails.volumeInfo.categories ? bookDetails.volumeInfo.categories.join(', ') : 'N/A'}</p>
          <p>Language: {bookDetails.volumeInfo.language || 'N/A'}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookDetail;
