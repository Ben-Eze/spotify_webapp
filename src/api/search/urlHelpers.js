// TODO: ERROR MESSAGES
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

const urlHelpers = {removeHttps, removeOpenSpotify, separateSearch};
export default urlHelpers;