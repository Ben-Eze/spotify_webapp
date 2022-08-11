import urlHelpers from "./urlHelpers";
import apiGETdata from "../apiGETdata";

const {removeHttps, removeOpenSpotify, separateSearch} = urlHelpers;


//TODO: ERROR MESSAGES
const urlSearch = async (entry, token) => {
  entry = removeHttps(entry);

  entry = removeOpenSpotify(entry);
  
  let {searchType, id} = separateSearch(entry);

  return await apiGETdata(
    `${searchType}s/${id}`,
    token
  )
}

export default urlSearch;

