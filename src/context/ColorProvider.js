import { createContext, useContext, useState, useReducer } from "react"
import { finalColors, pickeAdRandomColor } from "../helpers"
import { START_GAME, CORRECT_GUESS, INCORRECT_GUESS, MANAGE_LIVES } from "./types"
import reducer from "./colorReducer"
import Swal from 'sweetalert2'



const ColorContext = createContext()

export const ColorConsumer = () => useContext(ColorContext)

 const initialState = {
     colors:[],
     pickedColor: "",
     lives: 3,
     level: 1,
     boxes : 5
  }


const ColorProvider = ( {children} ) => {
   const [allColors, setAllColors] = useState([]) 
   const [randomColor, setRandomColor] = useState("") 
   const [showSpinner, setShowSpinner] = useState(true)
  const [state, dispatch] = useReducer(reducer, initialState)
  

  const gameStart = () => {
    const colors = finalColors(state.boxes)
      
    // console.log(state.lives);
     const data = {
        colors,
        pickedColor: pickeAdRandomColor(colors),
        lives: 3
     }
     setAllColors(colors)
     setRandomColor(data.pickedColor)
     dispatch({
        type: START_GAME,
        payload: data
     })

     // INCORRECT

  }

 //  will compare clicked color with arr
  const compareColorPicked = (clickedColor) => {
     
      console.log(randomColor);
      if (clickedColor === randomColor) {
         dispatch({
            type: CORRECT_GUESS,
            payload: clickedColor
         })
       
           Swal.fire({
             title: 'Right!',
             text: 'You Win!',
             icon: 'success',
             confirmButtonText: 'Continue'
           })
               setTimeout(() => {
                  setShowSpinner(false)
                  gameStart()
                  
               }, 3000);

        }else if (clickedColor !== randomColor) {
         dispatch({
            type: INCORRECT_GUESS,
            payload: clickedColor
         })
         dispatch({
            type: MANAGE_LIVES,
         })
      
       }

      
  }





  return (
    <ColorContext.Provider value={{
       state,
       showSpinner,
       setShowSpinner,
       gameStart,
       compareColorPicked,
    }}>
        {children}
    </ColorContext.Provider>
  )
}

export default ColorProvider