import React, {useState} from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';

const Search = ({gettersNsetters, token}) => {
    let [results, setResults] = useState([]);
    return (
        <div>
            <SearchBar setResults={setResults} token={token}/>
            <SearchResults results={results} gettersNsetters={gettersNsetters} token={token}/>
        </div>
    )
}

export default Search;