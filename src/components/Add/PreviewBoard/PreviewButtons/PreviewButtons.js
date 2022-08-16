import React, {useContext} from 'react';
import Context from '../../../../Context';


const clickClear = (setAlbums, setCollections, setTracks) => {
    setAlbums({});
    setCollections({});
    setTracks({});
}

const clickContinue = (setActivePage) => {
    setActivePage("analytics");
}

const PreviewButtons = () => {
    let {albums, setAlbums, setCollections, setTracks, setActivePage} = useContext(Context);
    let continueDisplayStyle = (Object.keys(albums).length < 5) ? "none" : "inline";

    return (
        <div>
            <button 
                onClick={() => clickClear(setAlbums, setCollections, setTracks)} 
                key="clear"
            >clear</button>

            <button 
                key="continue"
                onClick={() => clickContinue(setActivePage)}
                style={{display: continueDisplayStyle}}
            >continue</button>
        </div>
    )
};

export default PreviewButtons;