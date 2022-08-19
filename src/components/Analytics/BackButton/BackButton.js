import React, {useContext} from 'react';
import Context from '../../../Context';
import "./BackButton.css"


const clickBack = (setActivePage) => {
    setActivePage("add");
}


const BackButton = () => {
    let {setActivePage} = useContext(Context);

    return (
        <button 
            className='back-button'
            onClick={() => clickBack(setActivePage)}
        >
            back
        </button>
    )
};

export default BackButton;