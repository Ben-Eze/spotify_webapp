import React, {useContext} from 'react';
import Context from '../../../Context';
import formatDates from './formatDates';
import TimelineChart from './TimelineChart/TimelineChart';

const Timeline = () => {
    let {tracks} = useContext(Context);
    let datePoints = formatDates(tracks);

    return (
        <TimelineChart points={datePoints}/>
    )
}

export default Timeline;