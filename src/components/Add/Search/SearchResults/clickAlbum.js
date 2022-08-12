import getCollectionTracks from "../../../../api/getCollectionTracks";


const clickAlbum = async (
        album, 
        {collections, setCollections, 
         albums, setAlbums, 
         tracks, setTracks},
        token
    ) => {

    setCollections({...collections, [album.id]: album});
    setAlbums({...albums, [album.id]: album});
    
    let albumTracks = await getCollectionTracks(
        "album",
        album.id,
        token
    );

    setTracks({
        ...tracks,
        ...Object.fromEntries(
            albumTracks.map(t => (
                [t.id, t]
            ))
        )
    })
};

export default clickAlbum;