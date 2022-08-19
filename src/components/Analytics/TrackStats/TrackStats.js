import React, {useContext} from 'react';
import Context from '../../../Context';
import ProfanityMeter from './ProfanityMeter/ProfanityMeter';
import TempoMeter from './TempoMeter/TempoMeter';


const TrackStats = () => {
    let { tracks, audioFeatures } = useContext(Context);

    return (
        <div>
            <ProfanityMeter tracks={tracks} />
            <TempoMeter audioFeatures={audioFeatures} />
        </div>
    )
}

export default TrackStats;