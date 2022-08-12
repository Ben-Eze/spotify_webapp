import React from 'react';


const PreviewInfo = ({tracks, albums}) => {
    let nAlbums = Object.keys(albums).length;
    let nTracks = Object.keys(tracks).length;
    return (
        <div>
            <p>
                Currently {nTracks} tracks across {nAlbums} albums
            </p>

            <p>
                
            </p>
        </div>
    );
}

export default PreviewInfo;