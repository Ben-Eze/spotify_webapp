import React, { useState } from 'react';
import Form from './Form';
import SearchButtons from "./SearchButtons"

const SearchBar = ({token}) => {
    let [searchType, setSearchType] = useState("album");
    return (
        <div>
            <SearchButtons setSearchType={setSearchType} />
            <Form searchType={searchType} token={token}/>
        </div>
    )
};

export default SearchBar;