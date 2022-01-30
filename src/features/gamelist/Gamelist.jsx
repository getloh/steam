import React from 'react';
import Gameitem from './Gameitem';
import { useSelector } from 'react-redux';
import { Gamelogic } from './gamelogic';

function Gamelist() {
    const state = useSelector(state => state); 

    let gamesArray = () => {    // returns array of objects
        if (state.api.apiGameData.length === 0){
            console.log("case 0");
            return []
        }
        if (state.api.apiGameData.length === 1){
            console.log("case 1");
            return state.api.apiGameData[0].games;
        }
        if (state.api.apiGameData.length === 2){
            console.log("case 2");
            return Gamelogic.compareGames(state.api.apiGameData[0].games, state.api.apiGameData[1].games )
        }
        if (state.api.apiGameData.length > 2){
            console.log("case > 2");
            let sharedGamesArray = state.api.apiGameData[0].games;
            for (let i = 1; i < state.api.steamId.length; i++){
                
                console.log(`i = ${i} , array is  ${state.api.apiGameData[i].games}`);
                
                sharedGamesArray = Gamelogic.compareGames(sharedGamesArray, state.api.apiGameData[i].games );
            }
            return sharedGamesArray;
        }
        else {
            console.log("gamesArray function failed");
        }
    }

    const gamesArrayLoad = () => {
        if (state.api.apiGameData.length === state.api.apiUserData.length){
            return gamesArray()?.map(x=>
                // <a href={`https://store.steampowered.com/app/${x.appid}/`} id="game-hyperlink">
                <Gameitem 
                    
                    key={x.appid}
                    appid={x.appid}
                    name={x.name}
                    playtime={x.playtime_forever}
                    icon={x.img_icon_url}
                    logo={x.img_logo_url}
                />,
                {/* </a> */}
                
                )
            }
        else if (state.api.status === "Fetching-gamedata"){
            return <p>Loading...</p>
            }
        else {return ""}
            
    }
    

  return (
  <div className='Gamelist'>
    
    {gamesArrayLoad()}
        
  </div>
  );
}

export default Gamelist;
