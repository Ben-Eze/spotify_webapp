const clickTrack = async (
    track,
    {
        collections, setCollections, 
        albums, setAlbums, 
        tracks, setTracks
    }) => {

    if (track.id in tracks) {
        return
    }

    setCollections({...collections, [track.album.id]: track.album});
    setAlbums({...albums, [track.album.id]: track.album});
    setTracks({...tracks, [track.id]: track});
};

export default clickTrack;