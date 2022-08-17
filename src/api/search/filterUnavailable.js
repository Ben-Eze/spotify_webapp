// const filterUnavailable = (data) => {
//     switch (data.type) {
//         case "album":
//             return (
//                 data.images.length
//                 && data.release_date.length
//             ) ? data : null
//         case "playlist":
//             data.tracks.items = data.tracks.items.filter(i => filterUnavailable(i.track));
//             data.tracks.total = data.tracks.items.length;
//             return data;
//         case "track":
//             return (
//                 data.album.images.length 
//                 && data.album.release_date.length
//                 && !data.is_local
//             ) ? data : null
//         default:
//             throw new Error("");
//     }
// };

// export default filterUnavailable;