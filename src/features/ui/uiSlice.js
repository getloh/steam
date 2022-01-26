import {createSlice} from '@reduxjs/toolkit';

// actions - basic functions which return type and payload

export const setInput = (string) => {
    return {
        type: 'ui/setInput',
        payload: string
    }
};

export const setMode = (string) => {
    return {
        type: 'ui/setMode',
        payload: string
    }
}


// reducer - initialState

const initialState = {
    input: "",
    mode: "",
    
}

// reducer with switch, or toolkit createSlice with options

const options = {
    name: "ui",
    initialState: initialState,
    reducers: {
        setInput: (state, action) => {
            state.input = action.payload;
        }, 
        setMode: (state, action) => {
            state.mode = action.payload
        },
    }
}

const uiSlice = createSlice(options)

// export default
export default uiSlice.reducer