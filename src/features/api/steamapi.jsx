import {apikey} from "./apikey.js";
// The above is a simple file containing 'export const apikey = "X",
// with an apikey from Steam

import { store } from "../../app/store.js";
import {setStatus, setApiUserData, setSteamId, setApiGameData} from './apiSlice.jsx'
import { setInput, setError, setMode} from "../ui/uiSlice.jsx";
import { useSelector } from "react-redux";


// const query = store.getState().ui.input;

// if (store.getState().api.apikey !== ""){
    
// }

export const Steam = {

    getUserData() {         // Grabs user data from steam
        const query = store.getState().ui.input;
        const steamIDarr = store.getState().api.steamId;
        
        if (!steamIDarr.includes(query)){
            console.log(steamIDarr);
            console.log(`trigger fetch - query is ${query}`)
            fetch(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apikey}&steamids=${query}`).then(response => {
                if(response.ok){                            // Response OK
                    console.log("response OK")
                    console.log(response);
                    return response.json()
                };
                throw new Error('Request failed!');         // Error logging
            }, networkError => {
                console.log(networkError.message);
            }).then(jsonResponse => {
                if (jsonResponse.response.players.length !== 0){                    //? Success
                store.dispatch(setApiUserData(jsonResponse.response.players[0]));   // Add data to state
                store.dispatch(setStatus("Fetched-user"));                          // Set status
                store.dispatch(setSteamId(`${query}`));                             // Add steamID to state
                console.log(jsonResponse);
                this.getGameData();                                                 // Searches/refreshes gameslist
                store.dispatch(setError(""))
                store.dispatch(setMode(""))
            }
            else {store.dispatch(setError("SteamID or VanityURL not recognized"))}
            });
        }
        else{console.log("User has already been loaded")}
    },

    getVanityId() {         // Grabs steamID from a vanityID
        const query = store.getState().ui.input;
        console.log(`trigger vanity fetch - query is ${query}`)
        fetch(`http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${apikey}&vanityurl=${query}`).then(response => {
            if(response.ok){                            // Response OK
                console.log(response);
                return response.json()
            };
            throw new Error('Request failed!');         // Error logging
        }, networkError => {
            console.log(networkError.message);
        }).then(jsonResponse => {                       // Success
            store.dispatch(setStatus("Returned-vanity"));
            console.log(jsonResponse);
            if(jsonResponse.response.success === 1){        // Changes the input state to the vanity's steamID, then calls getuserdata()
                store.dispatch(setInput(jsonResponse.response.steamid));
                this.getUserData();
            }
            else{store.dispatch(setError("SteamID or VanityURL not recognized"))}
        });
    },

    getGameData(){          // Grabs gamedata array based on steamID's in state
        let users = store.getState().api.steamId;   // Grab the steamIDs and store in 'users'
        let gameDataArray = store.getState().api.apiGameData;
        store.dispatch(setStatus("Fetching-gamedata"))

        for (let i = 0; i < users.length; i++){     // Iterate over users array           
            console.log(`Get Game Data for ${users[i]}`);
            
            if (gameDataArray.findIndex(object => object.steamid === users[i]) === -1){
                fetch(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apikey}&steamid=${users[i]}&format=json&include_appinfo=true&include_played_free_games=true
                `).then(response => {
                if(response.ok){                            // Response OK
                    console.log(response);
                    return response.json()
                };
                throw new Error('Request failed!');         // Error logging
                }, networkError => {
                    console.log(networkError.message);
                }).then(jsonResponse => {                       //* Success
                    jsonResponse.response.steamid = users[i];
                    store.dispatch(setApiGameData(jsonResponse.response));
                    store.dispatch(setStatus("Fetched-gamedata"))
                    store.dispatch(setError(""))
                });
            }   // end of if statement
            else {console.log(`game data for user ${users[i]} has already been loaded`);
            store.dispatch(setStatus("Fetched-gamedataalreadypresent"))        }
        }   // end of for loop
        

        

    }   // End of getGameData()
}       // End of 'Steam'