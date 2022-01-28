// Individual profile info and styling

import React from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import { convertUnixTime } from '../utility';

const StyledDiv = styled.div`

    display: flex;
    flex-direction: column;
    
    height: 100%;
    width: 20vw;
    max-width: 20vh;
    text-align: left;
    line-height: 1rem;
    font-size: 0.7rem;
    padding: 2vh;
    margin: 1vh 0vh;

    background-color: rgb(28, 28, 28);
    border-radius: 35px;
    & h2{
      text-align: center;
      margin-top: 0rem;
      margin-bottom: 0.3rem;
      height: 1.6rem;
    }
    & p{
      margin: 0px;
    }
    & a img{
      border-radius: 10px;
      width: 100%;
    }
    &:hover{
      background-color: rgb(0, 37, 54);
      
    }

`

const Userpage = ({steamid, displayname, avatar, lastlogoff, realname, age, country, status, url}) => {
    const state = useSelector(state => state);              
    const dispatch = useDispatch();



  return (
    <StyledDiv>
        <h2>{displayname}</h2>
        <p>{realname ? realname : <br></br>}</p>
        <p>ID: {steamid}</p>
        <p>Last seen: {status === 1 ? "Online" : convertUnixTime(lastlogoff)}</p>
        <p>Account Born: {convertUnixTime(age).slice(3, 10)}</p>
        <a href={url}><img src={avatar} alt="avatar"/> </a>
        
    </StyledDiv>
  );
}

export default Userpage;


// steamid={x.steamid}
// personaname={x.personaname}
// avatar={x.avatarfull}
// lastlogoff={x.lastlogoff}
// realname={x.realname}
// age={x.timecreated}
// country={x.countrycode}
// status={x.personastate}