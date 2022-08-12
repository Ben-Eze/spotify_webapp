import React from 'react';
import getTopAlbums from './getTopAlbums';
import "./TitleImage.css"


const TitleImage = ({tracks, albums}) => {
    let topAlbums = getTopAlbums(tracks, albums);
    // console.log(topAlbums[0].images[0].url);
    let urls = topAlbums.map(a => a.images[0].url);
    console.log(urls);
    return (
        <div className='title-image'>
            {urls.map((url, i) => (
                <img 
                    src={url}
                    alt={`title image component ${i}`}
                    key={i}
                />
            ))}
        </div>
    )
}

export default TitleImage;