import { createContext, useContext, useState, useReducer } from "react"
import { finalColors, pickeAdRandomColor } from "../helpers"
import { START_GAME } from "./types"
import reducer from "./colorReducer"



const ColorContext = createContext()

export const ColorConsumer = () => useContext(ColorContext)

 const initialState = {
     colors:[],
     pickedColor: "",
     lives: 2,
     level: 1,
     boxes : 3
  }


const ColorProvider = ( {children} ) => {
     
  const [state, dispatch] = useReducer(reducer, initialState)
  

  const gameStart = () => {
    const colors = finalColors(state.boxes)
     const data = {
        colors,
        pickedColor: pickeAdRandomColor(colors)
     }
     dispatch({
        type: START_GAME,
        payload: data
     })
  }







  return (
    <ColorContext.Provider value={{
       state,
       gameStart,
    }}>
        {children}
    </ColorContext.Provider>
  )
}

export default ColorProvider