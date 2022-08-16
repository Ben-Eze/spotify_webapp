import getCollectionTracks from "../../../../api/getCollectionTracks";


const clickAlbum = async (
    album, 
    gettersNsetters,
    token
    ) => {
    
    console.log(gettersNsetters);
    let {
        collections, setCollections,
        albums, setAlbums, 
        tracks, setTracks, 
    } = gettersNsetters;
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
                [t.id, {...t, album}]
            ))
        )
    })
};

export default clickAlbum;