import React from 'react';


const clickBack = (setActivePage) => {
    setActivePage("add");
}


const BackButton = ({setActivePage}) => {

    return (
        <button
            onClick={() => clickBack(setActivePage)}    
        >
            back
        </button>
    )
};

export default BackButton;