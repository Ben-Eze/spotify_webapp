import React, {useContext} from 'react';
import Context from '../../../../Context';
import ImageInput from './ImageInput';
import "./SearchResults.css";
import clickResult from './clickResult/clickResult';
import filterUnavailable from '../filterUnavailable';


const getImgURL = (result) => {
    let images = (result.type === "track") ? result.album.images : result.images;
    return images[0].url;
}

const filterAlbumsNtracks = results => {
    if (!results.length) { return results }
    
    switch(results[0].type){
        case "playlist":
            return results
        case "album":
        case "track":
            return results.filter(a => filterUnavailable(a))
        default:
            throw new Error("");
    }
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

    results = filterAlbumsNtracks(results);
        // let filteredResults = results.filter(f => filterUnavailable(f));
    // if results.
    // console.log(results)
        

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