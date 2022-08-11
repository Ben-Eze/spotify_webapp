import React, {useState} from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults/SearchResults';

const Search = ({gettersNsetters, token}) => {
    let [results, setResults] = useState([]);
    // console.log(results);
    return (
        <div>
            <SearchBar setResults={setResults} token={token}/>
            <SearchResults results={results} gettersNsetters={gettersNsetters} token={token}/>
        </div>
    )
}

export default Search;