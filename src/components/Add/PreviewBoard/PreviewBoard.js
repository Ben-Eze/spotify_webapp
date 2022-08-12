import React from 'react';
import PreviewButtons from './PreviewButtons/PreviewButtons';
import PreviewGrid from './PreviewGrid/PreviewGrid';
import PreviewInfo from './PreviewInfo/PreviewInfo';

const PreviewBoard = ({gettersNsetters}) => {
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
            />
        </div>
    );
}

export default PreviewBoard;