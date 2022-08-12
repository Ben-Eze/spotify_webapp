import React from 'react';


const PreviewInfo = ({tracks, albums}) => {
    // console.log(tracks);
    // console.log(Object.keys(tracks));
    let nAlbums = Object.keys(albums).length;
    let nTracks = Object.keys(tracks).length;
    return (
        <p>
            Currently {nTracks} tracks across {nAlbums} albums
        </p>
    );
}

export default PreviewInfo;