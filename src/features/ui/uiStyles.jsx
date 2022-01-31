import styled from 'styled-components';

export const StyledButton = styled.button`
    color: ${(props)=> props.color};
    background-color: rgb(20, 20, 20);
    height: 35px;
    font-family: 'Oxygen', sans-serif;
    font-size: 0.8rem;
    min-width: 80px;
    width: 12vw;
    border: 1px solid black;
    margin-left: 3px;
    &:hover{
      background-color: rgb(0, 37, 54);
      cursor: pointer;
    }
`
export const StyledButtonClose = styled.button`
    color: ${(props)=> props.color};

    background-color: rgb(20, 20, 20);
    height: 30px;
    font-family: 'Oxygen', sans-serif;
    font-size: 0.8rem;
    width: 30px;
    border: 1px solid black;
    &:hover{
      background-color: rgb(0, 37, 54);
      cursor: pointer;
    }
`

export const StyledInput = styled.input`
  background-color: black;
  font-family: 'Oxygen', sans-serif;
  color: white;
  border: none;
  height: 35px;
  min-width: 210px;
  width: 25vw;
  padding: 0vh 1vw;
  @media screen and (max-width: 600px) {
        min-width: 100px;
  }
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