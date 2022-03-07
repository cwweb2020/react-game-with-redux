import { START_GAME } from "./types";




const reducer = ( state, action ) => {
     
    switch (action.type) {
        case START_GAME:
         return {
             ...state,
             colors: action.payload.colors,
             pickedColor: action.payload.pickedColor
         }
           
        default:
            return state;
    }
}
export default reducer