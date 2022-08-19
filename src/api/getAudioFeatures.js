import apiGETdata from "./apiGETdata";

const getAudioFeatures = async (tracks, token, setAudioFeatures) => {
    let nTracks = Object.keys(tracks).length;
    const limit = 100;
    let nPasses = Math.ceil(nTracks / limit);

    let audioFeatures = []

    for (let i = 0; i < nPasses; i++) {
        let subURL = `audio-features?ids=${
            Object.keys(tracks).slice(i*limit, (i+1)*limit).join("%2C")
        }`;

        let data = await apiGETdata(subURL, token);
        audioFeatures.push(...data.audio_features)
    }

    setAudioFeatures(audioFeatures);
}


export default getAudioFeatures;