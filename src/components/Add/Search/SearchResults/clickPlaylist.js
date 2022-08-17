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

    console.log(playlist);

    setCollections({
        ...collections, [playlist.id]: playlist}
    );
    
    // let playlistTracks = await getCollectionTracks(
    //     "playlist",
    //     playlist.id,
    //     token
    // );

    // let playlistTracks = 

    setAlbums({
        ...albums, 
        ...Object.fromEntries(
            playlist.tracks.items.map(t => (
                [t.track.album.id, t.track.album]
            ))
        )
    })
    
    setTracks({
        ...tracks,
        ...Object.fromEntries(
            playlist.tracks.items.map(t => (
                [t.track.id, t.track]
            ))
        )
    })
};

export default clickPlaylist;