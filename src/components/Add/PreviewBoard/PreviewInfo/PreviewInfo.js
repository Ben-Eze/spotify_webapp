import React from 'react';
import "./PreviewInfo.css";


const PreviewInfo = ({tracks, albums}) => {
    let nAlbums = Object.keys(albums).length;
    let nTracks = Object.keys(tracks).length;
    const addMoreMessage = (nTracks < 5) ? `Add songs from at least ${5 - nTracks} more albums to continue` : "";

    return (
        <div>
            <p>
                Currently {nTracks} tracks across {nAlbums} albums
            </p>

            <p className='add-more-message'>
                {addMoreMessage} 
            </p>
        </div>
    );
}

export default PreviewInfo;