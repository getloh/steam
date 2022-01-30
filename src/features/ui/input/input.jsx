// Holds the div for the top of the page with input and search bar

import styled from 'styled-components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInput, setMode } from '../uiSlice';
import { Steam } from '../../api/steamapi';
import { StyledInput, StyledSearch } from '../uiStyles';




function Input() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const handleInput = (event) => {            // Changes state.ui.input
        dispatch(setInput(event.target.value))
    }

    const handleFetch = (event) => {
      if (isNaN(state.ui.input)){
        console.log("nan triggered")
        Steam.getVanityId();
      }
      else{Steam.getUserData()}
    }
      
    const handleKeypress = e => {                   // Allows for using 'enter' on keyboard instead of mouseclick on button
      if (e.keyCode === 13) {
        handleFetch();
      }
    }




  return <div>
    <StyledInput placeholder="Find user by vanity URL or SteamID" onKeyUp={handleKeypress} onChange={handleInput}></StyledInput>
    <StyledSearch onClick={handleFetch}> <i class="fas fa-search"></i></StyledSearch>
  </div>;
}

export default Input;
