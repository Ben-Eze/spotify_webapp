import React, {useState} from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const Search = ({token}) => {
    let [results, setResults] = useState([]);
    console.log(results);
    return (
        <div>
            <SearchBar setResults={setResults} token={token}/>
            <SearchResults results={results}/>
        </div>
    )
}

export default Search;