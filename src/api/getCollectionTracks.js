import apiGETdata from "./apiGETdata";

const getCollectionTracks = async (collectionType, id, token) => {
    if (! (collectionType in {"album": null, "playlist": null})) {
        throw new Error(`${collectionType} is not a valid collectionType`);
    }

    const collectionObject = await apiGETdata(
        `${collectionType}s/${id}`,
        token
    );

    let nTracks = collectionObject.tracks.total;
    const limit = (collectionType === "album") ? 50 : 100;
    let nPasses = Math.ceil(nTracks / limit);
    let trackItems = [];

    for (let i = 0; i < nPasses; i++) {
        let trackPass = await apiGETdata(
            `${collectionType}s/${id}/tracks?limit=${limit}&offset=${i * limit}`,
            token
        );
        trackItems.push(...trackPass.items);
    }

    // if (collectionType === "playlist"){
    //     trackItems.forEach((item, i) => {
    //         if (item.track == null) {
    //             console.log(
    //                 trackItems, i
    //             );
    //             throw new Error("")
    //         }
    //     })
        
    //     return trackItems.filter(i => i.track != null);
    // }

    return trackItems;
}

export default getCollectionTracks;