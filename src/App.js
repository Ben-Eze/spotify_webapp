import React, {useState} from 'react'
import './App.css';

import useToken from './api/useToken';

import Title from './components/Title';
import Add from './components/Add';

function App() {
  const [token, setToken] = useState("");
  useToken(token, setToken);
  return (
    <div >
      <Title key="0"/>
      <Add key="1" token={token}/>
    </div>
  );
}

export default App;
