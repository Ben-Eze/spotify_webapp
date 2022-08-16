import React, {useContext} from 'react';
import Context from '../../Context';
import "./Analytics.css"
import BackButton from './BackButton/BackButton';
import Title from './Title/Title';


const Analytics = () => {
    let {activePage} = useContext(Context);

    let content = (
        <div className="analytics">
            <BackButton/>
            <Title/>
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