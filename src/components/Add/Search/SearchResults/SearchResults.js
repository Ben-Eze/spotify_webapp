import React, {useContext} from 'react';
import Context from '../../../../Context';
import ImageInput from './ImageInput';
import "./SearchResults.css";
import clickResult from './clickResult/clickResult';


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