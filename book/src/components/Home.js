import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBell, FaHeart } from 'react-icons/fa';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter');
        const data1 = await response1.json();
        const response2 = await fetch('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes');
        const data2 = await response2.json();
        const combinedData = [...data1.items, ...data2.items];
        setBooks(combinedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.volumeInfo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
            background-color: black;
            color: white;
            height: 100%;
          }

          .header-container {
            padding: 20px;
          }

          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .search-container {
            display: flex;
            align-items: center;
            margin-top: 5px;
          }

          .search-input {
            padding: 10px;
            margin-right: 20px;
            height: 2px;
          }

          .search-button {
            height: 25px;
            background-color: #f44336;
            color: white;
          }
        `}
      </style>

      <div className="header-container">
        <div className="header">
          <h1>Virtual Bookstore</h1>
          <div>
            <FaUser style={{ fontSize: '24px', marginRight: '10px', cursor: 'pointer' }} />
            <FaBell style={{ fontSize: '24px', marginRight: '10px', cursor: 'pointer' }} />
            <FaHeart style={{ fontSize: '24px', cursor: 'pointer' }} />
          </div>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search books..."
            className="search-input"
            onChange={handleSearchChange}
          />
          <button className="search-button">Search</button>
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {filteredBooks.map((book) => (
            <Link
              to={`/book/${book.id}`}
              key={book.id}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <div
                style={{
                  padding: '10px',
                  marginBottom: '20px',
                  textAlign: 'center',
                }}
              >
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                  style={{ width: '100px', height: '150px' }}
                />
                <p>{book.volumeInfo.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;