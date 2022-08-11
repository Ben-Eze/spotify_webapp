import React from 'react';


const SearchResults = ({results}) => (
    <div class="scrollmenu">
        {results.map((r, i) => (
            <img 
                src={r.images[0].url} 
                alt={`search result ${i}`}
                key={i}
            />
        ))}
    </div>
);

export default SearchResults;