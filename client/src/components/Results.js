import React from 'react';

export default function Results(props) {


    return (
        <div>
            {props.booksResultsArray.map(book => (
                <div className="card" style={{width: "18rem"}}>
                    {/* <img class="card-img-top" src={book.volumeInfo.imageLinks.thumbnail} alt="book image"></img> */}
                    <div className="card-body">
                        <h5 className="card-title">{book.volumeInfo.title} by {book.volumeInfo.authors[0]}</h5>
                        <p className="card-text">{book.volumeInfo.description}</p>
                        <a target="_blank" href={book.volumeInfo.previewLink} className="btn btn-primary">View</a>
                        <a href="#" className="btn btn-primary">Save</a>
                    </div>
                </div>

            ))}
        </div>
    )

}