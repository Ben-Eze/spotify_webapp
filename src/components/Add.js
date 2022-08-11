import React, {useState} from 'react';
import Search from './Search';


const Add = ({globalGettersNsetters, token}) => {
    let [collections, setCollections] = useState({});

    // console.log("boop", {
    //     ...globalGettersNsetters, 
    //     collections, 
    //     setCollections
    // });

    // console.log(globalGettersNsetters, token);

    return (
        <Search 
            gettersNsetters={{
                ...globalGettersNsetters, 
                collections, 
                setCollections
            }} 
            token={token}
        />
    )
};

export default Add;