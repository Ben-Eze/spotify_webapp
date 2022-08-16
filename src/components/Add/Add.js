import React, {useContext} from 'react';
import Context from '../../Context';
import Search from './Search/Search';
import PreviewBoard from './PreviewBoard/PreviewBoard';


const Add = () => {
    let {activePage} = useContext(Context);
    let displayStyle = (activePage === "add") ? "block" : "none";
    
    return (
        <div style={{display: displayStyle}}>
            <Search/>
            <PreviewBoard/>
        </div>
    )
};

export default Add;