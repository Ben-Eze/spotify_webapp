// const print = display.log;


const removeHttps = (entry) => {
  if (entry.startsWith("https://")) {
    return entry.slice(8);
  }
  return entry
}

const removeOpenSpotify = (entry) => {
  if (!entry.startsWith("open.spotify.com/")) {
    throw new Error("entry does not start with 'open.spotify.com/'");
  }
  return entry.slice(17);
}

const numOfOccurences = (str, char) => {
  let n = 0;
  [...str].forEach(c => {n += (c === char)});
  return n;
}

const separateSearch = (entry) => {
  if (numOfOccurences(entry, "/") !== 1) {
    throw new Error("invalid url");
  }
  
  const slashIndex = entry.indexOf("/");
  const searchType = entry.slice(0, slashIndex);
  const id = entry.slice(slashIndex + 1);
  return {searchType, id};
}

const urlSearch = async (entry, token) => {
  entry = removeHttps(entry);

  entry = removeOpenSpotify(entry);
  
  let {searchType, id} = separateSearch(entry);

  console.log(`https://api.spotify.com/v1/${searchType}/${id}`);
  console.log(token);

  let result = await fetch(
    `https://api.spotify.com/v1/${searchType}s/${id}`, 
    {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    }
  );


  let data = await result.json();
  console.log(data);

}

export default urlSearch;

