const getToken = async () => {

    let clientID = "e5f9b557780143f2b50e67f6f0879644";
    let clientSecret = "296094a911aa4331834459ebc9a45ae0";

    const result = await fetch(
        "https://accounts.spotify.com/api/token", 
        {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientID + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

    // console.log(result);
  let data = await result.json();
  return data.access_token;
};


export default getToken;