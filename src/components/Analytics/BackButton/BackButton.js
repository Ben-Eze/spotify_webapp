import React, {useContext} from 'react';
import Context from '../../../Context';


const clickBack = (setActivePage) => {
    setActivePage("add");
}


const BackButton = () => {
    let {setActivePage} = useContext(Context);

    return (
        <button onClick={() => clickBack(setActivePage)}>
            back
        </button>
    )
};

export default BackButton;