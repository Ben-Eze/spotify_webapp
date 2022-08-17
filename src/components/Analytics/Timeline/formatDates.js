const formatDates = (tracks) => {
    console.log(
        Object.values(tracks).map(t => parseInt(t.album.release_date.slice(0, 4)))
    );
};

export default formatDates;