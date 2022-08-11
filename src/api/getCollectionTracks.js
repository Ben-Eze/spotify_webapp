import apiGETdata from "./apiGETdata";

const getCollectionTracks = async (collectionType, id, token) => {
    if (! (collectionType in {"album": null, "playlist": null})) {
        throw new Error(`${collectionType} is not a valid collectionType`);
    }

    const data = await apiGETdata(
        `${collectionType}s/${id}/tracks`,
        token
    );

    return data.items;
}

export default getCollectionTracks;