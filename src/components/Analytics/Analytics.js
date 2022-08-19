import React, {useContext} from 'react';
import Context from '../../Context';
import "./Analytics.css"
import BackButton from './BackButton/BackButton';
import Timeline from './Timeline/Timeline';
import Title from './Title/Title';
import TrackStats from './TrackStats/TrackStats';


const Analytics = () => {
    let {activePage} = useContext(Context);

    let content = (
        <div className="analytics">
            <BackButton/>
            <Title/>
            <h2>analytics</h2>
            <Timeline />
            <TrackStats />
        </div>
    )

    return (
        (activePage === "analytics") ? content : (
            <div></div>
        )
    )
};


export default Analytics;