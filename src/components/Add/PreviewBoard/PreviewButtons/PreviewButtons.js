import React, {useContext} from 'react';
import Context from '../../../../Context';
import getAudioFeatures from '../../../../api/getAudioFeatures';
import "./PreviewButtons.css"


const clickClear = (setAlbums, setCollections, setTracks) => {
    setAlbums({});
    setCollections({});
    setTracks({});
}

const clickContinue = (setActivePage, tracks, token, setAudioFeatures) => {
    setActivePage("analytics");
    getAudioFeatures(tracks, token, setAudioFeatures);
}

const PreviewButtons = () => {
    let {albums, setAlbums, setCollections, setTracks, setActivePage, tracks, token, setAudioFeatures} = useContext(Context);
    let continueDisplayStyle = (Object.keys(albums).length < 5) ? "none" : "inline";

    return (
        <div>
            <button 
                className='preview-button'
                onClick={() => clickClear(setAlbums, setCollections, setTracks)} 
                key="clear"
            >clear</button>

            <button 
                className='preview-button'
                key="continue"
                onClick={() => clickContinue(setActivePage, tracks, token, setAudioFeatures)}
                style={{display: continueDisplayStyle}}
            >continue</button>
        </div>
    )
};

export default PreviewButtons;