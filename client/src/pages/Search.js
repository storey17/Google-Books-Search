import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import Results from '../components/Results';

export default function Search() {
    // Setting our component's initial state
    const [searchTerm, setSearchTerm] = useState("");
    const [booksResultsArray, setBooksResultsArray] = useState([])

    return (
        <div>
            <SearchBox
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setBooksResultsArray={setBooksResultsArray}
            />

            <Results
                booksResultsArray={booksResultsArray}
            />
        </div>
    )

}