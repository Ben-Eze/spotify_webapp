import React, {useState} from 'react'
import './App.css';

import useToken from './api/useToken';

import Title from './components/Title/Title';
import Add from './components/Add/Add';
import Analytics from './components/Analytics/Analytics';

function App() {
  const [token, setToken] = useState("");
  useToken(token, setToken);
  let [albums, setAlbums] = useState({});
  let [tracks, setTracks] = useState({});

  return (
    <div >
      <Title key="title"/>

      <Add 
        key="app" 
        globalGettersNsetters={{
          albums, setAlbums, tracks, setTracks
        }} 
        token={token}
      />

      <Analytics 
        key="analytics"
      />
    </div>
  );
}

export default App;
