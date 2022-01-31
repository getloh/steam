import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setApikey } from '../../api/apiSlice';
import { setMode } from '../uiSlice';
import { StyledButton, StyledInput, StyledButtonClose } from '../uiStyles';


export function Nav() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.ui);

  const handleInput = (event) => {            // Changes state.ui.input
    dispatch(setApikey(event.target.value))
}

    return (
      <div className="Nav">
        {/* <StyledButton color="lime" onClick={() => Steam.getGameData()}>Grab game data</StyledButton> */}
        <StyledButton color="coral" onClick={() => dispatch(setMode("howto"))}>How to use</StyledButton>
        <StyledButton color="white" onClick={() => dispatch(setMode("about"))}>About</StyledButton>
        <div className="error">{state.error}</div>

        <div id="howto" className={state.mode === "howto" ? "reveal" : null}>
          <div className="splashhead">
          <h2>How to / Readme</h2>
          <StyledButtonClose color="white" onClick={() => dispatch(setMode(""))}>X</StyledButtonClose>
          </div>
          
          <div>
            This site takes steam users and their games lists, and then can merge the games lists to show a list of what games you both own (or have played, for free games)
            <br />
            Profile need to be fully public for this to work with my API key, alternatively you can insert your own API Key below. Which will allow you to see profiles with stats set to friends only.
            <br />
            This key can be found at <a href="https://steamcommunity.com/dev/apikey">https://steamcommunity.com/dev/apikey</a> </div>
            <StyledInput placeholder='Insert API Key here' onChange={handleInput}></StyledInput>
          <div></div>
        </div>

        <div id="about" className={state.mode === "about" ? "reveal" : null}>
        <div className="splashhead">
          <h2>About</h2>
          <StyledButtonClose color="white" onClick={() => dispatch(setMode(""))}>X</StyledButtonClose>
          </div>
          
          <div>
            Written from scratch by Steven Loh
            <br /> 
            2022
            <br />  
            Tech used: React, Redux, Styled Components, Steam API


          </div>
        </div>
          

      </div>
    );
  }