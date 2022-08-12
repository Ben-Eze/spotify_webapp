import React, {useState} from 'react';
import Search from './Search/Search';
import PreviewBoard from './PreviewBoard/PreviewBoard';


const Add = ({activePage, setActivePage, globalGettersNsetters, token}) => {
    let [collections, setCollections] = useState({});
    
    let gettersNsetters = {
        ...globalGettersNsetters, 
        collections, 
        setCollections
    }

    let displayStyle = (activePage === "add") ? "block" : "none";
    
    return (
        <div style={{display: displayStyle}}>
            <Search 
                gettersNsetters={gettersNsetters} 
                token={token}
            />
            <PreviewBoard 
                gettersNsetters={gettersNsetters}
                setActivePage={setActivePage}
            />
        </div>
    )
};

export default Add;