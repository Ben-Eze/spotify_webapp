import React from 'react';


const clickClear = ({setAlbums, setCollections, setTracks}) => {
    setAlbums({});
    setCollections({});
    setTracks({});
}

const clickContinue = (setActivePage) => {
    setActivePage("analytics");
}


const PreviewButtons = ({gettersNsetters, setActivePage}) => {
    return (
        <div>
            <button 
                onClick={() => clickClear(gettersNsetters)} 
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