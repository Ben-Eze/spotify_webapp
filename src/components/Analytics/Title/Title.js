import React from 'react';
import TitleImage from './TitleImage/TitleImage';
import "./Title.css"


const Title = ({tracks, albums}) => {
    
    return (
        <div className='title'>
            <p>
                learn more about your music
            </p>

            <TitleImage tracks={tracks} albums={albums} />
        </div>
    )
}

export default Title;