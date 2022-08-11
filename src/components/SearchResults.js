import React from 'react';
import ImageInput from './ImageInput';
import "./SearchResults.css"

const clickResult = (result) => {
    console.log(result);
};


const getImgURL = (result) => {
    if (result.type === "track") {
        return result.album.images[0].url;
    }
    return result.images[0].url;
}

const SearchResults = ({results}) => {
    return (
        <div className="scroll-menu">
            {results.map((r, i) => (
                <ImageInput 
                    url={getImgURL(r)}
                    onClick={() => clickResult(r)}
                    key={i}
                />
            ))}
        </div>
    );
};

export default SearchResults;