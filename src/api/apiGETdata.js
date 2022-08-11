const apiGETdata = async (subURL, token) => {
    let result = await fetch(
        `https://api.spotify.com/v1/${subURL}`, 
        {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        }
      );
    
      return await result.json();
}


export default apiGETdata;