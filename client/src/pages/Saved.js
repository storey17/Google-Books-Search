import React, {useEffect} from 'react';
import Results from '../components/Results';
import axios from 'axios';


export default function Saved() {

useEffect(() => {
    axios.get('api/books')
    .then(savedBooks) () => {
        
    }
});



    return (
        <div> <Results booksResultsArray={booksResultsArray}/>
        </div>
    )
}