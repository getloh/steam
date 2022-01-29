import styled from 'styled-components'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInput, setMode } from '../uiSlice';
import { Steam } from '../../api/steamapi';
import { StyledButton } from '../uiStyles';



export function Nav() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.ui);


    return (
      <div className="Nav">
        <StyledButton color="lime" onClick={() => Steam.getGameData()}>Grab game data</StyledButton>
        <StyledButton color="coral" onClick={() => console.log("click 2")}>Another Button</StyledButton>
        <StyledButton color="aqua">Ooh la la Button</StyledButton>
        <div className="error">{state.error}</div>
      </div>
    );
  }