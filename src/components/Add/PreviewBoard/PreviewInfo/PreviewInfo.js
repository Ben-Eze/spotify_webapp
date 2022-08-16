import React, {useContext} from 'react';
import Context from '../../../../Context';
import "./PreviewInfo.css";


const PreviewInfo = () => {
    let {tracks, albums} = useContext(Context);
    let nAlbums = Object.keys(albums).length;
    let nTracks = Object.keys(tracks).length;
    const addMoreMessage = (nAlbums < 5) ? `Add songs from at least ${5 - nAlbums} more albums to continue` : "";

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