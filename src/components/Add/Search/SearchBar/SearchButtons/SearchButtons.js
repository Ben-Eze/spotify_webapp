import React from 'react';


const SearchButtons = ({setSearchType}) => {
    return (
        ["album", "playlist", "track", "url"].map(
            (x, i) => (
                <button 
                    onClick={() => {setSearchType(x)}}
                    key={i}
                >
                        {x}
                </button>
            ))
    )
};

export default SearchButtons;