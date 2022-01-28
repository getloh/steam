import React from 'react';
import Gameitem from './Gameitem';
import { useSelector } from 'react-redux';

function Gamelist() {
    const state = useSelector(state => state); 

    let gamesArray = () => {


        if (state.api.apiGameData.length === 0){
            console.log("case 0");
            return []
        }
        if (state.api.apiGameData.length === 1){
            console.log("case 1");
            return state.api.apiGameData[0];
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
    {gamesArray().games?.map(x=> <p>{x.name}</p>)}
    


    <Gameitem/>
  </div>
  );
}

export default Gamelist;
