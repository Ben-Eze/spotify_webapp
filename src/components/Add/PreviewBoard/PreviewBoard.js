import React from 'react';
import PreviewButtons from './PreviewButtons/PreviewButtons';
import PreviewGrid from './PreviewGrid/PreviewGrid';
import PreviewInfo from './PreviewInfo/PreviewInfo';

const PreviewBoard = ({setActivePage, gettersNsetters}) => {
    return (
        <div>
            <PreviewInfo 
                albums={gettersNsetters.albums} 
                tracks={gettersNsetters.tracks}
            />

            <PreviewGrid 
                collections={gettersNsetters.collections}
            />

            <PreviewButtons 
                gettersNsetters={gettersNsetters}
                setActivePage={setActivePage}
            />
        </div>
    );
}

export default PreviewBoard;