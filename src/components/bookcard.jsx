// write the book component code here
import React from 'react'

function BookCard({ book }) {
    return(
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={book.image} alt={book.image} style={{maxWidth: '100%', height: 'auto', marginBottom: '10px'}} />
        <h3>{book.name}</h3>
        <p>Genre: {book.genre}</p>
        <p>Author: {book.author}</p>
        </div>
    )
}

export default BookCard;
