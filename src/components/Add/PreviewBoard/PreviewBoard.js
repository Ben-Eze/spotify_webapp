import React from 'react';
import PreviewButtons from './PreviewButtons/PreviewButtons';
import PreviewGrid from './PreviewGrid/PreviewGrid';
import PreviewInfo from './PreviewInfo/PreviewInfo';

const PreviewBoard = () => {
    return (
        <div>
            <PreviewInfo/>
            <PreviewGrid/>
            <PreviewButtons/>
        </div>
    );
}

export default PreviewBoard;