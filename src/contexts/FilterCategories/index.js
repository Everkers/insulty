import React from "react"
import reducer, { initialState } from "./reducer"
const FilterContext = React.createContext()
export const useFilterContext = () => {
  const context = React.useContext(FilterContext)
  if (!context) {
    throw new Error("You need to call useContext within provider")
  }
  return context
}
export const FilterProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = { state, dispatch }
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  )
}
