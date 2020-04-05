import React, { useState, useEffect } from 'react';
import Results from '../components/Results';
import axios from 'axios';


export default function Saved() {

    const [booksResultsArray, setBooksResultsArray] = useState([])

    useEffect(() => {
        axios.get('api/books')
            .then(savedBooks => { 
                console.log(savedBooks.data);
                setBooksResultsArray(savedBooks.data);
            })
    }, []);

    return (
        <div> 
            <Results booksResultsArray={booksResultsArray} 
            isSaved = {true}
            />
        </div>
    )
};