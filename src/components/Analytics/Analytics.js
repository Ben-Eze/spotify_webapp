import React from 'react';
import "./Analytics.css"
import BackButton from './BackButton/BackButton';


const Analytics = ({activePage, setActivePage, globalGettersNsetters}) => {
    let displayStyle = (activePage === "analytics") ? "block" : "none";

    return (
        <div 
            className="analytics" 
            style={{display: displayStyle}}
        >
            <BackButton 
                setActivePage={setActivePage} 
            />
            
            <h2>analytics</h2>
        </div>
    )
};


export default Analytics;