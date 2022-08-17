import searchURL from "./searchURL";
import searchAlbumPlaylistTrack from "./searchAlbumPlaylistTrack";


const searchApi = async (entry, searchType, token) => {
    if (searchType === "url") {
        return await searchURL(entry, token);
    } 
    
    return await searchAlbumPlaylistTrack(entry, searchType, token);;
}

export default searchApi;

