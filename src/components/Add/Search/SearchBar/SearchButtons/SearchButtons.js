import React from 'react';
import "./SearchButtons.css"


const SearchButtons = ({setSearchType, colourObj}) => {
    return (
        ["album", "playlist", "track", "url"].map(
            (searchType, i) => (
                <button 
                    onClick={() => {setSearchType(searchType)}}
                    key={i}
                    className="search-type-button"
                    style={{backgroundColor: colourObj[searchType]}}
                >
                        {searchType}
                </button>
            ))
    )
};

export default SearchButtons;