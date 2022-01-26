import React from 'react';
import './App.css';

import {Nav} from './features/ui/nav/nav.js'
import Input from './features/ui/input/input'
import { Globalstyle } from './globalstyles';
import Usercontainer from './features/userpage/usercontainer';

function App() {
  return (
    <div className="App">
      <Globalstyle/>
      <div className="header">
        <Input/>
        <Nav/>
        
        <Usercontainer/>
      </div>
      
      <h1> title </h1>
    </div>
  );
}

export default App;
