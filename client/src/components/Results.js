import React from 'react';
import axios from 'axios';

export default function Results(props) {


   function handleFormSubmit(book) {
        let updatedBook = {
            title: book.volumeInfo.title,
            author:book.volumeInfo.authors[0],
            description: book.volumeInfo.description,
            link: book.volumeInfo.previewLink,
            image: book.volumeInfo.imageLinks.thumbnail
        }
        axios.post('/api/books', updatedBook)
        .then(data => {
            console.log(data)
        });
    }

    return (
        <div>
            {props.booksResultsArray.map(book => (
                <div className="card" style={{width: "18rem"}}>
                    {/* <img class="card-img-top" src={book.volumeInfo.imageLinks.thumbnail} alt="book image"></img> */}
                    <div className="card-body">
                        <h5 className="card-title">{book.volumeInfo.title} by {book.volumeInfo.authors[0]}</h5>
                        <p className="card-text">{book.volumeInfo.description}</p>
                        <a target="_blank" href={book.volumeInfo.previewLink} className="btn btn-primary">View</a>
                        <a onClick={() => handleFormSubmit(book)} href="#" className="btn btn-primary">Save</a>
                    </div>
                </div>

            ))}
        </div>
    )

}