import getToken from "./getToken";


const useToken = async (token, setToken) => {
    if (! token) {
        setToken(await getToken());
    }
}


export default useToken;