import { CORRECT_GUESS, INCORRECT_GUESS, MANAGE_LIVES, START_GAME } from "./types";




const reducer = ( state, action ) => {
     
    switch (action.type) {
        case START_GAME:
           // case GAME_OVER:
         return {
             ...state,
             colors: action.payload.colors,
             pickedColor: action.payload.pickedColor,
             lives: action.payload.lives,
         }

         case CORRECT_GUESS:
            return {
                ...state,
                colors: state.colors.map(c => c = action.payload)
            }

            case INCORRECT_GUESS:
                return {
                    ...state,
                    colors: state.colors.map(c => c === action.payload ? c = "white" : c)
                }

                case MANAGE_LIVES:
                    return {
                        ...state,
                        lives: state.lives -1 
                    }
           
        default:
            return state;
    }
}
export default reducer