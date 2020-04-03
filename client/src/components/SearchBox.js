import React from 'react';
import axios from 'axios';


export default function SearchBox(props) {
    
    const handleFormSubmit = () => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+props.searchTerm)
        .then(res => {
            props.setBooksResultsArray(res.data.items);
            console.log(res.data.items);
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    return (
        <div>
        
        <input 
        value={props.searchTerm}
        onChange={(e)=>props.setSearchTerm(e.target.value)}
        />
        <button
        onClick={handleFormSubmit}
        >Submit</button>
        
        </div>

    )
}