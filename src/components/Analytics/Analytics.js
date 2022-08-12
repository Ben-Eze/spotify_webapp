import React from 'react';
import "./Analytics.css"
import BackButton from './BackButton/BackButton';
import Title from './Title/Title';


const Analytics = ({activePage, setActivePage, globalGettersNsetters}) => {
    // let displayStyle = (activePage === "analytics") ? "block" : "none";

    let content = (
        <div 
            className="analytics" 
            // style={{display: displayStyle}}
        >
            <BackButton 
                setActivePage={setActivePage} 
            />

            <Title 
                tracks={globalGettersNsetters.tracks}
                albums={globalGettersNsetters.albums}
            />
            
            <h2>analytics</h2>
        </div>
    )

    return (
        (activePage === "analytics") ? content : (
            <div></div>
        )
    )
};


export default Analytics;