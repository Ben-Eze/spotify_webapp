import React, {useState} from 'react';
import Search from './Search';
import PreviewBoard from './PreviewBoard';


const Add = ({globalGettersNsetters, token}) => {
    let [collections, setCollections] = useState({});
    
    let gettersNsetters = {
        ...globalGettersNsetters, 
        collections, 
        setCollections
    }

    return (
        <div>
            <Search 
                gettersNsetters={gettersNsetters} 
                token={token}
            />,
            <PreviewBoard 
                gettersNsetters={gettersNsetters} 
            />
        </div>
    )
};

export default Add;