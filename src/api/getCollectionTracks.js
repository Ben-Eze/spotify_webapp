import apiGETdata from "./apiGETdata";

const getCollectionTracks = (collectionType, id, token) => {
    if (! collectionType in {"album": null, "playlist": null}) {
        throw new Error(`${collectionType} is not a valid collectionType`);
    }
    return apiGETdata(
        `${collectionType}s/${id}/tracks`,
        token
    )
}

export default getCollectionTracks;