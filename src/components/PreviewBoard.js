import React from 'react';
import PreviewButtons from './PreviewButtons';
import PreviewGrid from './PreviewGrid';
import PreviewInfo from './PreviewInfo';

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