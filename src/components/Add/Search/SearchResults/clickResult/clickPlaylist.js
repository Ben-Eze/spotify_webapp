import getCollectionTracks from "../../../../../api/getCollectionTracks";
import filterUnavailable from "../../filterUnavailable";


const clickPlaylist = async (
    playlist, 
    {
        collections, setCollections, 
        albums, setAlbums, 
        tracks, setTracks,
    },
    token
    ) => {
    setCollections({
        ...collections, [playlist.id]: playlist}
    );
    
    if (playlist.tracks.items == null){
        playlist.tracks.items = await getCollectionTracks(
            "playlist",
            playlist.id,
            token
        )
    }

    let filteredPlaylist = filterUnavailable(playlist);

    setAlbums({
        ...albums, 
        ...Object.fromEntries(
            filteredPlaylist.tracks.items.map(i => (
                [i.track.album.id, i.track.album]
            ))
        )
    })
    
    setTracks({
        ...tracks,
        ...Object.fromEntries(
            filteredPlaylist.tracks.items.map(i => (
                [i.track.id, i.track]
            ))
        )
    })
};

export default clickPlaylist;