import urlSearch from "./urlSearch";


const albumPlaylistTrackSearch = async (entry, searchType, token) => {
    try {
        let result = await fetch(
            `https://api.spotify.com/v1/search?q=${entry}&type=${searchType}`, 
            {
                method: 'GET',
                headers: { 'Authorization' : 'Bearer ' + token}
            }
        );

        let data = await result.json();

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

    

const apiSearch = async (entry, searchType, token) => {
    if (searchType === "url") {
        let urlRetval = await urlSearch(entry, token);
        console.log(urlRetval);
        return urlRetval;
    } 
    
    // const aptsRetval = await albumPlaylistTrackSearch(entry, searchType);
    // console.log(aptsRetval);
    return await albumPlaylistTrackSearch(entry, searchType, token);;
}

export default apiSearch;

