const appendToYearStrings = (t, yearStrings) => {
    let releaseDate = t.album.release_date
    if (releaseDate != null) {
        yearStrings.push(releaseDate.slice(0, 4))
    }
}

const incrementDecade = (yearStrings, decades) => {
    yearStrings.forEach(ys => {decades[ys.slice(0, 3) + "0"] += 1});
}

const decadeObj2array = (decades) => {
    return Object.entries(decades).map(([key, value]) => [parseInt(key), value])
}

const initialiseDecadeObj = () => {
    const startDecade = 1900;
    const endDecade = 2020;

    return Object.fromEntries(
        [...Array((endDecade-startDecade)/10+1).keys()].map(
            i => [10*i + 1900, 0]
        )
    );
}


const formatDates = (tracks) => {
    let yearStrings = [];
    
    Object.values(tracks).forEach(t => {
        appendToYearStrings(t, yearStrings);
    })

    let decades = initialiseDecadeObj();
    
    incrementDecade(yearStrings, decades);
    
    return decadeObj2array(decades);
};

export default formatDates;