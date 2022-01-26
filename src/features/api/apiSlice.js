import {createSlice} from '@reduxjs/toolkit';

// actions - basic functions which return type and payload

export const setSteamid = (string) => {
    return {
        type: 'api/setSteamid',
        payload: string
    }
};

export const setApidata = (json) => {
    return {
        type: 'api/setApidata',
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
    steamid: [],
    usernum: 1,
    apiuserdata: [],
    apidata: [],
    status: "initial",
    apikey: "",

}

// reducer with switch, or toolkit createSlice with options

const options = {
    name: "api",
    initialState: initialState,
    reducers: {
        setSteamid: (state, action) => {
            state.steamid.push(action.payload);
        }, 
        setApidata: (state, action) => {
            state.apidata.push(action.payload);
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