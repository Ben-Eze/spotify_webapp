import React, {useState} from 'react'
import './App.css';

import useToken from './api/useToken';

import Title from './components/Add/Title/Title';
import Add from './components/Add/Add';

function App() {
  const [token, setToken] = useState("");
  useToken(token, setToken);
  let [albums, setAlbums] = useState({});
  let [tracks, setTracks] = useState({});

  // let globalGettersNsetters = {
  //   albums, setAlbums, tracks, setTracks
  // };

  return (
    <div >
      <Title key="0"/>
      <Add 
        key="1" 
        globalGettersNsetters={{
          albums, setAlbums, tracks, setTracks
        }} 
        token={token}
        />
    </div>
  );
}

export default App;
