import React from 'react';
import searchApi from '../api/search/searchApi';


const Form = ({setResults, searchType, token}) => {
    let albumInput = React.createRef();
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        let entry = albumInput.current.value;
        // const retVal = await searchApi(entry, searchType, token)
        // console.log(retVal);
        setResults(await searchApi(entry, searchType, token));
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