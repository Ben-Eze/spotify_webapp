import getCollectionTracks from "../../../../api/getCollectionTracks";


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
    
    let playlistTracks = await getCollectionTracks(
        "playlist",
        playlist.id,
        token
    );

    setAlbums({
        ...albums, 
        ...Object.fromEntries(
            playlistTracks.map(t => (
                [t.track.album.id, t.track.album]
            ))
        )
    })
    
    setTracks({
        ...tracks,
        ...Object.fromEntries(
            playlistTracks.map(t => (
                [t.track.id, t.track]
            ))
        )
    })
};

export default clickPlaylist;