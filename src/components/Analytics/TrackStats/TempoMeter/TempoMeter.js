import React from 'react';


const getAverageBPM = (audio_features) => {
    if (audio_features == null) {
        return
    }
    let sum = 0;
    audio_features.forEach(aF => {sum += aF.tempo});
    let N = audio_features.length;
    return Math.round(sum / N);
}

const TempoMeter = ({audioFeatures}) => {
    let averageBPM = getAverageBPM(audioFeatures);

    return (
        <div>
            <p>
                {`Average BPM: ${averageBPM}`}
            </p>
        </div>
    )
}

export default TempoMeter;