import React from 'react';
import ImageInput from '../ImageInput';
import "./SearchResults.css";
import clickAlbum from './clickAlbum';
import clickPlaylist from './clickPlaylist';
import clickTrack from './clickTrack';


const clickResult = (result, gettersNsetters, token) => {
    switch (result.type) {
        case "album":
            clickAlbum(result, gettersNsetters, token);
            break;
        case "playlist":
            clickPlaylist(result, gettersNsetters, token);
            break;
        case "track":
            clickTrack(result, gettersNsetters);
            break;
        default:
            throw new Error(`result.type '${result.type}' not recognised`);
    }
    console.log(gettersNsetters.collections);
};


const getImgURL = (result) => {
    if (result.type === "track") {
        return result.album.images[0].url;
    }
    return result.images[0].url;
}

const SearchResults = ({results, gettersNsetters, token}) => {
    return (
        <div className="scroll-menu">
            {results.map((r, i) => (
                <ImageInput 
                    url={getImgURL(r)}
                    onClick={() => clickResult(r, gettersNsetters, token)}
                    key={i}
                />
            ))}
        </div>
    );
};

export default SearchResults;