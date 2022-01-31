import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import {Nav} from './features/ui/nav/nav.jsx'
import Input from './features/ui/input/input'
import { Globalstyle } from './globalstyles';
import Usercontainer from './features/userpage/Usercontainer';
import Gamelist from './features/gamelist/Gamelist';
import steamlogo from './Steam_icon_logo.svg'

function App() {
  const state = useSelector(state => state)

  return (
    <div className="App">
      <Globalstyle/>
      <div className="header">
        <div className="header-left">
          <img src={steamlogo} alt="Logo" />
          <h1>SST</h1>
        </div>
        
        <Input/>
        
        <Nav/>
        
        
      </div>
      <div className="userarea">
      <Usercontainer className="Usercontainer"/>

      </div>
      <div className="main">
      {state.api.apiGameData ? <Gamelist/> : null}
      </div>
      
      <footer>

      </footer>
    </div>
  );
}

export default App;
