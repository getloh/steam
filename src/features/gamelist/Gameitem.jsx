import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledGameitem = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: black;
    margin: 5px;
    padding: 10px;
    text-align: left;
    align-items: center;
    border-radius: 5px;
    

    width: 45vw;
    max-height: 5vh;

    & .gameitem-left{
        display: flex;
    }

    & .box{
        margin: 0px 2px;
    }
    & .gameitem-icon{
        position: relative;

        top: 3px;

    }
    & .gameitem-id{
        font-size: 0.7em;
        color: grey;
    }
    & .gameitem-playtime{
        
    }
    &:hover{
        background-color: rgb(0, 37, 54);
    }

    @media screen and (max-width: 600px) {
        .gameitem-name {
            font-size: 0.7em;
        }
        .gameitem-id {
            font-size: 0.5em;
        }
        .gameitem-playtime{
            font-size: 0.7em;
        }
}
`
// ---------------------------------------------------------------------------



function Gameitem({appid, name, playtime, logo, icon}) {
    const state = useSelector(state => state.api)

    const convertPlaytime = (mins) => {
        let hrs = mins / 60
        if (hrs === 0){
            return
        }
        return `${hrs.toFixed(1)} Hrs`
    }


//* ---------------------------------------------------------------------------
    return (
    <StyledGameitem>
        
        <div className="gameitem-left">
            <div className="gameitem-icon box"><img src={`http://media.steampowered.com/steamcommunity/public/images/apps/${appid}/${icon}.jpg`} alt="" /></div>
            <div className="gameitem-nameandid">
                <div className="gameitem-name box">{name}</div>
                <div className="gameitem-id box">AppID: {appid}</div>
            </div>

        </div>

        {/* <div className="gameitem-logo box"></div> */}
        <div className="gameitem-playtime box">{state.apiUserData.length > 1 ? "" : convertPlaytime(playtime)}</div>


    </StyledGameitem>
  );
}

export default Gameitem;
