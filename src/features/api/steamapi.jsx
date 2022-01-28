import {apikey} from "./apikey.js";
// The above is a simple file containing 'export const apikey = "X",
// with an apikey from Steam

import { store } from "../../app/store.js";
import {setApidata, setStatus, setApiUserData, setSteamId, setApiGameData} from './apiSlice.jsx'
import { setInput, setError} from "../ui/uiSlice.jsx";


// const query = store.getState().ui.input;

export const Steam = {
    
    getUserData() {
        const query = store.getState().ui.input;
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
            if (jsonResponse.response.players.length !== 0){                    // Success
            store.dispatch(setApiUserData(jsonResponse.response.players[0]));   // Add data to state
            store.dispatch(setStatus("Fetched-user"));                          // Set status
            store.dispatch(setSteamId(`${query}`));                             // Add steamID to state
            console.log(jsonResponse);
        }
        else {store.dispatch(setError("SteamID or VanityURL not recognized"))}
        });

    },

    getVanityId() {
        const query = store.getState().ui.input;
        console.log(`trigger vanity fetch - query is ${query}`)
        fetch(`http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${apikey}&vanityurl=${query}`).then(response => {
            if(response.ok){                            // Response OK
                console.log("response OK")
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

    getGameData(){
        let users = store.getState().api.steamId;   // Grab the steamIDs and store in 'users'
        console.log("getgameData")
        for (let i = 0; i < users.length; i++){     // Iterate over users array           
            console.log(`Get Game Data for ${users[i]}`);
            
            fetch(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apikey}&steamid=${users[i]}&format=json&include_appinfo=true
            `).then(response => {
            if(response.ok){                            // Response OK
                console.log(response);
                return response.json()
            };
            throw new Error('Request failed!');         // Error logging
        }, networkError => {
            console.log(networkError.message);
        }).then(jsonResponse => {                       // Success
            console.log(jsonResponse);
            jsonResponse.response.steamid = users[i];
            store.dispatch(setApiGameData(jsonResponse.response))

        });
        }   // end of for loop


        

    }   // End of getGameData()
}       // End of 'Steam'