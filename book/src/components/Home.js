import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoPersonOutline, IoNotificationsOutline, IoHeartOutline,IoRocketOutline } from 'react-icons/io5'; 

const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const randomLogoUrl = 'data:image/png;base64,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'; // Replace with the actual URL of your random logo

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
            background-color: brown; 
            color: white;
            height: 100%;
          }

          .header-container {
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center; /* Center items horizontally in the container */
            text-align: center; /* Center text within its container */
          }

          .header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%; /* Make sure it takes the full width */
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
            background-color: black;
            color: white;
          }

          .logo {
            width: 100px; /* Adjust the width of the logo as needed */
            height: 100px; /* Adjust the height of the logo as needed */
            margin-bottom: 10px; /* Add margin to separate the logo from the heading */
          }
        `}
      </style>

      <div className="header-container">
        <div className="header">
          <img src={randomLogoUrl} alt="Keazon Books Logo" className="logo" />
          <h1>Keazon Books</h1>
          <div>
            <IoPersonOutline style={{ fontSize: '24px', marginRight: '10px', cursor: 'pointer' }} />
            <IoNotificationsOutline style={{ fontSize: '24px', marginRight: '10px', cursor: 'pointer' }} />
            <IoHeartOutline style={{ fontSize: '24px', cursor: 'pointer' }} />
            <IoRocketOutline style={{ fontSize: '24px', marginRight: '1px', paddingLeft:'2px', cursor: 'pointer' }} />
          </div>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search articles.."
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
