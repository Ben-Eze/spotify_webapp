import React, { useState } from 'react';
import Form from './Form/Form';
import SearchButtons from "./SearchButtons/SearchButtons"

const SearchBar = ({setResults}) => {
    let [searchType, setSearchType] = useState("album");
    const colourObj = {
        "album": "#ffa7a7",
        "playlist": "#a7beff",
        "track": "#76c593",
        "url": "#a891d1",
    };

    return (
        <div>
            <SearchButtons setSearchType={setSearchType} colourObj={colourObj} />
            <Form setResults={setResults} searchType={searchType} colourObj={colourObj}/>
        </div>
    )
};

export default SearchBar;