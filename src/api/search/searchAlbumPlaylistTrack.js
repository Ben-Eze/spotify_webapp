import apiGETdata from "../apiGETdata";

const searchAlbumPlaylistTrack = async (entry, searchType, token) => {
    // TODO: ERROR MESSAGES
    try {
        let data = await apiGETdata(
            `search?q=${entry}&type=${searchType}`,
            token
        )

        switch (searchType) {
            case "album":
                return data.albums.items;
            case "playlist":
                return data.playlists.items;
            case "track":
                return data.tracks.items;
            default:
                console.log(`searchType '${searchType}' not recognised`)
                break;
        }

    } catch (e) {
        console.log(e);
    }
}

export default searchAlbumPlaylistTrack;