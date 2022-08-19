import React from 'react';


const getProfanityPercentage = (tracks) => {
    let nExplicit = 0;
    Object.values(tracks).forEach(t => {nExplicit += t.explicit});
    let nTracks = Object.keys(tracks).length;
    return Math.round(100 * nExplicit / nTracks);
}

const ProfanityMeter = ({tracks}) => {
    let profanityPercentage = getProfanityPercentage(tracks);
    return (
        <div>
            <p>
                {`Your playlist is ${profanityPercentage}% evil`}
            </p>
        </div>
    )
}

export default ProfanityMeter;