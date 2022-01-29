import styled from 'styled-components';

export const StyledButton = styled.button`
    color: ${(props)=> props.color};
    background-color: rgb(20, 20, 20);
    height: 35px;
    font-family: 'Oxygen', sans-serif;
    &:hover{
      background-color: rgb(0, 37, 54);
    }
`

export const StyledInput = styled.input`
  background-color: black;
  font-family: 'Oxygen', sans-serif;
  color: white;
  border: none;
  height: 35px;
  width: 25vw;
  padding: 0vh 1vw;
`

export const StyledSearch = styled.button`
    position: relative;
    margin-left: 2px;
    height: 37px;
    color: white;
    background-color: rgb(10, 10, 10);
    border: none;
    cursor: pointer;
    bottom: 1px;
    
`