import apiGETdata from "./apiGETdata";

const getCollectionTracks = async (collectionType, id, token) => {
    if (! (collectionType in {"album": null, "playlist": null})) {
        throw new Error(`${collectionType} is not a valid collectionType`);
    }

    const data = await apiGETdata(
        `${collectionType}s/${id}/tracks`,
        token
    );
    
    if (collectionType === "playlist"){
        return data.items.filter(i => i.track != null);
    }
    return data.items;
}

export default getCollectionTracks;