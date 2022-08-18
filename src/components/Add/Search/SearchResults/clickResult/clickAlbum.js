import getCollectionTracks from "../../../../../api/getCollectionTracks";


const clickAlbum = async (
    album, 
    {
        collections, setCollections,
        albums, setAlbums, 
        tracks, setTracks, 
    },
    token
    ) => {
    
    setCollections({...collections, [album.id]: album});
    setAlbums({...albums, [album.id]: album});

    let albumTracks = (
        album.tracks == null 
        || album.tracks.total > album.tracks.limit
        ) ? await getCollectionTracks(
            "album",
            album.id,
            token
        ) : album.tracks.items

    setTracks({
        ...tracks,
        ...Object.fromEntries(         
            albumTracks.map(t => (
                [t.id, {...t, album}]
            ))
        )
    })
};

export default clickAlbum;