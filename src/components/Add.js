import React, {useState} from 'react';
import Search from './Search';
import PreviewBoard from './PreviewBoard';


const Add = ({globalGettersNsetters, token}) => {
    let [collections, setCollections] = useState({});

    return (
        <div>
            <Search 
                gettersNsetters={{
                    ...globalGettersNsetters, 
                    collections, 
                    setCollections
                }} 
                token={token}
            />,
            <PreviewBoard />
        </div>
    )
};

export default Add;