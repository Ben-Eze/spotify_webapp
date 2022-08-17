import React, {useContext} from 'react';
import Context from '../../../../Context';
import "./PreviewGrid.css";


const getImgURL = (result) => {
    let images = (result.type === "track") ? result.album.images : result.images;
    if (images.length) {
        return images[0].url;
    }
    return null
}


const PreviewGrid = () => {
    let {collections} = useContext(Context);
    return (
        <div className='preview-grid'>
            {Object.values(collections).map((c, i) => (
                <img 
                    src={getImgURL(c)} 
                    key={i} 
                    alt={`collection ${i}`}
                    draggable="false"
                />             
            ))}
        </div>
    )
}

export default PreviewGrid;