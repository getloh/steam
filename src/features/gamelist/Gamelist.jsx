import React from 'react';
import Gameitem from './Gameitem';
import { useSelector } from 'react-redux';
import { Gamelogic } from './gamelogic';

function Gamelist() {
    const state = useSelector(state => state); 

    let gamesArray = () => {


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

  return (
  <div className='Gamelist'>

    {/* {state.api.apiGameData[0].games.map(x => 
        <p>{x.name}</p>
    )
    
    } */}
    {gamesArray()?.map(x=> <p>{x.name}</p>)}
    


    
  </div>
  );
}

export default Gamelist;
