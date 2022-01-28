import React from 'react';
import './App.css';

import {Nav} from './features/ui/nav/nav.jsx'
import Input from './features/ui/input/input'
import { Globalstyle } from './globalstyles';
import Usercontainer from './features/userpage/Usercontainer';

function App() {
  return (
    <div className="App">
      <Globalstyle/>
      <div className="header">
        <Input/>
        <Nav/>
        
        
      </div>
      <div className="userarea">
      <Usercontainer className="Usercontainer"/>

      </div>
      
      <h1> title </h1>
    </div>
  );
}

export default App;
