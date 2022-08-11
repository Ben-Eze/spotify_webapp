import React from 'react';
import apiSearch from '../api/apiSearch';


const Form = ({searchType, token}) => {
    let albumInput = React.createRef();
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        let entry = albumInput.current.value;
        console.log(entry);
        const retVal = await apiSearch(entry, searchType, token)
        console.log(retVal);

    };

    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder={searchType}
                ref={albumInput}
                required
            />
            <button>
                search
            </button>
        </form>
    );
}


export default Form;