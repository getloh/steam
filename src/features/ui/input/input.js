import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setInput, setMode } from '../uiSlice';
import { Steam } from '../../api/steamapi';

export const StyledInput = styled.input`
    color: red;
    background-color: grey;
    height: 10vh;
    
`



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
      
    




  return <div>
    <StyledInput placeholder="search for a user" onChange={handleInput}></StyledInput>
    <button onClick={handleFetch}>Search!</button>
  </div>;
}

export default Input;
