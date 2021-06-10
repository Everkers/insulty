import React from "react"
import reducer, { initialState } from "./reducer"

const RootContext = React.createContext()
export const useRootContext = () => {
  const context = React.useContext(RootContext)
  if (!context) {
    throw new Error("You need to call useContext within provider")
  }

  return context
}
export const RootProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = { state, dispatch }
  return <RootContext.Provider value={value}>{children}</RootContext.Provider>
}
