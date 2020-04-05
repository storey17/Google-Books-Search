import React from 'react';
import axios from 'axios';

export default function Results(props) {


   function handleFormSubmit(book) {
        let updatedBook = {
            title: book.title,
            author:book.author,
            description: book.description,
            link: book.link,
            image: book.image
        }
        axios.post('/api/books', updatedBook)
        .then(data => {
            console.log(data)
        });
    }

    function handleDelete(_id) {
        axios.put('/api/books/'+_id)
        .then(data => {
            console.log(data)
            window.location.reload()
        });
    }

    return (
        <div>
            {props.booksResultsArray.map(book => (
                <div key={book.title} className="card" style={{width: "18rem"}}>
                    {/* <img class="card-img-top" src={book.image} alt="book image"></img> */}
                    <div className="card-body">
                        <h5 className="card-title">{book.title} by {book.author}</h5>
                        <p className="card-text">{book.description}</p>
                        <a target="_blank" href={book.link} className="btn btn-primary">View</a>
                        {props.isSaved ? <a onClick={() => handleDelete(book._id)} href="#" className="btn btn-primary">Delete</a> : <a onClick={() => handleFormSubmit(book)} href="#" className="btn btn-primary">Save</a> }
                    </div>
                </div>

            ))}
        </div>
    )

}