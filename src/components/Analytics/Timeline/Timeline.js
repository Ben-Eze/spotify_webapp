import React, {useContext} from 'react';
import Context from '../../../Context';
import formatDates from './formatDates';

const Timeline = () => {
    let {tracks} = useContext(Context);
    let dates = formatDates(tracks);

    return (
        <div>

        </div>
    )
}

export default Timeline;