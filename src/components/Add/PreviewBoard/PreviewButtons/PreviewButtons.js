import React from 'react';


const clear = ({setAlbums, setCollections, setTracks}) => {
    setAlbums({});
    setCollections({});
    setTracks({});
}


const PreviewButtons = ({gettersNsetters}) => {
    return (
        <div>
            <button 
                onClick={() => clear(gettersNsetters)} 
                key="clear"
            >
                clear
            </button>

            <button 
                key="continue"
            >
                continue
            </button>
        </div>
    )
};

export default PreviewButtons;