import getCollectionTracks from "../../api/getCollectionTracks";


const clickPlaylist = async (
        playlist, 
        {collections, setCollections, 
         albums, setAlbums, 
         tracks, setTracks},
        token
    ) => {

    setCollections({...collections, [playlist.id]: playlist});
    
    let playlistTracks = await getCollectionTracks(
        "playlist",
        playlist.id,
        token
    );
        
    playlistTracks.forEach(t => {
        setAlbums({...albums, [t.track.album.id]: t.track.album});
        setTracks({...tracks, [t.track.id]: t})
    })
};

export default clickPlaylist;