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
    let {setAlbums, setCollections, setTracks, setActivePage} = useContext(Context)
    return (
        <div>
            <button 
                onClick={() => clickClear(setAlbums, setCollections, setTracks)} 
                key="clear"
            >clear</button>

            <button 
                key="continue"
                onClick={() => clickContinue(setActivePage)}
            >continue</button>
        </div>
    )
};

export default PreviewButtons;