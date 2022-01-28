import { store } from "../../app/store.js";



// const query = store.getState().ui.input;

export const Gamelogic = {
    compareGames(objArr1, objArr2){
        const matchedArray = objArr1.filter(obj1 => objArr2.some(obj2 => {return obj1.id === obj2.id}) );
        return matchedArray;

    }

}