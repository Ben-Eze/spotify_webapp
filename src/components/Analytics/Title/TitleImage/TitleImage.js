import React from 'react';
import getTopAlbums from './getTopAlbums';
import "./TitleImage.css"


const TitleImage = ({tracks, albums}) => {
    let topAlbums = getTopAlbums(tracks, albums);
    let urls = topAlbums.map(a => a.images[0].url);

    return (
        <div className='title-image'>
            {urls.map((url, i) => (
                <img 
                    src={url}
                    alt={`title img component ${i}`}
                    key={i}
                    draggable="false"
                />
            ))}
        </div>
    )
}

export default TitleImage;