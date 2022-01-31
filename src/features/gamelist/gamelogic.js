import { store } from "../../app/store.js";



// const query = store.getState().ui.input;

export const Gamelogic = {
    compareGames(objArr1, objArr2){

        if (objArr1.hasOwnProperty('game_count') && objArr2.hasOwnProperty('game_count')) {
            const matchedArray = objArr1.filter(obj1 => objArr2.some(obj2 => {return obj1.appid === obj2.appid}) );
            return matchedArray;
    }
    }

}