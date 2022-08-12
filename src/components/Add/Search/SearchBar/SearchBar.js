import React, { useState } from 'react';
import Form from './Form/Form';
import SearchButtons from "./SearchButtons/SearchButtons"

const SearchBar = ({setResults, token}) => {
    let [searchType, setSearchType] = useState("album");
    return (
        <div>
            <SearchButtons setSearchType={setSearchType} />
            <Form setResults={setResults} searchType={searchType} token={token}/>
        </div>
    )
};

export default SearchBar;