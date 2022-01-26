import {apikey} from "./apikey.js";
// The above is a simple file containing 'export const apikey = "X",
// with an apikey from https://openweathermap.org/

import { store } from "../app/store.js";
import {setApidata, setStatus} from './apiSlice.js'


const query = store.getState().ui.input;

export const Steam = {
    getUserData(query) {
        console.log("trigger fetch")
        fetch(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apikey}&steamids=${query}`).then(response => {
            if(response.ok){                            // Response OK
                console.log("response OK")
                console.log(response);
                return response.json()
            };
            throw new Error('Request failed!');         // Error logging
        }, networkError => {
            console.log(networkError.message);
        }).then(jsonResponse => {                       // Success
            store.dispatch(setApidata(jsonResponse));
            store.dispatch(setStatus("Fetched"));
            console.log("response recieved");
            console.log(jsonResponse);
        });

    }
}