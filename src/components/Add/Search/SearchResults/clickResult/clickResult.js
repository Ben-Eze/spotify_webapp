import clickAlbum from './clickAlbum';
import clickPlaylist from './clickPlaylist';
import clickTrack from './clickTrack';


const clickResult = (result, gettersNsetters, token) => {
    switch (result.type) {
        case "album":
            clickAlbum(result, gettersNsetters, token);
            break;
        case "playlist":
            clickPlaylist(result, gettersNsetters, token);
            break;
        case "track":
            clickTrack(result, gettersNsetters);
            break;
        default:
            throw new Error(`result.type '${result.type}' not recognised`);
    }
};

export default clickResult;