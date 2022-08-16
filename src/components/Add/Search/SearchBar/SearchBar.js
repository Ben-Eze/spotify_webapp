import React, { useState } from 'react';
import Form from './Form/Form';
import SearchButtons from "./SearchButtons/SearchButtons"

const SearchBar = ({setResults}) => {
    let [searchType, setSearchType] = useState("album");
    return (
        <div>
            <SearchButtons setSearchType={setSearchType} />
            <Form setResults={setResults} searchType={searchType}/>
        </div>
    )
};

export default SearchBar;