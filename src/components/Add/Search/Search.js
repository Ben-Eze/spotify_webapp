import React, {useState} from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';

const Search = () => {
    let [results, setResults] = useState([]);
    return (
        <div>
            <SearchBar setResults={setResults} />
            <SearchResults results={results} />
        </div>
    )
}

export default Search;