import React, {useContext} from 'react';
import Context from '../../../../../Context';
import searchApi from '../../../../../api/search/searchApi';


const Form = ({setResults, searchType}) => {
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
            />
            <button>
                search
            </button>
        </form>
    );
}


export default Form;