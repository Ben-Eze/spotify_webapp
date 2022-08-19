import React, {useContext} from 'react';
import Context from '../../../../../Context';
import searchApi from '../../../../../api/search/searchApi';
import "./Form.css";


const Form = ({setResults, searchType, colourObj}) => {
    let {token} = useContext(Context);
    let albumInput = React.createRef();
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        let entry = albumInput.current.value;
        setResults(await searchApi(entry, searchType, token));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder={searchType}
                ref={albumInput}
                required
                style={{backgroundColor: colourObj[searchType]}}
            />
            <button 
                className="search-button"
                style={{
                    // backgroundColor: colourObj[searchType],
                    // backgroundImage: 'url("../../../../../../assets/search_icon.tiff")'
                }}
            >
                search
            </button>
        </form>
    );
}


export default Form;