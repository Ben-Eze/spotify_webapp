import React from 'react'
import './App.css';

import Header from './components/Header/Header';
import { ContextProvider } from './Context';
import Add from './components/Add/Add';
import Analytics from './components/Analytics/Analytics';

function App() {
  return (
    <div className='App'>
      <ContextProvider>
        <Header key="title"/>
        <Add key="app"/>
        <Analytics key="analytics"/>
      </ContextProvider>
    </div>
  );
}

export default App;
