import React, { createContext, useState } from "react";
import useToken from './api/useToken';


const Context = createContext();

export const ContextProvider = ({children}) => {
    const [token, setToken] = useState("");
    useToken(token, setToken);
    let [albums, setAlbums] = useState({});
    let [tracks, setTracks] = useState({});
    let [collections, setCollections] = useState({});
    let [activePage, setActivePage] = useState("add");

    return (
        <Context.Provider 
            value={{
                token, 
                albums, setAlbums,
                tracks, setTracks,
                collections, setCollections,
                activePage, setActivePage
            }} 
        >
            {children}
        </Context.Provider>
    )
}

export default Context;