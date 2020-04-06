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
            <h3 py-6 >Find Your Saved Books Below</h3>
            <Results booksResultsArray={booksResultsArray} 
            isSaved = {true}
            />
        </div>
    )
};