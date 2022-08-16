import React, {useContext} from 'react';
import Context from '../../../../Context';
import "./PreviewGrid.css";


const PreviewGrid = () => {
    let {collections} = useContext(Context);
    return (
        <div className='preview-grid'>
            {Object.values(collections).map((c, i) => (
                <img 
                    src={c.images[0].url} 
                    key={i} 
                    alt={`collection ${i}`}
                    draggable="false"
                />             
            ))}
        </div>
    )
}

export default PreviewGrid;