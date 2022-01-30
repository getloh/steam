import {createSlice} from '@reduxjs/toolkit';
import { testState } from './testState';

// actions - basic functions which return type and payload

export const setSteamId = (string) => {
    return {
        type: 'api/setSteamId',
        payload: string
    }
};

export const setApiGameData = (json) => {
    return {
        type: 'api/setApiGameData',
        payload: json
    }
};

export const setApiUserData = (json) => {
    return {
        type: 'api/setApiUserData',
        payload: json
    }
};

export const setApikey = (key) => {
    return {
        type: 'api/setApikey',
        payload: key
    }
};

export const setStatus = (status) => {
    return{
        type: 'api/setStatus',
        payload: status
    }
}

// reducer - initialState

const initialState = {
    steamId: [],
    userNum: 1,
    apiUserData: [],
    apiGameData: [],
    status: "initial",
    apikey: "",

}

// reducer with switch, or toolkit createSlice with options

const options = {
    name: "api",
    initialState: testState,
    reducers: {
        setSteamId: (state, action) => {
            state.steamId.push(action.payload);
        }, 
        setApiGameData: (state, action) => {
            state.apiGameData.push(action.payload);
        },
        setApiUserData: (state, action) => {
            state.apiUserData.push(action.payload);
        },
        setApikey: (state, action) => {
            state.apikey = action.payload;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        }

    }
}

const apiSlice = createSlice(options)

// export default
export default apiSlice.reducer