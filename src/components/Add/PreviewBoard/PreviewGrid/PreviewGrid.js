import React from 'react';
import "./PreviewGrid.css";


const PreviewGrid = ({collections}) => {
    return (
        <div className='preview-grid'>
            {Object.values(collections).map((c, i) => (
                <img 
                    src={c.images[0].url} 
                    key={i} 
                    alt={`collection ${i}`}
                />             
            ))}
        </div>
    )
}

export default PreviewGrid;