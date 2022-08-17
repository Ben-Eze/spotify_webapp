import React, {useContext} from 'react';
import Context from '../../../../Context';
import ImageInput from './ImageInput';
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
};


const getImgURL = (result) => {
    let images = (result.type === "track") ? result.album.images : result.images;
    return images[0].url;
}

const SearchResults = ({results}) => {
    let {
        collections, setCollections,
        albums, setAlbums, 
        tracks, setTracks, 
        token
    } = useContext(Context);
    
    let handleClick = (r) => {
        clickResult(
            r, 
            {collections, setCollections,
            albums, setAlbums, 
            tracks, setTracks}, 
            token
        )
    }

    return (
        <div className="scroll-menu">
            {results.map((r, i) => (
                <ImageInput 
                    url={getImgURL(r)}
                    onClick={() => handleClick(r)}
                    key={i}
                />
            ))}
        </div>
    );
};

export default SearchResults;