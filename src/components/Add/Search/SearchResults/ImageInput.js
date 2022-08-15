import React from 'react';
// import "./ImageInput.css";


const ImageInput = ({url, onClick, alt=""}) => (
    <input 
        type="image" 
        className='img-input'
        // key={key}
        src={url} 
        alt={alt}
        onClick={onClick}
        draggable="false"
    />
);

export default ImageInput;

