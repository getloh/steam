import styled from 'styled-components'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInput, setMode } from '../uiSlice';
import { Steam } from '../../api/steamapi';

const StyledButton = styled.button`
    color: ${(props)=> props.color};
    background-color: ${(props)=> props.backgroundColor};
    &:hover{
      background-color: limegreen
    }

`


export function Nav() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.ui);


    return (
      <div className="Nav">
        <StyledButton color="green" onClick={() => Steam.getGameData()}>Grab game data</StyledButton>
        <StyledButton color="purple" onClick={() => console.log("click 2")}>Another Button</StyledButton>
        <StyledButton color="blue">Ooh la la Button</StyledButton>
        <div className="error">{state.error}</div>
      </div>
    );
  }