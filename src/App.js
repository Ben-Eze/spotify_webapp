import React, {useState} from 'react'
import './App.css';

import useToken from './api/useToken';

import Header from './components/Header/Header';
import Add from './components/Add/Add';
import Analytics from './components/Analytics/Analytics';

function App() {
  const [token, setToken] = useState("");
  useToken(token, setToken);
  let [albums, setAlbums] = useState({});
  let [tracks, setTracks] = useState({});
  const globalGettersNsetters = {
    albums, setAlbums, tracks, setTracks
  };
  const [activePage, setActivePage] = useState("add");

  return (
    <div >
      <Header key="title"/>

      <Add 
        key="app" 
        activePage={activePage}
        setActivePage={setActivePage}
        globalGettersNsetters={globalGettersNsetters} 
        token={token}
      />

      <Analytics 
        key="analytics"
        activePage={activePage}
        setActivePage={setActivePage}
        globalGettersNsetters={globalGettersNsetters}
      />
    </div>
  );
}

export default App;
