import styled from 'styled-components'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInput, setMode } from '../uiSlice';

const StyledButton = styled.button`
    color: ${(props)=> props.backgroundColor};

    &:hover{
      background-color: limegreen

    }

`


export function Nav() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.ui);


    return (
      <div className="Nav">
        <StyledButton backgroundColor="pink">This is a button</StyledButton>
        <StyledButton>This is a button</StyledButton>
        <StyledButton>This is a button</StyledButton>
      </div>
    );
  }