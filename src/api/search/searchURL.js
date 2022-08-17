import urlHelpers from "./urlHelpers";
import apiGETdata from "../apiGETdata";
import filterUnavailable from "./filterUnavailable";

const {removeHttps, removeOpenSpotify, separateSearch} = urlHelpers;


//TODO: ERROR MESSAGES
const urlSearch = async (entry, token) => {
  entry = removeHttps(entry);

  entry = removeOpenSpotify(entry);
  
  let {searchType, id} = separateSearch(entry);

  let data = await apiGETdata(
    `${searchType}s/${id}`,
    token
  )

  return [filterUnavailable(data)].filter(x => x);
}

export default urlSearch;

