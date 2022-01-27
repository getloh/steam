import {apikey} from "./apikey.js";
// The above is a simple file containing 'export const apikey = "X",
// with an apikey from Steam

import { store } from "../../app/store.js";
import {setApidata, setStatus, setApiUserData} from './apiSlice.js'
import { setInput } from "../ui/uiSlice.js";


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
        }).then(jsonResponse => {                       // Success
            store.dispatch(setApiUserData(jsonResponse.response.players[0]));
            store.dispatch(setStatus("Fetched-user"));
            console.log(jsonResponse);
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
            
        });

    }
}