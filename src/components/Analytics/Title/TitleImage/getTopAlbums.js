const getTopAlbums = (tracks, albums) => {
    let albumIDs = Object.values(tracks).map(t => t.album.id);
    
    let idOccurence = {};
    albumIDs.forEach(id => {
        if (id in idOccurence){
            idOccurence[id] += 1
        } else {
            idOccurence[id] = 1
        }
    })
    
    // console.log(idOccurence);
    let orderedIDs = Object.keys(idOccurence).sort((a, b) => (idOccurence[b] - idOccurence[a]));
    // console.log(orderedIDs);
    return orderedIDs.slice(0, 5).map(id => albums[id]);
}

export default getTopAlbums;